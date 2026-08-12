import React from 'react';
import { Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const FloatingContact = () => {
  return (
    <div className="fixed bottom-6 left-0 right-0 px-4 z-50 md:hidden flex justify-center pointer-events-none">
      <motion.a
        href="tel:9753759805"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 260, damping: 20 }}
        className="pointer-events-auto w-full max-w-sm bg-white/70 backdrop-blur-xl border border-white/50 shadow-[0_8px_32px_rgba(0,0,0,0.12)] rounded-full p-2 pr-5 flex items-center justify-between"
      >
        <div className="flex items-center gap-3">
          <div className="bg-primary p-3 rounded-full text-white shadow-lg shadow-primary/40 relative">
             {/* Pulse effect rings */}
            <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-20"></div>
            <Phone size={18} className="relative z-10" />
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-none mb-1">Clinic Contact</span>
            <span className="text-[15px] font-bold text-slate-800 leading-none">9753759805</span>
          </div>
        </div>
        
        <div className="bg-primary/10 text-primary px-4 py-2 rounded-full text-xs font-bold tracking-wide">
          Call Now
        </div>
      </motion.a>
    </div>
  );
};

export default FloatingContact;
