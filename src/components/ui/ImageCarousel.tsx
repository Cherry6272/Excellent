import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Eye } from 'lucide-react';

interface ImageCarouselProps {
  images: string[];
  heightClass?: string;
  className?: string;
  objectFit?: 'object-cover' | 'object-contain';
  showThumbnails?: boolean;
}

export const ImageCarousel: React.FC<ImageCarouselProps> = ({ 
  images, 
  heightClass = 'h-64 sm:h-80',
  className = '',
  objectFit = 'object-cover',
  showThumbnails = true
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentFit, setCurrentFit] = useState<'object-cover' | 'object-contain'>(objectFit);

  // Reset index when images change
  useEffect(() => {
    setCurrentIndex(0);
  }, [images]);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  if (!images || images.length === 0) return null;

  return (
    <div className={`relative w-full overflow-hidden flex flex-col ${className}`}>
      {/* MAIN CAROUSEL FRAME */}
      <div className={`relative w-full overflow-hidden bg-[#1A1918] ${heightClass}`}>
        <AnimatePresence initial={false} mode="wait">
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className={`w-full h-full ${currentFit} transition-all duration-300`}
            alt={`Sanctuary photo ${currentIndex + 1}`}
          />
        </AnimatePresence>
        
        {/* Editorial gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

        {/* Counter & Fit Toggle */}
        <div className="absolute top-4 right-4 z-20 flex items-center gap-2">
          <span className="bg-black/60 backdrop-blur-xs text-white text-[11px] font-medium px-2.5 py-1 rounded-full border border-white/10">
            {currentIndex + 1} / {images.length}
          </span>
          <button
            onClick={() => setCurrentFit((prev) => (prev === 'object-cover' ? 'object-contain' : 'object-cover'))}
            title={currentFit === 'object-cover' ? 'Switch to Fit Entire Photo' : 'Switch to Fill Screen'}
            className="bg-black/60 hover:bg-black text-white p-1.5 rounded-full backdrop-blur-xs border border-white/10 transition-colors"
          >
            <Eye className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Navigation Controls */}
        {images.length > 1 && (
          <>
            <button 
              onClick={prevImage}
              className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 bg-black/40 hover:bg-black/80 backdrop-blur-md rounded-full text-white transition-all z-20 shadow-sm"
              aria-label="Previous photograph"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={nextImage}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 bg-black/40 hover:bg-black/80 backdrop-blur-md rounded-full text-white transition-all z-20 shadow-sm"
              aria-label="Next photograph"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </>
        )}
      </div>

      {/* THUMBNAIL STRIP */}
      {showThumbnails && images.length > 1 && (
        <div className="flex items-center gap-2 overflow-x-auto p-2 bg-[#1C1B1A]/90 backdrop-blur-xs border-t border-white/10 scrollbar-none">
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`relative h-12 w-16 sm:h-14 sm:w-20 rounded-xs overflow-hidden shrink-0 border-2 transition-all ${
                idx === currentIndex
                  ? 'border-[#C4A77D] scale-102 opacity-100'
                  : 'border-transparent opacity-50 hover:opacity-85'
              }`}
            >
              <img src={img} alt="" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
