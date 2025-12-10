import React from 'react';
import { motion } from 'framer-motion';
import CountdownTimer from '../components/CountdownTimer';
import AboutSection from '../components/AboutSection';
import EventFlow from '../components/EventFlow';
import Timeline from '../components/Timeline';
import ContactForm from '../components/ContactForm';
import { config } from '../config';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Home: React.FC = () => {
  const { user } = useAuth();

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-16">
        {/* Background Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-800 via-black to-black opacity-80"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
        </div>

        {/* Decorative Neon Blobs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-purple/20 rounded-full blur-[128px] animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-cyan/20 rounded-full blur-[128px] animate-pulse-slow"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white via-gray-200 to-gray-600 tracking-tighter mb-4 drop-shadow-[0_0_15px_rgba(255,255,255,0.15)] leading-tight">
              OPERATION PARADOX
            </h1>
            <p className="text-xl md:text-3xl text-neon-cyan font-mono font-bold tracking-widest mb-12 uppercase drop-shadow-[0_0_10px_rgba(0,243,255,0.5)]">
              The Hunt Beyond Logic
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-12"
          >
            <CountdownTimer targetDate={config.eventDate} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {!user ? (
               <Link 
                to="/login"
                className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-neon-purple font-mono rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neon-purple hover:bg-purple-700 shadow-[0_0_20px_rgba(176,38,255,0.5)] hover:shadow-[0_0_30px_rgba(176,38,255,0.8)]"
              >
                REGISTER NOW
                <span className="absolute -right-2 -top-2 w-4 h-4 bg-neon-cyan rounded-full animate-ping"></span>
              </Link>
            ) : user.quizCompleted ? (
              <button disabled className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-gray-400 border border-gray-700 bg-black/40 font-mono rounded-lg cursor-not-allowed">
                ROUND 1 COMPLETED
              </button>
            ) : (
              <Link to="/quiz" className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-neon-cyan border border-neon-cyan/50 bg-neon-cyan/10 font-mono rounded-lg backdrop-blur-sm hover:bg-neon-cyan/20 transition-all shadow-[0_0_20px_rgba(0,243,255,0.3)]">
                ENTER ROUND 1
              </Link>
            )}
          </motion.div>
        </div>
      </section>

      {/* Sections */}
      <AboutSection />
      <EventFlow />
      <Timeline />
      <ContactForm />
    </div>
  );
};

export default Home;