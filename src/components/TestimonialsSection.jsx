import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Quote, Images } from 'lucide-react';
import VideoModal from './VideoModal';
import GalleryModal from './GalleryModal';
import hospitalImage from '../assets/hospital_image.png';
import { useLanguage } from '../context/LanguageContext';

const DUMMY_GYM_IMAGE = hospitalImage;

const TestimonialsSection = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const { isHindi } = useLanguage();

  const testimonials = isHindi
    ? [
      { name: 'अर्पित', condition: 'जीबीएस (GBS)', text: '"शुरुआती दिनों में मेरी हालत बहुत गंभीर थी और जब मेरा उपचार शुरू हुआ तो अपनी इस दुर्लभ बीमारी के कारण मुझे इतने बड़े सुधार की उम्मीद नहीं थी, लेकिन यह उम्मीद से कई गुना बेहतर साबित हुआ।"' },
      { name: 'अक्षत सिंह के पिता', condition: 'सेरेब्रल पाल्सी', text: '"मेरा 4 वर्षीय बेटा शुरुआती दिनों में बहुत गंभीर स्थिति में था, एक छोटा बच्चा होने के नाते उपचार करना बहुत मुश्किल था लेकिन डॉ. प्रतीक की टीम ने इसे बहुत अच्छी तरह से संभाला, और चल रहे उपचार से मेरे बच्चे में भारी सुधार हो रहा है।"' },
      { name: 'स्टीवन दास', condition: 'लकवा', text: '"मैं लकवाग्रस्त था और डॉ. गिरी के उपचार और पुनर्वास प्रक्रिया से गुजरने के बाद, मैं पूरी तरह से ठीक हो गया और अब मैं 100% फिट और स्वस्थ हूँ।"' },
      { name: 'हर्षित', condition: 'खेल की चोट', text: '"एक पेशेवर फुटबॉलर होने के नाते, मेरे घुटने में चोट लग गई थी, लेकिन डॉ. प्रतीक गिरी की उपचार प्रक्रियाओं के साथ मैं उम्मीद से बेहतर और तेजी से ठीक हो गया।"' },
    ]
    : [
      { name: 'Arpit', condition: 'GBS', text: '"I was very severe in the initial days and when my treatment started I was not hoping such huge improvements because of my rare disease, but it came out to be exponentially great."' },
      { name: 'Father of Akshat Singh', condition: 'Cerebral Palsy', text: '"My son who is a 4 year old boy was very serious in his early days, being a small child the treatment was very difficult to execute but Dr. Pratik\'s Team handled it very nicely, and the running treatment is improving my child by huge margins."' },
      { name: 'Steven Das', condition: 'Paralysis', text: '"I was suffering from paralysis and after going through Dr. Giri\'s treatment and rehabilitation process, I got fully cured and now I am 100% fit & fine."' },
      { name: 'Harshit', condition: 'Sport Injury', text: '"I being a professional footballer, went through an injury in my knee, but along with Dr. Pratik Giri\'s treatment processes I recovered better and faster than expected."' },
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
              ? <>असली कहानियां, <br /><span className="text-primary">असली परिणाम</span></>
              : <>Real Stories, <br /><span className="text-primary">Real Results</span></>}
          </h2>
          <p className="text-slate-600">
            {isHindi
              ? 'हमारे मरीजों से सीधे उनकी रिकवरी की यात्रा के बारे में सुनें।'
              : 'Hear directly from our patients about their journey to recovery.'}
          </p>
        </div>

        {/* Video Frame Area */}
        <div className="mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative max-w-4xl mx-auto rounded-3xl md:rounded-[2.5rem] overflow-hidden shadow-2xl h-[300px] sm:h-[400px] md:h-[500px] group cursor-pointer"
            onClick={() => setIsVideoOpen(true)}
          >
            {/* Background Image */}
            <img
              src={DUMMY_GYM_IMAGE}
              alt="Gym Background"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-slate-900/30 transition-colors"></div>

            {/* Play Button */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[85%] z-20">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-transform duration-300 ring-4 ring-white/30">
                <Play size={26} className="text-primary fill-primary ml-1 md:ml-1.5" />
              </div>
            </div>

            {/* Info Card at Bottom */}
            <div className="absolute bottom-4 left-4 right-4 md:bottom-8 md:left-8 md:right-8">
              <div className="bg-white/80 md:bg-white/95 backdrop-blur-md rounded-xl md:rounded-2xl p-3 md:p-8 shadow-xl">
                <h3 className="text-base md:text-xl font-bold text-slate-800 mb-1 md:mb-2">
                  {isHindi ? 'मरीज की सफलता की कहानी' : 'Patient Success Story'}
                </h3>
                <p className="text-slate-600 text-xs md:text-base leading-snug md:leading-normal">
                  {isHindi
                    ? 'देखें कि हमने एक पेशेवर फुटबॉलर को गंभीर घुटने की चोट के बाद मैदान पर वापस आने में कैसे मदद की।'
                    : 'See how we helped a Professional Footballer return to the field after a severe knee injury.'}
                </p>
              </div>
            </div>
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
              className="flex items-center gap-2.5 bg-primary text-white px-7 py-3.5 rounded-full font-semibold text-base hover:bg-primary/90 hover:scale-105 transition-all duration-300 shadow-xl shadow-primary/30"
            >
              <Images size={18} />
              {isHindi ? 'मरीज गैलरी देखें' : 'View Patient Gallery'}
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
