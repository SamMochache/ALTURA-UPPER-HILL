import React, { useState, Children } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import {
  UserIcon,
  MailIcon,
  PhoneIcon,
  ShieldIcon,
  BellIcon,
  LogOutIcon,
  CheckCircleIcon,
  HomeIcon,
  SaveIcon } from
'lucide-react';
export function ProfilePage() {
  const { user, updateProfile, logout } = useAuth();
  const navigate = useNavigate();
  const [isSaving, setIsSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [name, setName] = useState(user?.name || '');
  const [phone, setPhone] = useState(user?.phone || '');
  const handleSave = async () => {
    setIsSaving(true);
    await new Promise((r) => setTimeout(r, 1000));
    updateProfile({
      name,
      phone
    });
    setIsSaving(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };
  const handleLogout = () => {
    logout();
    navigate('/');
  };
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };
  return (
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
      className="min-h-screen bg-altura-black pt-32 pb-24">
      
      <div className="max-w-3xl mx-auto px-6 md:px-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-12">
          
          {/* Header */}
          <motion.div variants={itemVariants}>
            <h1 className="font-serif text-4xl text-altura-white mb-3">
              Account Settings
            </h1>
            <p className="text-altura-muted">
              Manage your profile and preferences
            </p>
          </motion.div>

          {/* Profile Card */}
          <motion.div
            variants={itemVariants}
            className="bg-altura-card border border-altura-border p-8">
            
            <div className="flex items-center gap-6 mb-8 pb-8 border-b border-altura-border">
              <div className="w-20 h-20 rounded-full bg-altura-gold/10 border-2 border-altura-gold/30 flex items-center justify-center">
                <span className="font-serif text-2xl text-altura-gold">
                  {user?.name?.charAt(0) || 'A'}
                </span>
              </div>
              <div>
                <h2 className="font-serif text-2xl text-altura-white">
                  {user?.name}
                </h2>
                <p className="text-altura-gold text-sm tracking-widest uppercase mt-1">
                  {user?.role === 'investor' ? 'Investor' : 'Resident'}
                </p>
                {user?.unit &&
                <p className="text-altura-muted text-sm mt-1">
                    {user.unit} · {user.floor}
                  </p>
                }
              </div>
            </div>

            {saved &&
            <motion.div
              initial={{
                opacity: 0,
                y: -10
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              className="bg-green-500/10 border border-green-500/20 p-4 mb-6 flex items-center">
              
                <CheckCircleIcon className="w-4 h-4 text-green-400 mr-3" />
                <p className="text-green-400 text-sm">
                  Profile updated successfully.
                </p>
              </motion.div>
            }

            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
                  <UserIcon className="absolute left-0 top-8 w-4 h-4 text-altura-muted" />
                  <Input
                    label="Full Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="pl-6" />
                  
                </div>
                <div className="relative">
                  <MailIcon className="absolute left-0 top-8 w-4 h-4 text-altura-muted" />
                  <Input
                    label="Email"
                    value={user?.email || ''}
                    disabled
                    className="pl-6 opacity-50" />
                  
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
                  <PhoneIcon className="absolute left-0 top-8 w-4 h-4 text-altura-muted" />
                  <Input
                    label="Phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="pl-6" />
                  
                </div>
                <div className="relative">
                  <HomeIcon className="absolute left-0 top-8 w-4 h-4 text-altura-muted" />
                  <Input
                    label="Account Type"
                    value={user?.role === 'investor' ? 'Investor' : 'Resident'}
                    disabled
                    className="pl-6 opacity-50 capitalize" />
                  
                </div>
              </div>
              <Button variant="primary" onClick={handleSave} loading={isSaving}>
                <SaveIcon className="w-4 h-4 mr-2" /> Save Changes
              </Button>
            </div>
          </motion.div>

          {/* Security */}
          <motion.div
            variants={itemVariants}
            className="bg-altura-card border border-altura-border p-8">
            
            <div className="flex items-center mb-6">
              <ShieldIcon className="w-5 h-5 text-altura-gold mr-3" />
              <h3 className="font-serif text-xl text-altura-white">Security</h3>
            </div>
            <div className="space-y-6">
              <Input
                label="Current Password"
                type="password"
                placeholder="Enter current password" />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  label="New Password"
                  type="password"
                  placeholder="Enter new password" />
                
                <Input
                  label="Confirm New Password"
                  type="password"
                  placeholder="Confirm new password" />
                
              </div>
              <Button variant="secondary">Update Password</Button>
            </div>
          </motion.div>

          {/* Notifications */}
          <motion.div
            variants={itemVariants}
            className="bg-altura-card border border-altura-border p-8">
            
            <div className="flex items-center mb-6">
              <BellIcon className="w-5 h-5 text-altura-gold mr-3" />
              <h3 className="font-serif text-xl text-altura-white">
                Notifications
              </h3>
            </div>
            <div className="space-y-4">
              {[
              {
                label: 'Payment reminders',
                desc: 'Get notified before rent is due'
              },
              {
                label: 'Maintenance updates',
                desc: 'Status changes on your requests'
              },
              {
                label: 'Investment reports',
                desc: 'Monthly portfolio summaries'
              },
              {
                label: 'Marketplace offers',
                desc: 'New services and promotions'
              }].
              map((item, i) =>
              <div
                key={i}
                className="flex items-center justify-between py-3 border-b border-altura-border/50 last:border-0">
                
                  <div>
                    <p className="text-altura-white text-sm font-medium">
                      {item.label}
                    </p>
                    <p className="text-altura-muted text-xs mt-1">
                      {item.desc}
                    </p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                    type="checkbox"
                    defaultChecked
                    className="sr-only peer" />
                  
                    <div className="w-10 h-5 bg-altura-border rounded-full peer-checked:bg-altura-gold transition-colors after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-altura-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:after:translate-x-5" />
                  </label>
                </div>
              )}
            </div>
          </motion.div>

          {/* Sign Out */}
          <motion.div variants={itemVariants}>
            <Button
              variant="ghost"
              onClick={handleLogout}
              className="text-red-400 hover:text-red-300 hover:bg-red-500/5">
              
              <LogOutIcon className="w-4 h-4 mr-2" /> Sign Out
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>);

}