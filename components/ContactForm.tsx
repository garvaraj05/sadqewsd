import React from 'react';
import { config } from '../config';
import { Instagram, Linkedin, Mail, Facebook } from 'lucide-react';

const ContactForm: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-black relative overflow-hidden">
      {/* Decorative gradient blob */}
      <div className="absolute -bottom-1/2 left-1/2 transform -translate-x-1/2 w-[500px] h-[500px] bg-neon-purple/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center justify-center text-center">
          
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-5xl font-bold font-mono text-white mb-6">
              Get in Touch
            </h2>
            <p className="text-gray-400 mb-12 text-lg">
              Have questions? We'd love to hear from you. Reach out to the {config.organizer} team.
            </p>
            
            <div className="grid grid-cols-2 md:flex md:flex-row items-center justify-center gap-8 md:gap-12">
              <a href={config.socials.instagram} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center group">
                <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-4 group-hover:bg-neon-pink/20 group-hover:scale-110 transition-all duration-300 border border-white/10 group-hover:border-neon-pink">
                  <Instagram className="w-8 h-8 text-gray-300 group-hover:text-neon-pink transition-colors" />
                </div>
                <span className="text-sm md:text-lg text-gray-300 group-hover:text-white transition-colors">Instagram</span>
              </a>

              <div className="flex flex-col items-center group cursor-pointer">
                 <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-4 group-hover:bg-neon-purple/20 group-hover:scale-110 transition-all duration-300 border border-white/10 group-hover:border-neon-purple">
                  <Mail className="w-8 h-8 text-gray-300 group-hover:text-neon-purple transition-colors" />
                </div>
                <span className="text-sm md:text-lg text-gray-300 group-hover:text-white transition-colors">Email Us</span>
              </div>

              <a href={config.socials.linkedin} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center group">
                 <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-4 group-hover:bg-blue-500/20 group-hover:scale-110 transition-all duration-300 border border-white/10 group-hover:border-blue-500">
                  <Linkedin className="w-8 h-8 text-gray-300 group-hover:text-blue-400 transition-colors" />
                </div>
                <span className="text-sm md:text-lg text-gray-300 group-hover:text-white transition-colors">LinkedIn</span>
              </a>

              <a href={config.socials.facebook} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center group">
                 <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-4 group-hover:bg-blue-600/20 group-hover:scale-110 transition-all duration-300 border border-white/10 group-hover:border-blue-600">
                  <Facebook className="w-8 h-8 text-gray-300 group-hover:text-blue-600 transition-colors" />
                </div>
                <span className="text-sm md:text-lg text-gray-300 group-hover:text-white transition-colors">Facebook</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactForm;