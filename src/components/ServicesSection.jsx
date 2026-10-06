import React from 'react';
import { motion } from 'framer-motion';
import { 
  Scissors, 
  Microscope, 
  HeartPulse, 
  Activity,
  CheckCircle2,
  Stethoscope,
  Zap
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const DUMMY_SERVICES_IMAGE = "https://images.unsplash.com/photo-1551190822-a9333d879b1f?auto=format&fit=crop&w=800&q=80";

const ServicesSection = () => {
  const { isHindi } = useLanguage();

  const services = [
    {
      title: isHindi ? 'लैप्रोस्कोपिक कोलेसिस्टेक्टॉमी' : 'Laparoscopic Cholecystectomy',
      description: isHindi
        ? 'न्यूनतम चीरे से पित्ताशय की थैली को निकालना। तेज़ रिकवरी, कम दर्द और बेहतर परिणाम।'
        : 'Minimally invasive gallbladder removal surgery. Faster recovery, less pain, and excellent outcomes.',
      icon: Scissors,
      color: 'from-[#0D5C58] to-[#14B8A6]',
    },
    {
      title: isHindi ? 'हर्निया रिपेयर' : 'Hernia Repair',
      description: isHindi
        ? 'लैप्रोस्कोपिक तकनीक द्वारा हर्निया की पूरी तरह सुरक्षित और प्रभावी सर्जरी।'
        : 'Safe and effective laparoscopic hernia repair with minimal downtime and strong outcomes.',
      icon: Activity,
      color: 'from-[#0A4D4A] to-[#0D5C58]',
    },
    {
      title: isHindi ? 'अपेंडेक्टॉमी' : 'Appendectomy',
      description: isHindi
        ? 'तीव्र और जीर्ण दोनों प्रकार के अपेंडिसाइटिस के लिए तत्काल और सुरक्षित सर्जरी।'
        : 'Prompt and safe appendix removal for both acute and chronic appendicitis cases.',
      icon: Zap,
      color: 'from-[#0F766E] to-[#059669]',
    },
    {
      title: isHindi ? 'पाइल्स / फिस्टुला / फिशर उपचार' : 'Piles / Fistula / Fissure',
      description: isHindi
        ? 'बवासीर, भगंदर और गुदा दरार के लिए आधुनिक एवं दर्दरहित उपचार।'
        : 'Modern, painless treatment for piles, fistula, and anal fissure conditions.',
      icon: HeartPulse,
      color: 'from-[#B45309] to-[#D97706]',
    },
    {
      title: isHindi ? 'थायरॉइड सर्जरी' : 'Thyroid Surgery',
      description: isHindi
        ? 'थायरॉइड ग्रंथि की समस्याओं के लिए सटीक और सुरक्षित सर्जिकल हस्तक्षेप।'
        : 'Precise and safe surgical intervention for thyroid gland disorders.',
      icon: Microscope,
      color: 'from-[#1E3A4C] to-[#0D5C58]',
    },
  ];

  const conditions = isHindi
    ? ['पित्त की थैली की पथरी', 'हर्निया', 'अपेंडिसाइटिस', 'बवासीर (पाइल्स)',
       'भगंदर (फिस्टुला)', 'गुदा दरार (फिशर)', 'थायरॉइड ट्यूमर', 'पेट के ट्यूमर',
       'गैस्ट्रिक समस्याएं', 'आंत्र रुकावट', 'लिम्फ नोड बायोप्सी', 'सामान्य सर्जरी']
    : ['Gallbladder Stones', 'Hernia', 'Appendicitis', 'Piles (Hemorrhoids)',
       'Fistula-in-Ano', 'Anal Fissure', 'Thyroid Tumors', 'Abdominal Tumors',
       'Gastric Disorders', 'Intestinal Obstruction', 'Lymph Node Biopsy', 'General Surgery'];

  return (
    <section id="services" className="py-16 md:py-24 bg-slate-50 relative">

      {/* Marquee keyframes */}
      <style>{`
        @keyframes marquee-services {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .services-marquee-track {
          display: flex;
          width: max-content;
          animation: marquee-services 22s linear infinite;
        }
        .services-marquee-track:hover {
          animation-play-state: paused;
        }
        .services-marquee-wrapper {
          overflow-x: auto;
          cursor: grab;
        }
        .services-marquee-wrapper:active {
          cursor: grabbing;
        }
        /* hide scrollbar but allow scroll */
        .services-marquee-wrapper::-webkit-scrollbar { display: none; }
        .services-marquee-wrapper { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-3 md:mb-4 text-xs md:text-sm font-semibold tracking-[0.2em] text-primary uppercase flex items-center justify-center gap-2"
          >
            <span className="w-6 md:w-8 h-px bg-primary"></span>
            {isHindi ? 'हमारी बेहतरीन सेवाएं' : 'Our Surgical Services'}
            <span className="w-6 md:w-8 h-px bg-primary"></span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800 mb-4 md:mb-6 leading-tight"
          >
            {isHindi
              ? <>आपकी सेहत के लिए <br className="hidden sm:block"/>विशेषज्ञ सर्जिकल देखभाल</>
              : <>Expert Surgical Care for <br className="hidden sm:block"/>Your Well-being</>}
          </motion.h2>
        </div>

        {/* Infinite Marquee */}
        <div className="mb-16 md:mb-24 -mx-4 md:-mx-0">
          {/* Fade edges */}
          <div className="relative">
            <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 md:w-24 z-10 bg-gradient-to-r from-slate-50 to-transparent" />
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 md:w-24 z-10 bg-gradient-to-l from-slate-50 to-transparent" />

            <div className="services-marquee-wrapper pb-6">
              {/* Track holds 2 copies so the loop is seamless */}
              <div className="services-marquee-track gap-5 px-4">
                {[...services, ...services].map((service, index) => (
                  <div
                    key={index}
                    style={{ minWidth: '280px', maxWidth: '300px' }}
                    className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2 border border-slate-100 relative overflow-hidden flex flex-col mr-5 flex-shrink-0"
                  >
                    <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-100 transition-opacity`}></div>
                    
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-5 shadow-md text-white transform group-hover:rotate-6 transition-transform`}>
                      <service.icon size={24} />
                    </div>
                    
                    <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed flex-grow">
                      {service.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Treatments Section */}
        <div className="bg-white rounded-3xl md:rounded-[3rem] p-6 md:p-12 shadow-xl border border-slate-100 relative overflow-hidden">
          {/* BG Element */}
          <div className="absolute -right-20 -top-20 opacity-5 hidden sm:block">
            <Stethoscope size={400} />
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 items-center">
            
            {/* Title & Image Area */}
            <div className="lg:col-span-1">
              <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-3 md:mb-4">
                {isHindi ? 'उपचारित स्थितियां' : 'Conditions Treated'}
              </h3>
              <p className="text-slate-600 text-sm md:text-base mb-6 md:mb-8 leading-relaxed">
                {isHindi
                  ? 'हम विभिन्न सर्जिकल स्थितियों के निदान और उपचार में विशेषज्ञ हैं। HD 3-चिप लैप्रोस्कोपी एवं हार्मोनिक स्कैल्पेल जैसी आधुनिक तकनीकों से सर्वोत्तम देखभाल प्रदान करते हैं।'
                  : 'We specialize in diagnosing and treating a wide range of surgical conditions using advanced equipment — HD 3-Chip Laparoscopy Stack, Harmonic Scalpel, and Modular Laminar-Flow OT.'}
              </p>
              
              <div className="relative rounded-2xl overflow-hidden shadow-lg h-48 md:h-64 group hidden sm:block">
                <img 
                  src={DUMMY_SERVICES_IMAGE} 
                  alt="Surgical Treatment" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-6">
                  <span className="text-white font-semibold text-lg">
                    {isHindi ? 'उन्नत सर्जिकल देखभाल' : 'Advanced Surgical Care'}
                  </span>
                </div>
              </div>
            </div>

            {/* Conditions Grid */}
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 md:gap-x-8 gap-y-2 md:gap-y-4">
                {conditions.map((condition, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-center gap-3 p-3 md:p-4 rounded-xl bg-slate-50/50 hover:bg-slate-100 transition-colors border border-slate-100/50 group"
                  >
                    <div className="bg-primary/10 text-primary p-2 rounded-full group-hover:bg-primary group-hover:text-white transition-colors">
                      <CheckCircle2 size={20} />
                    </div>
                    <span className="font-semibold text-slate-700 group-hover:text-slate-900 transition-colors">
                      {condition}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
