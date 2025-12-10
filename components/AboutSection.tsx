import React from 'react';
import { motion } from 'framer-motion';
import { config } from '../config';
import { Users, UserPlus, Award, Zap, Code, Cpu, Target } from 'lucide-react';

const iconMap: any = {
  Users: Users,
  UserPlus: UserPlus,
  Award: Award,
  Zap: Zap,
};

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="relative py-24 bg-black overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      {/* Ambient Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-neon-purple/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-neon-cyan/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-neon-cyan/30 bg-neon-cyan/5 text-neon-cyan text-xs font-mono mb-6 backdrop-blur-sm">
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-cyan opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-neon-cyan"></span>
              </span>
              DISCOVER THE FUTURE
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-mono mb-6 text-white leading-tight">
              Innovation Starts <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-cyan">
                With You
              </span>
            </h2>
            
            <p className="text-gray-400 text-lg leading-relaxed mb-8 border-l-2 border-neon-purple/50 pl-6">
              {config.about.description}
            </p>

            <div className="flex flex-wrap gap-6 border-t border-white/10 pt-6">
               <div className="flex items-center space-x-2 text-sm text-gray-500 font-mono hover:text-neon-purple transition-colors cursor-default">
                  <Code className="w-4 h-4" />
                  <span>DEVELOP</span>
               </div>
               <div className="flex items-center space-x-2 text-sm text-gray-500 font-mono hover:text-neon-cyan transition-colors cursor-default">
                  <Cpu className="w-4 h-4" />
                  <span>DEPLOY</span>
               </div>
               <div className="flex items-center space-x-2 text-sm text-gray-500 font-mono hover:text-neon-pink transition-colors cursor-default">
                  <Target className="w-4 h-4" />
                  <span>DOMINATE</span>
               </div>
            </div>
          </motion.div>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {config.about.highlights.map((item, index) => {
              const Icon = iconMap[item.icon] || Zap;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative p-0.5 rounded-xl bg-gradient-to-br from-white/10 to-white/5 hover:from-neon-purple hover:to-neon-cyan transition-all duration-300"
                >
                  <div className="relative h-full bg-black/90 backdrop-blur-xl rounded-[10px] p-6 flex flex-col items-start justify-between group-hover:bg-black/80 transition-all">
                    <div className="w-12 h-12 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-white/10 transition-all duration-300 shadow-lg">
                      <Icon className="text-neon-cyan w-6 h-6 group-hover:text-white transition-colors" />
                    </div>
                    
                    <div>
                      <h3 className="text-white font-bold text-lg mb-2 group-hover:text-neon-cyan transition-colors">
                         {item.text}
                      </h3>
                      <div className="h-0.5 w-8 bg-gray-700 group-hover:w-full group-hover:bg-neon-purple transition-all duration-500"></div>
                    </div>

                    {/* Decorative corner accents */}
                    <div className="absolute top-3 right-3 w-2 h-2 border-t border-r border-white/20 group-hover:border-white/50 transition-colors"></div>
                    <div className="absolute bottom-3 left-3 w-2 h-2 border-b border-l border-white/20 group-hover:border-white/50 transition-colors"></div>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;