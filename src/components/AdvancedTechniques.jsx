import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

const DUMMY_VIDEO_THUMBNAIL = "https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&w=800&q=80";

const AdvancedTechniques = () => {
  return (
    <section className="py-16 px-6 max-w-7xl mx-auto w-full flex flex-col items-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-8"
      >
        <div className="text-xs font-bold tracking-[0.2em] text-primary uppercase mb-3">
          Scientific Practice
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 leading-tight max-w-md mx-auto">
          Advanced Techniques for Faster Recovery
        </h2>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-3xl relative h-[450px] sm:h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl group cursor-pointer"
      >
        <img 
          src={DUMMY_VIDEO_THUMBNAIL} 
          alt="Physiotherapy treatment" 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        
        {/* Dark overlay for contrast */}
        <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/10 transition-colors duration-500" />

        {/* Play Button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white/90 backdrop-blur-md w-16 h-16 rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
            <Play size={24} className="text-primary ml-1" />
          </div>
        </div>

        {/* Bottom Card */}
        <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8">
          <div className="bg-white/95 backdrop-blur-md rounded-2xl p-5 sm:p-6 shadow-xl">
            <h3 className="font-semibold text-slate-800 text-sm sm:text-base mb-2">
              Patient Success Story
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              See how we helped an Olympic sprinter return to the track after a severe ACL injury.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AdvancedTechniques;
