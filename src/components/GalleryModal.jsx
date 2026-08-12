import React, { useState, useEffect } from 'react';
import { X, Play, ChevronLeft, ChevronRight, Image as ImageIcon, Video, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

// ─── Image assets (auto-picked from assets folder) ────────────────────────────
const reviewGlob = import.meta.glob(
  '../assets/reviews_*.{jpeg,jpg}',
  { eager: true }
);

const IMAGE_ITEMS = Object.entries(reviewGlob)
  .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
  .map(([path, mod], i) => ({
    id: `img-${i + 1}`,
    type: 'image',
    src: mod.default,
    thumb: mod.default,
    captionEn: `Patient review ${i + 1}`,
    captionHi: `मरीज़ समीक्षा ${i + 1}`,
  }));

// ─── Custom hook: fetch video list from our Netlify proxy function ─────────────
// Captions come from each video's Context metadata in Cloudinary (caption_en, caption_hi).
// To set them: Cloudinary Dashboard → select video → Edit → Context → Add key-value.
function useCloudinaryVideos() {
  const [videoItems, setVideoItems] = useState([]);
  const [loading, setLoading]       = useState(true);
  const [error, setError]           = useState(null);

  useEffect(() => {
    fetch('/.netlify/functions/cloudinary-videos')
      .then((r) => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        return r.json();
      })
      .then(({ videos }) => {
        const items = (videos || []).map((v, i) => ({
          id: `vid-${i + 1}`,
          type: 'video',
          src: v.src,
          thumb: v.thumb,
          // Captions come from Cloudinary context metadata directly
          captionEn: v.captionEn || `Patient video ${i + 1}`,
          captionHi: v.captionHi || `मरीज़ वीडियो ${i + 1}`,
        }));
        setVideoItems(items);
      })
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, []);

  return { videoItems, loading, error };
}

// ─── Video Thumbnail Card ──────────────────────────────────────────────────────
const VideoThumbCard = ({ item, onClick }) => (
  <motion.div
    layout
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    className="relative rounded-2xl overflow-hidden cursor-pointer group aspect-square bg-slate-800"
    onClick={onClick}
  >
    {/* Dark gradient background for video cards */}
    <div className="absolute inset-0 bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center">
      <video
        src={item.src}
        className="w-full h-full object-cover opacity-60"
        muted
        preload="metadata"
      />
    </div>
    {/* Play overlay */}
    <div className="absolute inset-0 flex items-center justify-center bg-slate-900/30 group-hover:bg-slate-900/10 transition-colors duration-300">
      <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center scale-90 group-hover:scale-100 transition-transform duration-300 shadow-xl">
        <Play size={18} className="text-primary ml-0.5 fill-primary" />
      </div>
    </div>
    {/* VIDEO badge */}
    <div className="absolute top-2 left-2 bg-primary text-white text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
      <Video size={9} />
      VIDEO
    </div>
  </motion.div>
);

// ─── Image Thumbnail Card ──────────────────────────────────────────────────────
const ImageThumbCard = ({ item, onClick }) => (
  <motion.div
    layout
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    className="relative rounded-2xl overflow-hidden cursor-pointer group aspect-square bg-slate-100"
    onClick={onClick}
  >
    <img
      src={item.thumb}
      alt={item.captionEn}
      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
    />
    <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/40 transition-colors duration-300 flex items-center justify-center">
      <div className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-300 shadow-lg">
        <ImageIcon size={16} className="text-primary" />
      </div>
    </div>
  </motion.div>
);

const ThumbCard = ({ item, onClick }) =>
  item.type === 'video'
    ? <VideoThumbCard item={item} onClick={onClick} />
    : <ImageThumbCard item={item} onClick={onClick} />;

// ─── Lightbox ─────────────────────────────────────────────────────────────────
const Lightbox = ({ items, startIndex, onClose }) => {
  const [idx, setIdx] = useState(startIndex);
  const { isHindi } = useLanguage();
  const item = items[idx];

  const caption = isHindi ? item.captionHi : item.captionEn;

  const prev = () => setIdx((i) => (i - 1 + items.length) % items.length);
  const next = () => setIdx((i) => (i + 1) % items.length);

  const handleBackdrop = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div
      className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-black/95 backdrop-blur-sm p-4"
      onClick={handleBackdrop}
    >
      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 p-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors"
      >
        <X size={22} />
      </button>

      {/* Prev */}
      {items.length > 1 && (
        <button
          onClick={prev}
          className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-10 p-2 md:p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors"
        >
          <ChevronLeft size={24} />
        </button>
      )}

      {/* Media + Caption wrapper */}
      <AnimatePresence mode="wait">
        <motion.div
          key={idx}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.96 }}
          transition={{ duration: 0.25 }}
          className="max-w-4xl w-full flex flex-col items-center gap-0"
        >
          {/* Media */}
          {item.type === 'video' ? (
            <video
              key={item.src}
              src={item.src}
              controls
              autoPlay
              className="w-full max-h-[65vh] rounded-t-2xl shadow-2xl object-contain bg-black"
            />
          ) : (
            <img
              src={item.src}
              alt={caption}
              className="w-full max-h-[72vh] rounded-2xl shadow-2xl object-contain"
            />
          )}

          {/* Caption panel — only for videos, prominently displayed */}
          {item.type === 'video' && caption && (
            <div className="w-full bg-slate-900/90 backdrop-blur-md border border-white/10 rounded-b-2xl px-5 py-4">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                  <Video size={12} className="text-primary" />
                </div>
                <p className="text-white/90 text-sm md:text-base leading-relaxed font-medium">
                  {caption}
                </p>
              </div>
            </div>
          )}

          {/* Caption for images (lighter style) */}
          {item.type === 'image' && caption && (
            <p className="text-center text-white/60 text-sm mt-4">{caption}</p>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Next */}
      {items.length > 1 && (
        <button
          onClick={next}
          className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-10 p-2 md:p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors"
        >
          <ChevronRight size={24} />
        </button>
      )}

      {/* Counter */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/50 text-xs font-medium">
        {idx + 1} / {items.length}
      </div>
    </div>
  );
};

// ─── Gallery Modal ─────────────────────────────────────────────────────────────
const GalleryModal = ({ isOpen, onClose }) => {
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const { isHindi } = useLanguage();
  const { videoItems, loading, error } = useCloudinaryVideos();

  if (!isOpen) return null;

  const GALLERY_ITEMS = [...videoItems, ...IMAGE_ITEMS];
  const videoCount = videoItems.length;
  const imageCount = IMAGE_ITEMS.length;

  return (
    <>
      <div className="fixed inset-0 z-[150] flex items-end sm:items-center justify-center">
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={onClose}
        />

        {/* Panel */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 60 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="relative w-full max-w-3xl bg-white rounded-t-3xl sm:rounded-3xl shadow-2xl z-10 max-h-[90vh] flex flex-col"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-slate-100 flex-shrink-0">
            <div>
              <h3 className="text-xl font-bold text-slate-800">
                {isHindi ? 'मरीज़ गैलरी' : 'Patient Gallery'}
              </h3>
              <p className="text-sm text-slate-500 mt-0.5">
                {isHindi
                  ? `${videoCount} वीडियो · ${imageCount} फ़ोटो`
                  : `${videoCount} Videos · ${imageCount} Photos`}
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-slate-100 rounded-full transition-colors"
            >
              <X size={20} className="text-slate-600" />
            </button>
          </div>

          {/* Section label: Videos */}
          <div className="overflow-y-auto p-4 sm:p-6">
            <div className="flex items-center gap-2 mb-3">
              <Video size={14} className="text-primary" />
              <span className="text-xs font-bold tracking-widest text-primary uppercase">
                {isHindi ? 'मरीज़ वीडियो' : 'Patient Videos'}
              </span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
              {GALLERY_ITEMS.filter(i => i.type === 'video').map((item, i) => (
                <ThumbCard
                  key={item.id}
                  item={item}
                  onClick={() => setLightboxIndex(GALLERY_ITEMS.indexOf(item))}
                />
              ))}
            </div>

            {/* Section label: Photos */}
            <div className="flex items-center gap-2 mb-3">
              <ImageIcon size={14} className="text-primary" />
              <span className="text-xs font-bold tracking-widest text-primary uppercase">
                {isHindi ? 'मरीज़ फ़ोटो' : 'Patient Photos'}
              </span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {GALLERY_ITEMS.filter(i => i.type === 'image').map((item) => (
                <ThumbCard
                  key={item.id}
                  item={item}
                  onClick={() => setLightboxIndex(GALLERY_ITEMS.indexOf(item))}
                />
              ))}
            </div>

            <p className="text-center text-slate-400 text-xs mt-6 mb-2">
              {isHindi ? 'और फ़ोटो और वीडियो जल्द आ रहे हैं' : 'More photos & videos coming soon'}
            </p>
          </div>
        </motion.div>
      </div>

      {/* Lightbox layer */}
      {lightboxIndex !== null && (
        <Lightbox
          items={GALLERY_ITEMS}
          startIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </>
  );
};

export default GalleryModal;
