import React from 'react';
import { motion } from 'framer-motion';
import { BarChart2, TrendingUp, Columns } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const StatsSection = () => {
  const { isHindi } = useLanguage();

  const stats = [
    {
      label: isHindi ? 'सर्जरीयां संपन्न' : 'SURGERIES PERFORMED',
      value: '5000+',
      description: isHindi
        ? 'आधुनिक तकनीकों से सफलतापूर्वक संपन्न सर्जिकल प्रक्रियाएं।'
        : 'Successfully completed surgical procedures using modern techniques.',
      icon: <BarChart2 size={32} strokeWidth={2.5} className="text-primary" />,
    },
    {
      label: isHindi ? 'अनुभव के वर्ष' : 'YEARS OF EXPERIENCE',
      value: '15+',
      description: isHindi
        ? 'सामान्य एवं लैप्रोस्कोपिक सर्जरी में विशेषज्ञता।'
        : 'Specializing in general & laparoscopic surgery since 2004.',
      icon: <TrendingUp size={32} strokeWidth={2.5} className="text-secondary" />,
    },
    {
      label: isHindi ? 'सफलता दर' : 'SUCCESS RATE',
      value: '99%+',
      description: isHindi
        ? 'उच्च सफलता दर और रोगी संतुष्टि के साथ स्वास्थ्य यात्रा।'
        : 'Outstanding surgical success rate with high patient satisfaction scores.',
      icon: <Columns size={32} strokeWidth={2.5} className="text-primary" />,
    },
  ];

  return (
    <section className="py-8 px-6 max-w-7xl mx-auto w-full">
      <div className="flex flex-col gap-6 w-full max-w-md mx-auto md:max-w-none md:flex-row md:justify-center">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-[2rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-slate-50 flex flex-col gap-4 md:w-1/3 max-w-sm"
          >
            <div className="text-[10px] font-bold tracking-[0.2em] text-primary uppercase">
              {stat.label}
            </div>
            <div className="flex justify-between items-end">
              <div className="text-5xl font-extrabold text-slate-800 tracking-tight">
                {stat.value}
              </div>
              <div className="mb-2">
                {stat.icon}
              </div>
            </div>
            <p className="text-sm text-slate-500 font-medium leading-relaxed mt-1">
              {stat.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
