import React from 'react';
import { Users, Star, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const defaultStats = [
  { icon: <Users size={20} className="text-primary" />, text: "5000+ Surgeries Performed" },
  { icon: <Star size={20} className="text-secondary" />, text: "98% Success Rate" },
  { icon: <Award size={20} className="text-primary" />, text: "15+ Years Experience" },
];

const TrustCards = ({ className }) => {
  return (
    <div className={`flex flex-col gap-4 ${className}`}>
      {defaultStats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
          className="glassmorphism rounded-2xl p-3 flex items-center gap-3 w-fit pr-6 shadow-md"
        >
          <div className="bg-primary/10 p-2 rounded-full">
            {stat.icon}
          </div>
          <span className="font-semibold text-sm text-slate-800">{stat.text}</span>
        </motion.div>
      ))}
    </div>
  );
};

export default TrustCards;
