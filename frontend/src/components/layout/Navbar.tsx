import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MenuIcon,
  XIcon,
  UserIcon,
  LogOutIcon,
  SettingsIcon,
  MapIcon,
  ChevronDownIcon } from
'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button } from '../ui/Button';
import { useAuth } from '../../hooks/useAuth';
export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, isAuthenticated, logout } = useAuth();
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsUserMenuOpen(false);
  }, [location.pathname]);
  // Close user menu on outside click
  useEffect(() => {
    const handleClick = () => setIsUserMenuOpen(false);
    if (isUserMenuOpen) {
      document.addEventListener('click', handleClick);
      return () => document.removeEventListener('click', handleClick);
    }
  }, [isUserMenuOpen]);
  const navLinks = [
  {
    name: 'Properties',
    path: '/properties'
  },
  {
    name: 'Amenities',
    path: '/#amenities'
  },
  {
    name: 'Investment',
    path: '/#investment'
  },
  {
    name: 'Roadmap',
    path: '/roadmap'
  },
  ...(isAuthenticated && user?.role === 'resident' ?
  [
  {
    name: 'My Portal',
    path: '/resident'
  }] :

  []),
  ...(isAuthenticated && user?.role === 'investor' ?
  [
  {
    name: 'My Portfolio',
    path: '/investor'
  }] :

  []),
  ...(isAuthenticated ?
  [
  {
    name: 'Marketplace',
    path: '/marketplace'
  }] :

  [])];

  const handleLogout = () => {
    logout();
    navigate('/');
  };
  // Hide navbar on auth pages
  const isAuthPage = ['/login', '/signup', '/forgot-password'].includes(
    location.pathname
  );
  if (isAuthPage) return null;
  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${isScrolled ? 'bg-altura-black/90 backdrop-blur-md border-b border-altura-border py-4' : 'bg-transparent py-6'}`}
        initial={{
          y: -100
        }}
        animate={{
          y: 0
        }}
        transition={{
          duration: 0.6,
          ease: [0.22, 1, 0.36, 1]
        }}>
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <Link to="/" className="group">
            <h1 className="font-serif text-2xl tracking-[0.2em] text-altura-white group-hover:text-altura-gold transition-colors">
              ALTURA
            </h1>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) =>
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm font-medium tracking-wide transition-colors ${location.pathname === link.path ? 'text-altura-gold' : 'text-altura-muted hover:text-altura-gold'}`}>
              
                {link.name}
              </Link>
            )}

            {isAuthenticated ?
            <div className="relative">
                <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsUserMenuOpen(!isUserMenuOpen);
                }}
                className="flex items-center space-x-2 text-sm text-altura-muted hover:text-altura-gold transition-colors">
                
                  <div className="w-8 h-8 rounded-full bg-altura-gold/10 border border-altura-gold/30 flex items-center justify-center">
                    <span className="font-serif text-sm text-altura-gold">
                      {user?.name?.charAt(0)}
                    </span>
                  </div>
                  <span className="hidden xl:inline">
                    {user?.name?.split(' ')[0]}
                  </span>
                  <ChevronDownIcon className="w-3 h-3" />
                </button>

                <AnimatePresence>
                  {isUserMenuOpen &&
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 10,
                    scale: 0.95
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1
                  }}
                  exit={{
                    opacity: 0,
                    y: 10,
                    scale: 0.95
                  }}
                  transition={{
                    duration: 0.15
                  }}
                  className="absolute right-0 mt-3 w-56 bg-altura-card border border-altura-border shadow-2xl z-50"
                  onClick={(e) => e.stopPropagation()}>
                  
                      <div className="p-4 border-b border-altura-border">
                        <p className="text-altura-white font-medium text-sm">
                          {user?.name}
                        </p>
                        <p className="text-altura-muted text-xs mt-1">
                          {user?.email}
                        </p>
                      </div>
                      <div className="py-2">
                        <Link
                      to="/profile"
                      className="flex items-center px-4 py-3 text-sm text-altura-muted hover:text-altura-gold hover:bg-altura-surface transition-colors">
                      
                          <SettingsIcon className="w-4 h-4 mr-3" /> Account
                          Settings
                        </Link>
                        <Link
                      to="/roadmap"
                      className="flex items-center px-4 py-3 text-sm text-altura-muted hover:text-altura-gold hover:bg-altura-surface transition-colors">
                      
                          <MapIcon className="w-4 h-4 mr-3" /> Platform Guide
                        </Link>
                        <button
                      onClick={handleLogout}
                      className="flex items-center w-full px-4 py-3 text-sm text-red-400 hover:bg-red-500/5 transition-colors">
                      
                          <LogOutIcon className="w-4 h-4 mr-3" /> Sign Out
                        </button>
                      </div>
                    </motion.div>
                }
                </AnimatePresence>
              </div> :

            <div className="flex items-center space-x-4">
                <Link to="/login">
                  <Button variant="ghost" size="sm">
                    Sign In
                  </Button>
                </Link>
                <Link to="/signup">
                  <Button variant="primary" size="sm">
                    Get Started
                  </Button>
                </Link>
              </div>
            }
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-altura-white hover:text-altura-gold transition-colors"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open menu">
            
            <MenuIcon className="w-6 h-6" />
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen &&
        <motion.div
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 1
          }}
          exit={{
            opacity: 0
          }}
          className="fixed inset-0 z-[60] bg-altura-black flex flex-col">
          
            <div className="flex items-center justify-between px-6 py-6 border-b border-altura-border">
              <Link
              to="/"
              className="font-serif text-2xl tracking-[0.2em] text-altura-gold">
              
                ALTURA
              </Link>
              <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-altura-white hover:text-altura-gold transition-colors"
              aria-label="Close menu">
              
                <XIcon className="w-6 h-6" />
              </button>
            </div>

            {isAuthenticated &&
          <div className="px-6 py-4 border-b border-altura-border flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-altura-gold/10 border border-altura-gold/30 flex items-center justify-center">
                  <span className="font-serif text-lg text-altura-gold">
                    {user?.name?.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="text-altura-white font-medium">{user?.name}</p>
                  <p className="text-altura-gold text-xs tracking-widest uppercase">
                    {user?.role}
                  </p>
                </div>
              </div>
          }

            <div className="flex-1 flex flex-col justify-center px-8 space-y-8">
              {navLinks.map((link, i) =>
            <motion.div
              key={link.name}
              initial={{
                opacity: 0,
                x: -20
              }}
              animate={{
                opacity: 1,
                x: 0
              }}
              transition={{
                delay: i * 0.1
              }}>
              
                  <Link
                to={link.path}
                className="text-2xl font-serif text-altura-white hover:text-altura-gold transition-colors block">
                
                    {link.name}
                  </Link>
                </motion.div>
            )}

              {isAuthenticated &&
            <>
                  <motion.div
                initial={{
                  opacity: 0,
                  x: -20
                }}
                animate={{
                  opacity: 1,
                  x: 0
                }}
                transition={{
                  delay: navLinks.length * 0.1
                }}>
                
                    <Link
                  to="/profile"
                  className="text-2xl font-serif text-altura-white hover:text-altura-gold transition-colors block">
                  
                      Settings
                    </Link>
                  </motion.div>
                  <motion.div
                initial={{
                  opacity: 0,
                  y: 20
                }}
                animate={{
                  opacity: 1,
                  y: 0
                }}
                transition={{
                  delay: (navLinks.length + 1) * 0.1
                }}
                className="pt-8">
                
                    <Button
                  variant="ghost"
                  className="w-full text-red-400 hover:bg-red-500/5"
                  onClick={handleLogout}>
                  
                      <LogOutIcon className="w-4 h-4 mr-2" /> Sign Out
                    </Button>
                  </motion.div>
                </>
            }

              {!isAuthenticated &&
            <motion.div
              initial={{
                opacity: 0,
                y: 20
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                delay: navLinks.length * 0.1
              }}
              className="pt-8 space-y-4">
              
                  <Link to="/login">
                    <Button variant="secondary" size="lg" className="w-full">
                      Sign In
                    </Button>
                  </Link>
                  <Link to="/signup">
                    <Button variant="primary" size="lg" className="w-full">
                      Get Started
                    </Button>
                  </Link>
                </motion.div>
            }
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </>);

}