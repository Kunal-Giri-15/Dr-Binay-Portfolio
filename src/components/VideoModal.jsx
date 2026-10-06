import React, { useRef, useEffect } from 'react';
import { X } from 'lucide-react';
import founderVideo from '../assets/founder-message.mp4';
import founderThumb from '../assets/founder_video_thumb.jpg';

const VideoModal = ({ isOpen, onClose }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (isOpen && videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    } else if (!isOpen && videoRef.current) {
      videoRef.current.pause();
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 md:p-8">
      <div
        className="absolute inset-0 bg-slate-950/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />
      <div className="relative w-full max-w-4xl bg-black rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl z-10 border border-white/10 animate-in fade-in zoom-in-95 duration-200">
        <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-30">
          <button
            onClick={onClose}
            aria-label="Close video"
            className="p-2 sm:p-2.5 bg-black/70 hover:bg-black text-white/90 hover:text-white rounded-full transition-colors border border-white/20 backdrop-blur-sm shadow-lg cursor-pointer"
          >
            <X size={20} />
          </button>
        </div>
        <div className="relative aspect-video w-full bg-black flex items-center justify-center">
          <video
            ref={videoRef}
            src={founderVideo}
            poster={founderThumb}
            controls
            autoPlay
            playsInline
            className="w-full h-full object-contain"
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default VideoModal;
