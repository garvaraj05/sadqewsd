import React from 'react';
import { motion } from 'framer-motion';
import { config } from '../config';

const Timeline: React.FC = () => {
  return (
    <section id="timeline" className="py-20 bg-zinc-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-mono text-white mb-2">Schedule</h2>
          <p className="text-gray-400">Mark your calendars</p>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neon-cyan via-neon-purple to-gray-800"></div>

          {config.timeline.map((item, index) => {
            const isLeft = index % 2 === 0;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex items-center justify-between md:justify-normal mb-8 ${
                  isLeft ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Empty space for alternating side */}
                <div className="hidden md:block w-5/12"></div>

                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-black border-2 border-neon-cyan z-10 shadow-[0_0_10px_rgba(0,243,255,0.8)]"></div>

                {/* Content Card */}
                <div className={`ml-12 md:ml-0 w-full md:w-5/12 ${isLeft ? 'md:mr-auto md:text-right' : 'md:ml-auto md:text-left'}`}>
                  <div className={`p-6 bg-white/5 border border-white/10 rounded-xl hover:border-neon-purple/50 transition-colors ${
                    isLeft ? 'md:pr-8' : 'md:pl-8'
                  }`}>
                    <span className="inline-block py-1 px-2 rounded bg-neon-purple/20 text-neon-purple text-xs font-mono font-bold mb-2">
                      {item.date}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                    <p className="text-gray-400 text-sm">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
