import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation } from
'react-router-dom';
import { AnimatePresence } from 'framer-motion';
// Auth
import { AuthProvider } from './hooks/useAuth';
import { ProtectedRoute } from './components/auth/ProtectedRoute';
// Layout
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { AIChatButton } from './components/shared/AIChatButton';
// Public Pages
import { LandingPage } from './pages/LandingPage';
import { PropertiesPage } from './pages/PropertiesPage';
import { PropertyDetailPage } from './pages/PropertyDetailPage';
import { RoadmapPage } from './pages/RoadmapPage';
// Auth Pages
import { LoginPage } from './pages/LoginPage';
import { SignupPage } from './pages/SignupPage';
import { ForgotPasswordPage } from './pages/ForgotPasswordPage';
// Protected Pages
import { ResidentDashboard } from './pages/ResidentDashboard';
import { InvestorDashboard } from './pages/InvestorDashboard';
import { MarketplacePage } from './pages/MarketplacePage';
import { ProfilePage } from './pages/ProfilePage';
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}
function AnimatedRoutes() {
  const location = useLocation();
  const isAuthPage = ['/login', '/signup', '/forgot-password'].includes(
    location.pathname
  );
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/properties" element={<PropertiesPage />} />
        <Route path="/property/:id" element={<PropertyDetailPage />} />
        <Route path="/roadmap" element={<RoadmapPage />} />

        {/* Auth Routes */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />

        {/* Protected Routes */}
        <Route
          path="/resident"
          element={
          <ProtectedRoute requiredRole="resident">
              <ResidentDashboard />
            </ProtectedRoute>
          } />
        
        <Route
          path="/investor"
          element={
          <ProtectedRoute requiredRole="investor">
              <InvestorDashboard />
            </ProtectedRoute>
          } />
        
        <Route
          path="/marketplace"
          element={
          <ProtectedRoute>
              <MarketplacePage />
            </ProtectedRoute>
          } />
        
        <Route
          path="/profile"
          element={
          <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          } />
        
      </Routes>
    </AnimatePresence>);

}
function AppLayout() {
  const location = useLocation();
  const isAuthPage = ['/login', '/signup', '/forgot-password'].includes(
    location.pathname
  );
  return (
    <div className="min-h-screen flex flex-col bg-altura-black text-altura-white font-sans selection:bg-altura-gold selection:text-altura-black">
      <Navbar />
      <main className="flex-grow">
        <AnimatedRoutes />
      </main>
      {!isAuthPage && <Footer />}
      {!isAuthPage && <AIChatButton />}
    </div>);

}
export function App() {
  return (
    <Router>
      <AuthProvider>
        <ScrollToTop />
        <AppLayout />
      </AuthProvider>
    </Router>);

}