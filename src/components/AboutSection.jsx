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
                alt="Dr. Pratik Giri"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent"></div>

              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                  <h3 className="text-2xl font-bold text-white mb-1">Dr. Pratik Giri</h3>
                  <p className="text-white/80 font-medium text-sm mb-3">
                    {isHindi ? 'फिजियोथेरेपिस्ट' : 'Physiotherapist'}
                  </p>
                  <p className="text-white/90 text-xs leading-relaxed border-t border-white/20 pt-3">
                    {isHindi
                      ? 'पूर्व वरिष्ठ फिजियोथेरेपिस्ट\nयूनिवर्सल हॉस्पिटल मुंबई'
                      : <>Ex. Senior Physiotherapist<br />Universal Hospital Mumbai</>}
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
                : <>Dedicated to Your <br /><span className="text-primary">Complete Recovery</span></>}
            </h2>

            <div className="relative mb-6 md:mb-10 bg-slate-50 rounded-2xl p-5 md:p-8 border-l-4 border-primary shadow-sm">
              <Quote className="absolute top-3 right-3 text-slate-200/50" size={40} />
              <p className="text-[15px] sm:text-lg md:text-xl lg:text-2xl text-slate-700 font-medium leading-relaxed italic relative z-10 pr-4">
                {isHindi
                  ? '"हमारा प्रीमियर फिजियोथेरेपी क्लिनिक आपकी रिकवरी का साझेदार है, जो आपको दर्दमुक्त जीवन और नई ऊर्जा की ओर ले जाता है।"'
                  : '"Our premier physiotherapy clinic is your partner in recovery, guiding you towards a life of pain-free movement and renewed energy."'}
              </p>
            </div>

            <p className="text-slate-600 leading-relaxed mb-6 md:mb-8 text-[15px] md:text-lg">
              {isHindi
                ? 'जटिल पुनर्वास और रोजमर्रा की गतिशीलता समस्याओं में व्यापक अनुभव के साथ, डॉ. प्रतीक गिरी मुंबई के यूनिवर्सल हॉस्पिटल में वरिष्ठ फिजियोथेरेपिस्ट के रूप में अपने कार्यकाल से विशेषज्ञता लेकर आते हैं।'
                : 'With extensive experience spanning complex rehabilitations and everyday mobility issues, Dr. Pratik Giri brings a wealth of expertise from his tenure as a Senior Physiotherapist at Universal Hospital, Mumbai.'}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-center gap-3">
                <div className="bg-green-100 text-green-600 rounded-full p-1"><CheckCircle size={20} /></div>
                <span className="text-slate-700 font-medium">
                  {isHindi ? 'विशेषज्ञ निदान' : 'Expert Diagnosis'}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-blue-100 text-blue-600 rounded-full p-1"><CheckCircle size={20} /></div>
                <span className="text-slate-700 font-medium">
                  {isHindi ? 'व्यक्तिगत देखभाल' : 'Personalized Care'}
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
