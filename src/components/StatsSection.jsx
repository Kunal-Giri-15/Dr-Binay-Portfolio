import React from 'react';
import { motion } from 'framer-motion';
import { BarChart2, TrendingUp, Columns } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const StatsSection = () => {
  const { isHindi } = useLanguage();

  const stats = [
    {
      label: isHindi ? 'निदान' : 'DIAGNOSTICS',
      value: '99.4%',
      description: isHindi
        ? 'सटीक बायोमैकेनिकल आकलन के माध्यम से निदान की सटीकता।'
        : 'Diagnostic accuracy through precision biomechanical assessment.',
      icon: <BarChart2 size={32} strokeWidth={2.5} className="text-[#00BCD4]" />,
    },
    {
      label: isHindi ? 'रिकवरी दर' : 'RECOVERY RATE',
      value: '3.2x',
      description: isHindi
        ? 'उद्योग मानकों की तुलना में खेल में औसत वापसी का समय तेज।'
        : 'Faster average return to sport time compared to industry benchmarks.',
      icon: <TrendingUp size={32} strokeWidth={2.5} className="text-blue-700" />,
    },
    {
      label: isHindi ? 'उपचार योजनाएं' : 'TREATMENT PLANS',
      value: '100%',
      description: isHindi
        ? 'आपकी व्यक्तिगत जरूरत के अनुसार पूरी तरह अनुकूलित पुनर्वास पथ।'
        : 'Fully customized rehabilitative paths tailored to your genetic profile.',
      icon: <Columns size={32} strokeWidth={2.5} className="text-[#00BCD4]" />,
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
