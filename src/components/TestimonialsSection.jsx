import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Quote, Images, Maximize2 } from 'lucide-react';
import VideoModal from './VideoModal';
import GalleryModal from './GalleryModal';
import founderVideo from '../assets/founder-message.mp4';
import founderThumb from '../assets/founder_video_thumb.jpg';
import { useLanguage } from '../context/LanguageContext';

const TestimonialsSection = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [isPlayingInline, setIsPlayingInline] = useState(false);
  const inlineVideoRef = useRef(null);
  const { isHindi } = useLanguage();

  const handlePlayInline = () => {
    setIsPlayingInline(true);
    if (inlineVideoRef.current) {
      inlineVideoRef.current.play().catch(() => {});
    }
  };

  const handleOpenModal = () => {
    if (inlineVideoRef.current && isPlayingInline) {
      inlineVideoRef.current.pause();
    }
    setIsVideoOpen(true);
  };

  const testimonials = isHindi
    ? [
      { name: 'रमेश कुमार', condition: 'लैप्रोस्कोपिक पित्ताशय सर्जरी', text: '"पित्ताशय की पथरी के कारण मुझे असहनीय दर्द रहता था। डॉ. बिनय मौर्य ने दूरबीन विधि से सफल सर्जरी की, और मैं दो ही दिनों में बिना किसी कष्ट के स्वस्थ होकर घर आ गया। उनकी सर्जिकल कुशलता अद्वितीय है।"' },
      { name: 'सुनीता देवी', condition: 'हर्निया ऑपरेशन', text: '"विश्वास सर्जिकल हॉस्पिटल में डॉ. मौर्य और उनकी टीम ने मेरी हर्निया की सर्जरी बहुत ही आराम से की। उनका स्नेहपूर्ण व्यवहार और आधुनिक सुविधाएं किसी भी बड़े शहर के अस्पताल से बेहतर हैं।"' },
      { name: 'मनोज तिवारी', condition: 'आपातकालीन अपेंडिक्स सर्जरी', text: '"अचानक अपेंडिक्स के तीव्र दर्द में डॉ. मौर्य ने तुरंत जांच कर उसी रात सफल ऑपरेशन किया। राजगढ़ में ही इतनी विश्वस्तरीय ओटी सुविधा मिलना हमारे लिए वरदान साबित हुआ।"' },
      { name: 'राजेश गुप्ता', condition: 'पाइल्स एवं फिशर उपचार', text: '"मैं कई वर्षों से पाइल्स और फिशर के दर्द से जूझ रहा था। डॉ. मौर्य के आधुनिक मिनिमल इनवेसिव उपचार के बाद मैं पूरी तरह स्वस्थ हूँ और दर्द से स्थायी राहत मिली है।"' },
    ]
    : [
      { name: 'Ramesh Kumar', condition: 'Laparoscopic Cholecystectomy', text: '"I suffered from severe abdominal pain due to gallbladder stones. Dr. Binay Mourya performed laparoscopic surgery, and I was back on my feet within two days with minimal pain. Truly exceptional surgical precision."' },
      { name: 'Sunita Devi', condition: 'Hernia Repair', text: '"Dr. Binay Mourya and his team at Vishwas Hospital made my hernia surgery smooth and stress-free. The warm care and modern facilities in Rajgarh rival any metro hospital."' },
      { name: 'Manoj Tiwari', condition: 'Emergency Appendectomy', text: '"I had excruciating appendicitis pain late at night. Dr. Mourya diagnosed it immediately and operated the same night. Having such state-of-the-art surgical care saved us from rushing to Varanasi."' },
      { name: 'Rajesh Gupta', condition: 'Piles & Fissure Treatment', text: '"I struggled silently with fissures and piles for years. Dr. Mourya’s advanced minimally invasive treatment provided immediate relief and complete recovery with very little discomfort."' },
    ];

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <div className="mb-3 md:mb-4 text-xs md:text-sm font-semibold tracking-[0.2em] text-primary uppercase flex items-center justify-center gap-2">
            <span className="w-6 md:w-8 h-px bg-primary"></span>
            {isHindi ? 'मरीज की सफलता' : 'Patient Success'}
            <span className="w-6 md:w-8 h-px bg-primary"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800 mb-4 md:mb-6 leading-tight">
            {isHindi
              ? <>असली कहानियां, <br /><span className="text-primary">सफल परिणाम</span></>
              : <>Real Stories, <br /><span className="text-primary">Proven Results</span></>}
          </h2>
          <p className="text-slate-600">
            {isHindi
              ? 'विश्वास सर्जिकल हॉस्पिटल में सफल सर्जरी के बाद हमारे मरीजों के अनुभव।'
              : 'Hear directly from our patients about their surgical recovery journey.'}
          </p>
        </div>

        {/* Video Frame Area */}
        <div className="mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative max-w-4xl mx-auto rounded-3xl md:rounded-[2.5rem] overflow-hidden shadow-2xl bg-black aspect-video group"
          >
            {/* Embedded Video Element */}
            <video
              ref={inlineVideoRef}
              src={founderVideo}
              poster={founderThumb}
              controls={isPlayingInline}
              playsInline
              preload="metadata"
              onEnded={() => setIsPlayingInline(false)}
              className="w-full h-full object-contain bg-black"
            >
              Your browser does not support the video tag.
            </video>

            {/* Teaser / Cover Overlay before play */}
            <AnimatePresence>
              {!isPlayingInline && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="absolute inset-0 pointer-events-none"
                >
                  {/* Backdrop poster image for rich rendering */}
                  <img
                    src={founderThumb}
                    alt="Dr. Binay Mourya - Vishwas Surgical Hospital"
                    className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
                  />

                  {/* Gradient overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/35 to-slate-900/40 pointer-events-auto" />

                  {/* Top Bar: Badge + Open in Modal Button */}
                  <div className="absolute top-4 left-4 right-4 md:top-6 md:left-6 md:right-6 flex items-center justify-between pointer-events-auto z-20">
                    <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-black/40 backdrop-blur-md text-white border border-white/20 shadow-md">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      {isHindi ? 'संस्थापक संदेश' : "Founder's Message"}
                    </span>
                    <button
                      onClick={handleOpenModal}
                      title={isHindi ? 'पॉपअप में देखें' : 'Watch in Lightbox'}
                      className="p-2.5 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-md text-white border border-white/20 shadow-md hover:scale-105 transition-all cursor-pointer"
                    >
                      <Maximize2 size={16} />
                    </button>
                  </div>

                  {/* Centered Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-auto z-20">
                    <button
                      onClick={handlePlayInline}
                      aria-label="Play Founder Video"
                      className="group/btn relative cursor-pointer"
                    >
                      <div className="absolute -inset-4 rounded-full bg-primary/40 blur-lg group-hover/btn:bg-primary/60 transition-all duration-300" />
                      <div className="relative w-16 h-16 sm:w-20 sm:h-20 bg-white/95 hover:bg-white text-primary rounded-full flex items-center justify-center shadow-2xl transform group-hover/btn:scale-110 transition-transform duration-300 ring-4 ring-white/40">
                        <Play size={28} className="fill-primary ml-1 sm:ml-1.5" />
                      </div>
                    </button>
                  </div>

                  {/* Info Card at Bottom */}
                  <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6 pointer-events-auto z-20">
                    <div className="bg-white/90 md:bg-white/95 backdrop-blur-md rounded-xl md:rounded-2xl p-4 md:p-6 shadow-xl border border-white/40">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                        <div className="pr-2">
                          <h3 className="text-base md:text-lg font-bold text-slate-800 leading-snug">
                            {isHindi ? 'डॉ. बिनय मौर्य का संदेश' : "Founder's Message — Dr. Binay Mourya"}
                          </h3>
                          <p className="text-slate-600 text-xs md:text-sm mt-0.5 leading-relaxed">
                            {isHindi
                              ? 'विश्वास सर्जिकल हॉस्पिटल में आधुनिक लैप्रोस्कोपिक सर्जरी, सुरक्षित तकनीक एवं समर्पित स्वास्थ्य सेवा।'
                              : 'Experience Dr. Binay Mourya’s dedication to modern laparoscopic care and rapid, painless recovery.'}
                          </p>
                        </div>
                        <div className="flex items-center gap-2 shrink-0">
                          <button
                            onClick={handlePlayInline}
                            className="bg-primary hover:bg-primary/90 text-white text-xs sm:text-sm font-semibold px-4 py-2 rounded-full shadow-md hover:scale-105 transition-all flex items-center gap-1.5 cursor-pointer"
                          >
                            <Play size={13} className="fill-white" />
                            {isHindi ? 'वीडियो चलाएं' : 'Play Video'}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* View Patient Gallery Button */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex justify-center mt-6"
          >
            <button
              onClick={() => setIsGalleryOpen(true)}
              className="flex items-center gap-2.5 bg-primary text-white px-7 py-3.5 rounded-full font-semibold text-base hover:bg-primary/90 hover:scale-105 transition-all duration-300 shadow-xl shadow-primary/30 cursor-pointer"
            >
              <Images size={18} />
              {isHindi ? 'अस्पताल एवं गैलरी देखें' : 'View Hospital & Patient Gallery'}
            </button>
          </motion.div>
        </div>

        {/* Text Testimonials Marquee */}
        <style>{`
          @keyframes marquee-testimonials {
            0%   { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .testimonials-marquee-track {
            display: flex;
            width: max-content;
            animation: marquee-testimonials 28s linear infinite;
          }
          .testimonials-marquee-track:hover {
            animation-play-state: paused;
          }
          .testimonials-marquee-wrapper {
            overflow-x: auto;
            cursor: grab;
          }
          .testimonials-marquee-wrapper:active {
            cursor: grabbing;
          }
          .testimonials-marquee-wrapper::-webkit-scrollbar { display: none; }
          .testimonials-marquee-wrapper { -ms-overflow-style: none; scrollbar-width: none; }
        `}</style>

        <div className="-mx-4 md:-mx-0">
          <div className="relative">
            {/* Fade edges */}
            <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 md:w-24 z-10 bg-gradient-to-r from-white to-transparent" />
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 md:w-24 z-10 bg-gradient-to-l from-white to-transparent" />

            <div className="testimonials-marquee-wrapper pb-6">
              <div className="testimonials-marquee-track gap-5 px-4">
                {/* Two copies for seamless loop */}
                {[...testimonials, ...testimonials].map((t, i) => (
                  <div
                    key={i}
                    style={{ minWidth: '300px', maxWidth: '340px' }}
                    className="bg-slate-50 rounded-3xl p-6 border border-slate-100 flex flex-col mr-5 flex-shrink-0 hover:shadow-xl transition-shadow duration-300"
                  >
                    <Quote className="text-primary/20 mb-4" size={40} />
                    <p className="text-slate-700 italic mb-6 flex-grow text-sm leading-relaxed">
                      {t.text}
                    </p>
                    <div className="flex items-center gap-4 mt-auto">
                      <div className="w-12 h-12 bg-primary/10 text-primary font-bold text-xl rounded-full flex items-center justify-center flex-shrink-0">
                        {t.name.charAt(0).toUpperCase()}
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-800">
                          {t.name}
                        </h4>
                        <p className="text-xs text-slate-500">{t.condition}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>

      <VideoModal isOpen={isVideoOpen} onClose={() => setIsVideoOpen(false)} />
      <GalleryModal isOpen={isGalleryOpen} onClose={() => setIsGalleryOpen(false)} />
    </section>
  );
};

export default TestimonialsSection;
