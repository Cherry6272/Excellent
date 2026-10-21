import React, { useState, useEffect } from 'react';
import { X, Maximize2, ChevronLeft, ChevronRight, Calendar, MapPin } from 'lucide-react';

import excellent1 from '../../assets/excellent1.jpeg';
import excellent2 from '../../assets/excellent2.jpeg';
import excellent3 from '../../assets/excellent3.jpeg';
import excellent4 from '../../assets/excellent4.jpeg';
import excellent5 from '../../assets/excellent5.jpeg';
import excellent6 from '../../assets/excellent6.jpeg';

import {
  e2StorefrontImg,
  e2ReceptionImg,
  e2WaitingLoungeImg,
  e2StationMirrorImg,
  e2WashStationImg,
  e2ChairsRowImg
} from '../../assets/e2images';

import {
  e3EntranceImg,
  e3ReceptionWideImg,
  e3StylingFloorImg,
  e3StylingActionImg,
  e3PedicureLoungeImg,
  e3NailArtBarImg,
  e3FacialSuiteImg,
  e3SpaTreatmentSuiteImg,
  e3WashStationCorridorImg
} from '../../assets/e3images';

export interface SpaceGalleryItem {
  id: string;
  title: string;
  category: 'Styling' | 'Grooming' | 'Pedicure & Nails' | 'Facial & Spa' | 'Atmosphere';
  branchId: 'jp-nagar' | 'rr-nagar-e2' | 'rr-nagar-e3';
  branchName: string;
  image: string;
  caption: string;
}

export const SPACE_ITEMS: SpaceGalleryItem[] = [
  // E3 SPACES
  {
    id: 'e3-reception',
    title: 'Grand Reception & Architectural Slats',
    category: 'Atmosphere',
    branchId: 'rr-nagar-e3',
    branchName: 'RR Nagar — E3',
    image: e3ReceptionWideImg,
    caption: 'Illuminated geometric pendant, marble reception counter, and warm vertical walnut slats creating a welcoming sanctuary arrival.'
  },
  {
    id: 'e3-styling-floor',
    title: 'Modern Unisex Styling Studio',
    category: 'Styling',
    branchId: 'rr-nagar-e3',
    branchName: 'RR Nagar — E3',
    image: e3StylingFloorImg,
    caption: 'Recessed ambient lighting, sleek full-length mirrors, and diamond-quilted styling chairs for bespoke haircraft.'
  },
  {
    id: 'e3-styling-action',
    title: 'Precision Hair Sculpting & Styling',
    category: 'Styling',
    branchId: 'rr-nagar-e3',
    branchName: 'RR Nagar — E3',
    image: e3StylingActionImg,
    caption: 'Master stylist in action sculpting a client’s hair with tailored aesthetic attention and salon-grade precision.'
  },
  {
    id: 'e3-pedicure',
    title: 'Foot Spa & Pedicure Sanctuary',
    category: 'Pedicure & Nails',
    branchId: 'rr-nagar-e3',
    branchName: 'RR Nagar — E3',
    image: e3PedicureLoungeImg,
    caption: 'Therapeutic foot soak tubs, deep leather armchairs, and hexagonal wall displays for rejuvenating reflexology rituals.'
  },
  {
    id: 'e3-nail-bar',
    title: 'Artisanal Diamond Nail Bar',
    category: 'Pedicure & Nails',
    branchId: 'rr-nagar-e3',
    branchName: 'RR Nagar — E3',
    image: e3NailArtBarImg,
    caption: 'Geometric diamond wall shelving displaying premium nail lacquers and an elegant marble manicure counter.'
  },
  {
    id: 'e3-facial-suite',
    title: 'Clinical Hydra-Facial Suite',
    category: 'Facial & Spa',
    branchId: 'rr-nagar-e3',
    branchName: 'RR Nagar — E3',
    image: e3FacialSuiteImg,
    caption: 'Private treatment suite featuring advanced Hydra-infusion equipment and LED phototherapy for dermal rejuvenation.'
  },
  {
    id: 'e3-spa-treatment',
    title: 'Dermal Wellness & Spa Suite',
    category: 'Facial & Spa',
    branchId: 'rr-nagar-e3',
    branchName: 'RR Nagar — E3',
    image: e3SpaTreatmentSuiteImg,
    caption: 'Quiet private treatment chamber with comfort therapy bed, botanical steam diffuser, and soothing warm illumination.'
  },
  {
    id: 'e3-entrance',
    title: 'Sanctuary Glass Portal',
    category: 'Atmosphere',
    branchId: 'rr-nagar-e3',
    branchName: 'RR Nagar — E3',
    image: e3EntranceImg,
    caption: 'Welcoming floral toran portal framing the view into the sunlit reception and fluted wood corridor.'
  },
  {
    id: 'e3-wash',
    title: 'Hair Wash & Spa Corridor',
    category: 'Styling',
    branchId: 'rr-nagar-e3',
    branchName: 'RR Nagar — E3',
    image: e3WashStationCorridorImg,
    caption: 'Ergonomic shampoo basins framed by natural wood partitions with serene views down the central salon hallway.'
  },

  // E2 SPACES
  {
    id: 'e2-storefront',
    title: 'Ideal Township Men’s Parlour',
    category: 'Atmosphere',
    branchId: 'rr-nagar-e2',
    branchName: 'RR Nagar — E2',
    image: e2StorefrontImg,
    caption: 'Evening facade of Excellent Men’s Parlour surrounded by lush greenery and custom frosted privacy glass.'
  },
  {
    id: 'e2-chairs',
    title: 'Executive Barber Station Row',
    category: 'Grooming',
    branchId: 'rr-nagar-e2',
    branchName: 'RR Nagar — E2',
    image: e2ChairsRowImg,
    caption: 'Reclining heavy-duty barber chairs with custom glass counters and hot towel service stations.'
  },
  {
    id: 'e2-lounge',
    title: 'Tufted Leather Waiting Lounge',
    category: 'Atmosphere',
    branchId: 'rr-nagar-e2',
    branchName: 'RR Nagar — E2',
    image: e2WaitingLoungeImg,
    caption: 'Comfortable chocolate leather tufted seating and timber privacy louvers for an unhurried guest arrival.'
  },
  {
    id: 'e2-reception',
    title: 'E2 Reception & Welcome Station',
    category: 'Atmosphere',
    branchId: 'rr-nagar-e2',
    branchName: 'RR Nagar — E2',
    image: e2ReceptionImg,
    caption: 'Warm two-tone reception desk with traditional floral blessings welcoming every guest to Ideal Township.'
  },
  {
    id: 'e2-mirror',
    title: 'Barbering & Scissor Station',
    category: 'Grooming',
    branchId: 'rr-nagar-e2',
    branchName: 'RR Nagar — E2',
    image: e2StationMirrorImg,
    caption: 'Bespoke station joinery housing professional grooming tonics, straight razors, and styling products.'
  },
  {
    id: 'e2-wash',
    title: 'Scalp Wash & Conditioning Bay',
    category: 'Grooming',
    branchId: 'rr-nagar-e2',
    branchName: 'RR Nagar — E2',
    image: e2WashStationImg,
    caption: 'Ergonomic reclining shampoo wash station with climate-controlled soothing comfort.'
  },

  // JP NAGAR SPACES
  {
    id: 'jp-barber',
    title: 'Signature Master Barber Suite',
    category: 'Grooming',
    branchId: 'jp-nagar',
    branchName: 'JP Nagar Branch',
    image: excellent2,
    caption: 'Solid natural oak paneling and private executive barber stations with hot towel steam amenities.'
  },
  {
    id: 'jp-styling',
    title: 'Executive Styling Corner',
    category: 'Styling',
    branchId: 'jp-nagar',
    branchName: 'JP Nagar Branch',
    image: excellent3,
    caption: 'Premium seating and bright, focused lighting for absolute precision styling and texturing.'
  },
  {
    id: 'jp-lounge',
    title: 'Serene Waiting Lounge',
    category: 'Atmosphere',
    branchId: 'jp-nagar',
    branchName: 'JP Nagar Branch',
    image: excellent4,
    caption: 'A calm, sophisticated environment to enjoy a cold-brew espresso before your master grooming session.'
  },
  {
    id: 'jp-suite-wide',
    title: 'Oak Finished Master Station',
    category: 'Grooming',
    branchId: 'jp-nagar',
    branchName: 'JP Nagar Branch',
    image: excellent1,
    caption: 'Architectural station design featuring warm backlights and private grooming mirrors.'
  },
  {
    id: 'jp-restoration',
    title: 'Haircare & Restoration Space',
    category: 'Styling',
    branchId: 'jp-nagar',
    branchName: 'JP Nagar Branch',
    image: excellent5,
    caption: 'Dedicated station for organic scalp treatments, hair detox therapies, and bespoke blowouts.'
  },
  {
    id: 'jp-details',
    title: 'Private Barber Alcove',
    category: 'Grooming',
    branchId: 'jp-nagar',
    branchName: 'JP Nagar Branch',
    image: excellent6,
    caption: 'Intimate grooming alcove crafted for executive razor rituals and quiet personal care.'
  }
];

interface SpaceGalleryProps {
  onOpenBooking?: (branchId?: string) => void;
}

export const SpaceGallery: React.FC<SpaceGalleryProps> = ({ onOpenBooking }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [activeBranch, setActiveBranch] = useState<string>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = ['All', 'Styling', 'Grooming', 'Pedicure & Nails', 'Facial & Spa', 'Atmosphere'];
  const branches = [
    { id: 'All', label: 'All Branches' },
    { id: 'jp-nagar', label: 'JP Nagar' },
    { id: 'rr-nagar-e2', label: 'RR Nagar — E2' },
    { id: 'rr-nagar-e3', label: 'RR Nagar — E3' }
  ];

  const filteredItems = SPACE_ITEMS.filter((item) => {
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
    const matchesBranch = activeBranch === 'All' || item.branchId === activeBranch;
    return matchesCategory && matchesBranch;
  });

  const currentLightboxItem = lightboxIndex !== null && filteredItems[lightboxIndex]
    ? filteredItems[lightboxIndex]
    : null;

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) => (prev !== null ? (prev + 1) % filteredItems.length : null));
      }
      if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) => (prev !== null ? (prev - 1 + filteredItems.length) % filteredItems.length : null));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, filteredItems.length]);

  return (
    <div className="space-y-8">
      {/* FILTER CONTROLS */}
      <div className="space-y-4 border-b border-[#1C1B1A]/8 pb-6">
        
        {/* BRANCH TABS */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {branches.map((b) => (
            <button
              key={b.id}
              onClick={() => {
                setActiveBranch(b.id);
                setLightboxIndex(null);
              }}
              className={`text-xs uppercase tracking-widest px-4 py-2 rounded-xs font-semibold transition-all flex items-center gap-1.5 ${
                activeBranch === b.id
                  ? 'bg-[#1C1B1A] text-[#FAF8F5] shadow-xs'
                  : 'bg-white text-[#5C564E] hover:bg-[#F4EFEA] border border-[#1C1B1A]/10'
              }`}
            >
              {b.id !== 'All' && <MapPin className="w-3 h-3 text-[#C4A77D]" />}
              <span>{b.label}</span>
            </button>
          ))}
        </div>

        {/* CATEGORY FILTER PILLS */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 pt-1">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setLightboxIndex(null);
              }}
              className={`text-[11px] uppercase tracking-wider px-3 py-1.5 rounded-full transition-all ${
                activeCategory === cat
                  ? 'bg-[#C4A77D] text-[#1C1B1A] font-bold shadow-xs'
                  : 'bg-[#F4EFEA] text-[#5C564E] hover:text-[#1C1B1A] hover:bg-[#EAE3DB]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="text-center text-xs text-[#8E867C]">
          Showing <span className="font-semibold text-[#1C1B1A]">{filteredItems.length}</span> photographs
        </div>
      </div>

      {/* GALLERY GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filteredItems.map((item, index) => (
          <div
            key={item.id}
            onClick={() => setLightboxIndex(index)}
            className="group cursor-pointer card-luxury overflow-hidden rounded-sm relative bg-[#FAF8F5] border border-[#1C1B1A]/8 hover:border-[#1C1B1A]/25 transition-all flex flex-col"
          >
            <div className="relative h-72 sm:h-80 overflow-hidden bg-[#EAE3DB]">
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover img-editorial group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              
              <div className="absolute top-4 left-4 bg-[#FAF8F5]/90 backdrop-blur-xs text-[#1C1B1A] text-[10px] uppercase font-semibold tracking-widest px-2.5 py-1 rounded-xs border border-[#1C1B1A]/10">
                {item.branchName}
              </div>

              <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-xs p-2 rounded-full text-[#1C1B1A] opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-3.5 h-3.5" />
              </div>

              <div className="absolute bottom-5 left-5 right-5 text-white space-y-1">
                <span className="text-[10px] uppercase font-semibold tracking-widest text-[#C4A77D]">
                  {item.category}
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-semibold drop-shadow-xs line-clamp-1">{item.title}</h3>
                <p className="text-xs text-white/90 font-light line-clamp-2 leading-relaxed">{item.caption}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* LIGHTBOX MODAL */}
      {currentLightboxItem && lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fade-in">
          <div className="max-w-5xl w-full bg-[#FAF8F5] rounded-sm overflow-hidden border border-white/20 relative flex flex-col max-h-[95vh] shadow-2xl">
            
            {/* CLOSE BUTTON */}
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-4 right-4 z-20 bg-black/60 text-white p-2.5 rounded-full hover:bg-black transition-colors"
              aria-label="Close image modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* PREVIOUS / NEXT ARROWS */}
            {filteredItems.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setLightboxIndex((prev) => (prev !== null ? (prev - 1 + filteredItems.length) % filteredItems.length : null));
                  }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/60 hover:bg-black text-white p-3 rounded-full transition-colors backdrop-blur-xs"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setLightboxIndex((prev) => (prev !== null ? (prev + 1) % filteredItems.length : null));
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/60 hover:bg-black text-white p-3 rounded-full transition-colors backdrop-blur-xs"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}

            {/* MAIN LIGHTBOX IMAGE */}
            <div className="h-[55vh] sm:h-[65vh] bg-[#111] flex items-center justify-center relative overflow-hidden">
              <img
                src={currentLightboxItem.image}
                alt={currentLightboxItem.title}
                className="max-h-full max-w-full object-contain"
              />
            </div>

            {/* CAPTION & BOTTOM BAR */}
            <div className="p-4 sm:p-6 bg-[#FAF8F5] flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-[#1C1B1A]/8">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs uppercase tracking-widest text-[#C4A77D] font-bold">
                    {currentLightboxItem.branchName} • {currentLightboxItem.category}
                  </span>
                  <span className="text-xs text-[#8E867C]">
                    ({lightboxIndex + 1} of {filteredItems.length})
                  </span>
                </div>
                <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#1C1B1A]">
                  {currentLightboxItem.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#5C564E] font-light max-w-2xl">
                  {currentLightboxItem.caption}
                </p>
              </div>

              {onOpenBooking && (
                <button
                  onClick={() => {
                    const bId = currentLightboxItem.branchId;
                    setLightboxIndex(null);
                    onOpenBooking(bId);
                  }}
                  className="btn-primary py-3 px-6 text-xs whitespace-nowrap self-start sm:self-auto flex items-center gap-2"
                >
                  <Calendar className="w-3.5 h-3.5 text-[#C4A77D]" />
                  <span>BOOK AT THIS BRANCH</span>
                </button>
              )}
            </div>

          </div>
        </div>
      )}
    </div>
  );
};
