import React, { useState } from 'react';
import { X, Maximize2 } from 'lucide-react';
import heroImg from '../../assets/hero_salon.jpg';
import excellent2 from '../../assets/excellent2.jpeg';
import excellent3 from '../../assets/excellent3.jpeg';
import excellent4 from '../../assets/excellent4.jpeg';
import rrNagar01Img from '../../assets/rr_nagar_01.jpg';
import rrNagar02Img from '../../assets/rr_nagar_02.jpg';

export interface SpaceGalleryItem {
  id: string;
  title: string;
  category: 'Styling' | 'Grooming' | 'Pedicure' | 'Atmosphere';
  branchName: string;
  image: string;
  caption: string;
}

export const SPACE_ITEMS: SpaceGalleryItem[] = [
  {
    id: 'g1',
    title: 'The Natural Light Hair Atrium',
    category: 'Styling',
    branchName: 'RR Nagar — E2',
    image: rrNagar01Img,
    caption: 'Double-height linen archways designed to allow natural sunlight to reflect true hair color pigments.'
  },
  {
    id: 'g2',
    title: 'Travertine Pedicure Waterways',
    category: 'Pedicure',
    branchName: 'RR Nagar — E3',
    image: rrNagar02Img,
    caption: 'Custom carved stone water basins with ambient warm accent lighting for sensory relaxation.'
  },
  {
    id: 'g3',
    title: 'Master Razor & Grooming Suite',
    category: 'Grooming',
    branchName: 'JP Nagar Branch',
    image: excellent2,
    caption: 'Solid natural oak paneling and private executive barber stations with hot towel steam amenities.'
  },
  {
    id: 'g4',
    title: 'Executive Styling Corner',
    category: 'Styling',
    branchName: 'JP Nagar Branch',
    image: excellent3,
    caption: 'Premium seating and bright, focused lighting for absolute precision styling.'
  },
  {
    id: 'g5',
    title: 'Serene Waiting Lounge',
    category: 'Atmosphere',
    branchName: 'JP Nagar Branch',
    image: excellent4,
    caption: 'A calm, sophisticated environment to enjoy a cold-brew before your session.'
  },
  {
    id: 'g4',
    title: 'Main Reception & Product Suite',
    category: 'Atmosphere',
    branchName: 'Bengaluru Sanctuary',
    image: heroImg,
    caption: 'Warm ivory architectural arches, travertine floors, and curated botanical oil displays.'
  }
];

export const SpaceGallery: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('All');
  const [lightboxImg, setLightboxImg] = useState<SpaceGalleryItem | null>(null);

  const categories = ['All', 'Styling', 'Grooming', 'Pedicure', 'Atmosphere'];

  const filteredItems = activeTab === 'All'
    ? SPACE_ITEMS
    : SPACE_ITEMS.filter((i) => i.category === activeTab);

  return (
    <div className="space-y-8">
      {/* CATEGORY TAB FILTERS */}
      <div className="flex flex-wrap items-center justify-center gap-2 border-b border-[#1C1B1A]/8 pb-4">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveTab(cat)}
            className={`text-xs uppercase tracking-widest px-4 py-2 rounded-xs font-medium transition-all ${
              activeTab === cat
                ? 'bg-[#1C1B1A] text-[#FAF8F5] font-semibold'
                : 'bg-white text-[#5C564E] hover:bg-[#F4EFEA] border border-[#1C1B1A]/6'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* GALLERY GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            onClick={() => setLightboxImg(item)}
            className="group cursor-pointer card-luxury overflow-hidden rounded-sm relative"
          >
            <div className="relative h-80 sm:h-96 overflow-hidden bg-[#EAE3DB]">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover img-editorial group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              
              <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-xs p-2 rounded-full text-[#1C1B1A] opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-4 h-4" />
              </div>

              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                <span className="text-[10px] uppercase font-semibold tracking-widest text-[#C4A77D]">
                  {item.branchName} • {item.category}
                </span>
                <h3 className="font-serif text-2xl font-semibold drop-shadow-xs">{item.title}</h3>
                <p className="text-xs text-white/90 font-light line-clamp-2">{item.caption}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* LIGHTBOX MODAL */}
      {lightboxImg && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in">
          <div className="max-w-5xl w-full bg-[#FAF8F5] rounded-sm overflow-hidden border border-white/20 relative flex flex-col max-h-[90vh]">
            <button
              onClick={() => setLightboxImg(null)}
              className="absolute top-4 right-4 z-10 bg-black/60 text-white p-2 rounded-full hover:bg-black transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="h-[65vh] bg-black flex items-center justify-center">
              <img
                src={lightboxImg.image}
                alt={lightboxImg.title}
                className="max-h-full max-w-full object-contain"
              />
            </div>
            <div className="p-6 bg-[#FAF8F5] space-y-2">
              <span className="text-xs uppercase tracking-widest text-[#C4A77D] font-semibold">
                {lightboxImg.branchName} — {lightboxImg.category}
              </span>
              <h3 className="font-serif text-2xl font-semibold text-[#1C1B1A]">{lightboxImg.title}</h3>
              <p className="text-sm text-[#5C564E] font-light">{lightboxImg.caption}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
