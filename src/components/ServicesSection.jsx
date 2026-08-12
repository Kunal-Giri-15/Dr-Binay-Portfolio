import React from 'react';
import { motion } from 'framer-motion';
import { 
  Activity, 
  Hand, 
  Zap, 
  HeartPulse, 
  Dumbbell, 
  CheckCircle2,
  Stethoscope
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const DUMMY_SERVICES_IMAGE = "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=800&q=80";

const ServicesSection = () => {
  const { isHindi } = useLanguage();

  const services = [
    {
      title: isHindi ? 'मैनुअल थेरेपी' : 'Manual Therapy',
      description: isHindi
        ? 'जोड़ों और मुलायम ऊतकों को गतिशील करने की व्यावहारिक तकनीकें, दर्द कम करती हैं और गति की सीमा बढ़ाती हैं।'
        : 'Hands-on techniques to mobilize joints and soft tissues, reducing pain and increasing range of motion.',
      icon: Hand,
      color: 'from-blue-500 to-cyan-400',
    },
    {
      title: isHindi ? 'शारीरिक मोडेलिटीज़' : 'Physical Modalities',
      description: isHindi
        ? 'उपचार को उत्तेजित करने और सूजन कम करने के लिए उन्नत तकनीकी उपचार।'
        : 'Advanced technological treatments to stimulate healing and reduce inflammation.',
      icon: Zap,
      color: 'from-indigo-500 to-blue-500',
    },
    {
      title: isHindi ? 'चिकित्सीय व्यायाम' : 'Therapeutic Exercise',
      description: isHindi
        ? 'शक्ति और लचीलापन बढ़ाने और भविष्य की चोटों को रोकने के लिए अनुकूलित व्यायाम योजनाएं।'
        : 'Customized movement plans to build strength, flexibility, and prevent future injuries.',
      icon: Dumbbell,
      color: 'from-teal-500 to-emerald-400',
    },
    {
      title: isHindi ? 'दर्द प्रबंधन' : 'Pain Management',
      description: isHindi
        ? 'पुराने और तीव्र दर्द से दीर्घकालिक राहत पर केंद्रित व्यापक रणनीतियां।'
        : 'Comprehensive strategies focusing on long-term relief from chronic and acute pain.',
      icon: HeartPulse,
      color: 'from-rose-500 to-orange-400',
    },
  ];

  const conditions = isHindi
    ? ['पीठ दर्द', 'सर्वाइकल दर्द', 'घुटने का दर्द', 'गठिया',
       'लिगामेंट समस्या', 'पक्षाघात', 'कटिस्नायुशूल दर्द', 'स्पॉन्डिलाइटिस',
       'फ्रोजन शोल्डर', 'स्लिप डिस्क', 'वेरिकोज़ वेन्स', 'सेरेब्रल पाल्सी (CP)']
    : ['Back Pain', 'Cervical Pain', 'Knee Pain', 'Arthritis',
       'Ligament Problem', 'Paralysis', 'Sciatica Pain', 'Spondylitis',
       'Frozen Shoulder', 'Slip Disc', 'Varicose Veins', 'Cerebral Palsy (CP Child)'];

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
            {isHindi ? 'हमारी बेहतरीन सेवाएं' : 'Our Best Services'}
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
              ? <>आपकी सेहत के लिए <br className="hidden sm:block"/>व्यापक देखभाल</>
              : <>Comprehensive Care for <br className="hidden sm:block"/>Your Well-being</>}
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
                {isHindi ? 'दिए जाने वाले उपचार' : 'Treatments Given'}
              </h3>
              <p className="text-slate-600 text-sm md:text-base mb-6 md:mb-8 leading-relaxed">
                {isHindi
                  ? 'हम विभिन्न शारीरिक स्थितियों के निदान और उपचार में विशेषज्ञ हैं। हमारा लक्ष्य लक्षित, विशेषज्ञ देखभाल के माध्यम से आपकी गतिशीलता बहाल करना और दर्द कम करना है।'
                  : 'We specialize in diagnosing and treating a wide array of physical conditions. Our goal is to restore your mobility and alleviate pain through targeted, expert care.'}
              </p>
              
              <div className="relative rounded-2xl overflow-hidden shadow-lg h-48 md:h-64 group hidden sm:block">
                <img 
                  src={DUMMY_SERVICES_IMAGE} 
                  alt="Physiotherapy Treatment" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-6">
                  <span className="text-white font-semibold text-lg">
                    {isHindi ? 'विशेषज्ञ उपचार हाथ' : 'Expert Healing Hands'}
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
