import React from 'react';
import { motion } from 'framer-motion';
import { Play, Award, Star, Calendar } from 'lucide-react';
import TrustCards from './TrustCards';
import heroImage from '../assets/hero_image.jpeg';

const DUMMY_DOCTOR_IMAGE = heroImage;

const Hero = () => {
  // Staggered text animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    },
  };

  return (
    <section id="home" className="relative pt-24 pb-10 lg:min-h-screen lg:pt-24 lg:pb-0 overflow-hidden flex lg:items-center">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 items-center">

          {/* Text Content - Left Side */}
          <motion.div
            className="flex flex-col justify-center text-center lg:text-left z-20"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              className="mb-4 text-xs sm:text-sm font-semibold tracking-[0.2em] text-primary uppercase"
              variants={itemVariants}
            >
              Medical Excellence
            </motion.div>

            <motion.h1
              className="text-[2.75rem] leading-[1.05] md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-slate-800"
              variants={itemVariants}
            >
              <span className="block">BECAUSE</span>
              <span className="block text-primary">EVERY LIFE</span>
              <span className="block">MATTERS.</span>
            </motion.h1>

            <motion.p
              className="text-base sm:text-lg md:text-xl text-slate-600 mb-4 lg:mb-8 max-w-lg mx-auto lg:mx-0 font-light leading-relaxed"
              variants={itemVariants}
            >
              Expert laparoscopic & general surgical care at Vishwas Surgical Hospital, Rajgarh. Modern, evidence-based surgery — so you don't have to travel to a metro city.
            </motion.p>

            <motion.div
              className="hidden lg:flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
              variants={itemVariants}
            >
              <a href="#appointment-form">
                <button className="w-[85%] sm:w-auto bg-primary text-white px-8 py-3.5 sm:py-4 rounded-full font-semibold text-base sm:text-lg flex items-center justify-center gap-2 hover:bg-primary/90 hover:scale-105 transition-all duration-300 shadow-xl shadow-primary/30">
                  Book an Appointment <Calendar size={18} />
                </button>
              </a>

              <a href="#testimonials">
                <button
                  className="w-[85%] sm:w-auto border-2 border-slate-200 bg-white px-8 py-3.5 sm:py-4 rounded-full font-semibold text-base sm:text-lg text-slate-700 hover:border-slate-300 hover:bg-slate-50 hover:shadow-lg transition-all duration-300"
                >
                  View Reviews
                </button>
              </a>
            </motion.div>
          </motion.div>

          {/* Mobile Image (Shows below text on mobile, hidden on lg) */}
          <div className="lg:hidden relative h-[460px] w-full flex justify-center">
            <motion.div
              initial={{ y: 80, opacity: 0, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              className="relative z-10 w-full h-full flex justify-center"
            >
              {/* Floating Effect Wrapper */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="w-full h-full relative flex justify-center"
              >
                <img
                  src={DUMMY_DOCTOR_IMAGE}
                  alt="Dr. Binay Mourya"
                  className="h-full object-cover rounded-[2.5rem] shadow-2xl"
                />

                {/* Floating Trust Cards - Mobile */}
                <div className="absolute top-10 -left-2 sm:left-4">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 1 }}
                    className="bg-white/95 backdrop-blur-md border border-white/50 rounded-2xl p-2 flex items-center gap-2.5 pr-4 shadow-xl shadow-black/10"
                  >
                    <div className="bg-primary/10 p-1.5 rounded-full"><Award size={14} className="text-primary" /></div>
                    <div className="flex flex-col items-start leading-tight">
                      <span className="font-bold text-[13px] text-slate-800">100%</span>
                      <span className="text-[10px] font-medium text-slate-500">Satisfied</span>
                    </div>
                  </motion.div>
                </div>

                <div className="absolute bottom-12 -right-2 sm:right-4">
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 1.2 }}
                    className="bg-white/95 backdrop-blur-md border border-white/50 rounded-2xl p-2 flex items-center gap-2.5 pr-4 shadow-xl shadow-black/10"
                  >
                    <div className="bg-secondary/15 p-1.5 rounded-full"><Star size={14} className="text-secondary" /></div>
                    <div className="flex flex-col items-start leading-tight">
                      <span className="font-bold text-[13px] text-slate-800">15+ Years</span>
                      <span className="text-[10px] font-medium text-slate-500">Experience</span>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Mobile Buttons (Shows below image on mobile, hidden on lg) */}
          <motion.div
            className="flex lg:hidden flex-col sm:flex-row items-center justify-center gap-4 mt-8 z-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a href="#appointment-form" className="w-[85%] sm:w-auto">
              <button className="w-full bg-primary text-white px-8 py-3.5 sm:py-4 rounded-full font-semibold text-base sm:text-lg flex items-center justify-center gap-2 hover:bg-primary/90 hover:scale-105 transition-all duration-300 shadow-xl shadow-primary/30">
                Book an Appointment <Calendar size={18} />
              </button>
            </a>

            <a href="#testimonials" className="w-[85%] sm:w-auto">
              <button
                className="w-full border-2 border-slate-200 bg-white px-8 py-3.5 sm:py-4 rounded-full font-semibold text-base sm:text-lg text-slate-700 hover:border-slate-300 hover:bg-slate-50 hover:shadow-lg transition-all duration-300"
              >
                View Reviews
              </button>
            </a>
          </motion.div>

          {/* Image Content - Right Side (Desktop Only) */}
          <div className="hidden lg:block relative h-[540px] w-full">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-primary/20 to-secondary/20 blur-3xl rounded-full z-0 pointer-events-none" />

            <div className="relative w-full h-full flex justify-center items-end">
              {/* Doctor Image with Entrance Animation */}
              <motion.div
                initial={{ y: 120, opacity: 0, scale: 0.95 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                // Cubic bezier for premium smooth entrance
                transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                className="relative z-10 w-[85%] h-[95%]"
              >
                {/* Floating Effect Wrapper */}
                <motion.div
                  animate={{ y: [-5, 5, -5] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="w-full h-full relative"
                >
                  <img
                    src={DUMMY_DOCTOR_IMAGE}
                    alt="Dr. Binay Mourya"
                    className="w-full h-full object-cover rounded-t-full object-top shadow-2xl border-4 border-white/50"
                    style={{ borderBottomLeftRadius: '2rem', borderBottomRightRadius: '2rem' }}
                  />

                  {/* Floating Trust Cards */}
                  <div className="absolute top-16 -left-12">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 1 }}
                      className="glassmorphism rounded-2xl p-3 flex items-center gap-3 pr-6 shadow-lg shadow-black/5"
                    >
                      <div className="bg-primary/10 p-2 rounded-full"><Award size={20} className="text-primary" /></div>
                      <span className="font-semibold text-sm text-slate-800">15+ Years Exp</span>
                    </motion.div>
                  </div>

                  <div className="absolute bottom-32 -right-8">
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 1.2 }}
                      className="glassmorphism rounded-2xl p-3 flex items-center gap-3 pr-6 shadow-lg shadow-black/5"
                    >
                      <div className="bg-secondary/15 p-2 rounded-full"><Star size={20} className="text-secondary" /></div>
                      <span className="font-semibold text-sm text-slate-800">100% Satisfaction</span>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
