import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
interface ProtectedRouteProps {
  children: React.ReactNode;
  requiredRole?: 'resident' | 'investor';
}
export function ProtectedRoute({
  children,
  requiredRole
}: ProtectedRouteProps) {
  const { isAuthenticated, user, isLoading } = useAuth();
  const location = useLocation();
  if (isLoading) {
    return (
      <div className="min-h-screen bg-altura-black flex items-center justify-center">
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 border-2 border-altura-gold/30 border-t-altura-gold rounded-full animate-spin mb-6" />
          <span className="text-altura-muted text-sm tracking-widest uppercase">
            Loading
          </span>
        </div>
      </div>);

  }
  if (!isAuthenticated) {
    return (
      <Navigate
        to="/login"
        state={{
          from: location
        }}
        replace />);


  }
  if (requiredRole && user?.role !== requiredRole) {
    return (
      <Navigate
        to={user?.role === 'investor' ? '/investor' : '/resident'}
        replace />);


  }
  return <>{children}</>;
}