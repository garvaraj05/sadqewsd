import React from 'react';
import { motion } from 'framer-motion';
import { config } from '../config';
import { Brain, Presentation, ArrowRight } from 'lucide-react';

const iconMap: any = {
  Brain: Brain,
  Presentation: Presentation,
};

const EventFlow: React.FC = () => {
  return (
    <section id="flow" className="py-20 bg-black relative">
       {/* Background decorative glow */}
       <div className="absolute top-1/2 right-0 w-64 h-64 bg-neon-purple/20 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-mono mb-2 text-white">Event Flow</h2>
          <div className="h-1 w-24 bg-neon-purple mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {config.rounds.map((round, index) => {
            const Icon = iconMap[round.icon] || Brain;
            return (
              <motion.div
                key={round.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-neon-purple to-neon-cyan rounded-2xl blur opacity-25 group-hover:opacity-50 transition-opacity duration-300"></div>
                <div className="relative bg-gray-900 border border-gray-800 rounded-2xl p-8 h-full flex flex-col hover:translate-y-[-5px] transition-transform duration-300">
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <span className="text-5xl font-bold text-white/5 font-mono">0{round.id}</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3">{round.title}</h3>
                  <p className="text-gray-400 mb-6 flex-grow">{round.description}</p>
                  
                  <ul className="space-y-2">
                    {round.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <ArrowRight className="w-4 h-4 text-neon-cyan mr-2" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EventFlow;
