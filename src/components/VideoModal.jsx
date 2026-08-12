import React from 'react';
import { Play, X } from 'lucide-react';

const VideoModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative w-full max-w-4xl bg-white rounded-2xl overflow-hidden shadow-2xl z-10 animate-in fade-in zoom-in duration-300">
        <div className="absolute top-4 right-4 z-20">
          <button
            onClick={onClose}
            className="p-2 bg-black/50 hover:bg-black text-white rounded-full transition-colors"
          >
            <X size={20} />
          </button>
        </div>
        <div className="aspect-video w-full bg-slate-800 flex items-center justify-center">
          <div className="text-center text-slate-400">
            <Play size={48} className="mx-auto mb-4 opacity-50" />
            <p>Video coming soon...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoModal;
