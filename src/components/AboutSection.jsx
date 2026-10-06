import React from 'react';
import { motion } from 'framer-motion';
import { Quote, CheckCircle } from 'lucide-react';
import aboutImage from '../assets/about.jpg';
import { useLanguage } from '../context/LanguageContext';

const DUMMY_DOCTOR_IMAGE = aboutImage;

const AboutSection = () => {
  const { isHindi } = useLanguage();

  return (
    <section id="about" className="py-12 sm:py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50/50 -skew-x-12 transform origin-top-right z-0"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">

          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5] max-w-md mx-auto lg:mx-0 group">
              <img
                src={DUMMY_DOCTOR_IMAGE}
                alt="Dr. Binay Mourya"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent"></div>

              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                  <h3 className="text-2xl font-bold text-white mb-1">Dr. Binay Mourya</h3>
                  <p className="text-white/80 font-medium text-sm mb-3">
                    {isHindi ? 'चीफ सर्जन और संस्थापक' : 'Chief Surgeon & Founder'}
                  </p>
                  <p className="text-white/90 text-xs leading-relaxed border-t border-white/20 pt-3">
                    {isHindi
                      ? 'विश्वास सर्जिकल हॉस्पिटल, राजगढ़, मिर्जापुर'
                      : <>Vishwas Surgical Hospital<br />Rajgarh, Mirzapur, UP</>}
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative dots */}
            <div className="absolute -z-10 -bottom-8 -left-8 w-40 h-40 bg-[radial-gradient(#CBD5E1_2px,transparent_2px)] [background-size:16px_16px] opacity-60"></div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="flex flex-col justify-center order-1 lg:order-2"
          >
            <div className="mb-3 md:mb-4 text-[10px] md:text-sm font-semibold tracking-[0.2em] text-primary uppercase flex items-center gap-2">
              <span className="w-6 md:w-8 h-px bg-primary"></span>
              {isHindi ? 'डॉक्टर के बारे में' : 'About The Doctor'}
            </div>

            <h2 className="text-[28px] sm:text-4xl md:text-5xl font-bold text-slate-800 mb-5 md:mb-8 leading-[1.15]">
              {isHindi
                ? <>आपकी <br /><span className="text-primary">पूर्ण रिकवरी</span> के लिए समर्पित</>
                : <>Dedicated to Your <br /><span className="text-primary">Surgical Care</span></>}
            </h2>

            <div className="relative mb-6 md:mb-10 bg-slate-50 rounded-2xl p-5 md:p-8 border-l-4 border-primary shadow-sm">
              <Quote className="absolute top-3 right-3 text-slate-200/50" size={40} />
              <p className="text-[15px] sm:text-lg md:text-xl lg:text-2xl text-slate-700 font-medium leading-relaxed italic relative z-10 pr-4">
                {isHindi
                  ? '"\u092e\u0948\u0902\u0928\u0947 \u092f\u0939 \u0905\u0938\u094d\u092a\u0924\u093e\u0932 \u0907\u0938\u0932\u093f\u090f \u0936\u0941\u0930\u0942 \u0915\u093f\u092f\u093e \u0915\u094d\u092f\u094b\u0902\u0915\u093f \u092e\u0948\u0902 \u091a\u093e\u0939\u0924\u093e \u0925\u093e \u0915\u093f \u092e\u0947\u0930\u0947 \u092a\u0921\u093c\u094b\u0938\u093f\u092f\u094b\u0902 \u0915\u094b \u0935\u0939\u0940 \u0926\u0947\u0916\u092d\u093e\u0932 \u092e\u093f\u0932\u0947 \u091c\u094b \u092e\u0948\u0902 \u090f\u0915 \u092e\u0939\u093e\u0928\u0917\u0930 \u092e\u0947\u0902 \u0926\u0947 \u0938\u0915\u0924\u093e \u0925\u093e\u0964"'
                  : '"I began this hospital because I wanted my neighbours to have access to the same standard of care I could offer in a metro. Every day since, I\'ve tried to keep one promise: to treat every patient the way I\'d want my own family to be treated."'}
              </p>
            </div>

            <p className="text-slate-600 leading-relaxed mb-6 md:mb-8 text-[15px] md:text-lg">
              {isHindi
                ? 'सामान्य एवं लैप्रोस्कोपिक सर्जरी में 15 वर्षों से अधिक अनुभव के साथ, डॉ. बिनय मौर्य ने 2004 में विश्वास सर्जिकल हॉस्पिटल की स्थापना की, ताकि राजगढ़ और आसपास के लोगों को आधुनिक शल्य चिकित्सा वहीं मिल सके।'
                : 'With over 15 years of surgical experience, Dr. Binay Mourya founded Vishwas Surgical Hospital in 2004, bringing evidence-based surgical care to Rajgarh, Mirzapur — so families never have to travel to distant cities for quality treatment.'}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-center gap-3">
                <div className="bg-green-100 text-green-600 rounded-full p-1"><CheckCircle size={20} /></div>
                <span className="text-slate-700 font-medium">
                  {isHindi ? 'न्यूनतम आक्रामक सर्जरी' : 'Minimally Invasive Surgery'}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 text-primary rounded-full p-1"><CheckCircle size={20} /></div>
                <span className="text-slate-700 font-medium">
                  {isHindi ? '24/7 आपातकालीन सेवा' : '24/7 Emergency Care'}
                </span>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
