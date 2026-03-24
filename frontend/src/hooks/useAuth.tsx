import React, {
  useCallback,
  useEffect,
  useState,
  createContext,
  useContext } from
'react';
export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: 'resident' | 'investor';
  unit?: string;
  floor?: string;
  avatar?: string;
}
interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (
  email: string,
  password: string)
  => Promise<{
    success: boolean;
    error?: string;
  }>;
  signup: (data: SignupData) => Promise<{
    success: boolean;
    error?: string;
  }>;
  logout: () => void;
  updateProfile: (data: Partial<User>) => void;
}
interface SignupData {
  name: string;
  email: string;
  phone: string;
  password: string;
  role: 'resident' | 'investor';
  unit?: string;
}
const AuthContext = createContext<AuthContextType | null>(null);
// Mock user database
const MOCK_USERS: Record<
  string,
  {
    password: string;
    user: User;
  }> =
{
  'james@altura.com': {
    password: 'resident123',
    user: {
      id: 'usr-001',
      name: 'James Kamau',
      email: 'james@altura.com',
      phone: '+254 712 345 678',
      role: 'resident',
      unit: 'Residence 3A',
      floor: 'Floor 12'
    }
  },
  'njoroge@altura.com': {
    password: 'investor123',
    user: {
      id: 'usr-002',
      name: 'Dr. Peter Njoroge',
      email: 'njoroge@altura.com',
      phone: '+254 722 987 654',
      role: 'investor'
    }
  }
};
export function AuthProvider({ children }: {children: React.ReactNode;}) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  // Check for saved session on mount
  useEffect(() => {
    const saved = localStorage.getItem('altura_user');
    if (saved) {
      try {
        setUser(JSON.parse(saved));
      } catch {
        localStorage.removeItem('altura_user');
      }
    }
    setIsLoading(false);
  }, []);
  const login = useCallback(async (email: string, password: string) => {
    // Simulate API delay
    await new Promise((r) => setTimeout(r, 1500));
    const entry = MOCK_USERS[email.toLowerCase()];
    if (!entry) {
      return {
        success: false,
        error: 'No account found with this email address.'
      };
    }
    if (entry.password !== password) {
      return {
        success: false,
        error: 'Incorrect password. Please try again.'
      };
    }
    setUser(entry.user);
    localStorage.setItem('altura_user', JSON.stringify(entry.user));
    return {
      success: true
    };
  }, []);
  const signup = useCallback(async (data: SignupData) => {
    await new Promise((r) => setTimeout(r, 1500));
    if (MOCK_USERS[data.email.toLowerCase()]) {
      return {
        success: false,
        error: 'An account with this email already exists.'
      };
    }
    const newUser: User = {
      id: `usr-${Date.now()}`,
      name: data.name,
      email: data.email,
      phone: data.phone,
      role: data.role,
      unit: data.unit
    };
    // Add to mock DB
    MOCK_USERS[data.email.toLowerCase()] = {
      password: data.password,
      user: newUser
    };
    setUser(newUser);
    localStorage.setItem('altura_user', JSON.stringify(newUser));
    return {
      success: true
    };
  }, []);
  const logout = useCallback(() => {
    setUser(null);
    localStorage.removeItem('altura_user');
  }, []);
  const updateProfile = useCallback((data: Partial<User>) => {
    setUser((prev) => {
      if (!prev) return prev;
      const updated = {
        ...prev,
        ...data
      };
      localStorage.setItem('altura_user', JSON.stringify(updated));
      return updated;
    });
  }, []);
  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        login,
        signup,
        logout,
        updateProfile
      }}>
      
      {children}
    </AuthContext.Provider>);

}
export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}