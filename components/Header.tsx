import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Terminal, LogOut, ChevronDown } from 'lucide-react';
import { config } from '../config';
import { useAuth } from '../context/AuthContext';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowProfileMenu(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleNavClick = (sectionId: string) => {
    setIsOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLogout = () => {
    logout();
    setShowProfileMenu(false);
    navigate('/');
  };

  const navLinks = [
    { name: 'About', id: 'about' },
    { name: 'Flow', id: 'flow' },
    { name: 'Timeline', id: 'timeline' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => navigate('/')}>
            <Terminal className="h-8 w-8 text-neon-purple mr-2" />
            <span className="font-mono font-bold text-xl tracking-tighter text-white">
              {config.eventName}
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <span 
                onClick={() => handleNavClick('home')} 
                className="cursor-pointer text-gray-300 hover:text-white hover:bg-white/10 px-3 py-2 rounded-md text-sm font-medium transition-all"
              >
                Home
              </span>
              {navLinks.map((link) => (
                <span
                  key={link.name}
                  onClick={() => handleNavClick(link.id)}
                  className="cursor-pointer text-gray-300 hover:text-white hover:bg-white/10 px-3 py-2 rounded-md text-sm font-medium transition-all"
                >
                  {link.name}
                </span>
              ))}
            </div>
          </div>

          {/* Auth Buttons / User Profile */}
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <div className="relative" ref={dropdownRef}>
                <button 
                  onClick={() => setShowProfileMenu(!showProfileMenu)}
                  className="flex items-center space-x-2 focus:outline-none"
                >
                  <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-neon-purple to-neon-cyan p-[2px]">
                    <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                       <span className="font-bold text-white text-sm">{user.name.charAt(0)}</span>
                    </div>
                  </div>
                  <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${showProfileMenu ? 'rotate-180' : ''}`} />
                </button>

                {/* Dropdown Menu */}
                {showProfileMenu && (
                  <div className="absolute right-0 mt-2 w-72 bg-zinc-900 border border-white/10 rounded-xl shadow-[0_0_20px_rgba(0,0,0,0.5)] py-2 animate-in fade-in zoom-in-95 duration-200 origin-top-right">
                    <div className="px-4 py-3 border-b border-white/10">
                      <p className="text-white font-semibold">{user.name}</p>
                      <p className="text-xs text-gray-400 truncate">{user.email}</p>
                    </div>
                    
                    <div className="px-4 py-3 space-y-2">
                       <div className="flex justify-between text-sm">
                         <span className="text-gray-500">Branch</span>
                         <span className="text-neon-cyan">{user.branch}</span>
                       </div>
                       <div className="flex justify-between text-sm">
                         <span className="text-gray-500">Roll No</span>
                         <span className="text-neon-purple">{user.rollNo}</span>
                       </div>
                    </div>

                    <div className="border-t border-white/10 mt-1">
                      <button 
                        onClick={handleLogout}
                        className="w-full text-left px-4 py-2 text-sm text-red-400 hover:bg-white/5 flex items-center transition-colors"
                      >
                        <LogOut className="w-4 h-4 mr-2" />
                        Logout
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link to="/login" className="bg-neon-purple hover:bg-purple-700 text-white px-5 py-2 rounded-md font-medium text-sm transition-all shadow-[0_0_10px_rgba(176,38,255,0.4)]">
                Login
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="md:hidden bg-black border-b border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
             <span 
                onClick={() => handleNavClick('home')} 
                className="cursor-pointer text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Home
              </span>
            {navLinks.map((link) => (
              <span
                key={link.name}
                onClick={() => handleNavClick(link.id)}
                className="cursor-pointer text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                {link.name}
              </span>
            ))}
            <div className="mt-4 pt-4 border-t border-gray-800 px-3">
              {user ? (
                 <div className="space-y-3">
                   <div className="flex items-center space-x-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-neon-purple flex items-center justify-center">
                         <span className="font-bold text-white">{user.name.charAt(0)}</span>
                      </div>
                      <div>
                        <p className="text-white font-medium">{user.name}</p>
                        <p className="text-xs text-gray-400">{user.email}</p>
                      </div>
                   </div>
                   <div className="bg-white/5 rounded p-3 text-sm space-y-1">
                      <p className="flex justify-between"><span className="text-gray-500">Branch:</span> <span className="text-white">{user.branch}</span></p>
                      <p className="flex justify-between"><span className="text-gray-500">Roll No:</span> <span className="text-white">{user.rollNo}</span></p>
                   </div>
                   <button 
                    onClick={handleLogout}
                    className="w-full text-center text-red-400 border border-red-900/50 bg-red-900/10 py-2 rounded-md"
                   >
                     Logout
                   </button>
                 </div>
              ) : (
                <Link to="/login" onClick={() => setIsOpen(false)} className="block w-full text-center bg-neon-purple text-white py-2 rounded-md shadow-md">
                  Login
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;