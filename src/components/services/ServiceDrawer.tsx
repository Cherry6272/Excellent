import React from 'react';
import type { ServiceItem } from '../../data/services';
import { LOCATIONS } from '../../data/locations';
import { X, Clock, CheckCircle2, MapPin } from 'lucide-react';
import { ImageCarousel } from '../ui/ImageCarousel';

interface ServiceDrawerProps {
  service: ServiceItem | null;
  onClose: () => void;
  onBookService: (serviceId: string, branchId?: string) => void;
}

export const ServiceDrawer: React.FC<ServiceDrawerProps> = ({
  service,
  onClose,
  onBookService
}) => {
  if (!service) return null;

  const availableBranches = LOCATIONS.filter((l) => service.branches.includes(l.id));
  
  // Category-based Unsplash placeholders
  const getCategoryImages = (cat: string) => {
    switch(cat) {
      case 'hair': return ['https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=800', 'https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?auto=format&fit=crop&q=80&w=800', 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&q=80&w=800'];
      case 'grooming': return ['https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=800', 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&q=80&w=800'];
      case 'skin': return ['https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=800', 'https://images.unsplash.com/photo-1616683832076-9d33b5c879bd?auto=format&fit=crop&q=80&w=800'];
      case 'nails': return ['https://images.unsplash.com/photo-1519014816548-bf5fe059e98b?auto=format&fit=crop&q=80&w=800', 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=800'];
      case 'beauty': return ['https://images.unsplash.com/photo-1512496015851-a1c8485f2eb7?auto=format&fit=crop&q=80&w=800', 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=800'];
      case 'rituals': return ['https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=800', 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=800'];
      default: return ['https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=800'];
    }
  };

  const images = (service as any).galleryImages || getCategoryImages(service.category);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/40 backdrop-blur-xs flex justify-end animate-fade-in">
      <div className="bg-[#FAF8F5] w-full max-w-xl min-h-full shadow-2xl flex flex-col justify-between border-l border-[#1C1B1A]/10">
        
        {/* HEADER */}
        <div className="p-6 border-b border-[#1C1B1A]/8 bg-white flex items-center justify-between">
          <div>
            <span className="text-[10px] uppercase font-semibold tracking-widest text-[#C4A77D]">
              {service.category} Ritual
            </span>
            <h2 className="font-serif text-2xl font-semibold text-[#1C1B1A]">{service.name}</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#5C564E] hover:text-[#1C1B1A] hover:bg-[#F4EFEA] rounded-xs transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* CONTENT */}
        <div className="p-6 sm:p-8 space-y-6 overflow-y-auto flex-1">
          
          {/* IMAGE CAROUSEL */}
          <div className="rounded-sm overflow-hidden mb-6 shadow-xs border border-[#1C1B1A]/10">
            <ImageCarousel images={images} heightClass="h-48 sm:h-56" />
          </div>

          {/* PRICE & DURATION STATS */}
          <div className="bg-white p-6 border border-[#1C1B1A]/8 flex items-center justify-between rounded-sm">
            <div>
              <p className="text-[10px] uppercase tracking-widest text-[#8E867C]">Duration</p>
              <p className="flex items-center gap-1.5 font-semibold text-[#1C1B1A] text-sm mt-0.5">
                <Clock className="w-4 h-4 text-[#C4A77D]" />
                <span>{service.duration}</span>
              </p>
            </div>
            <div className="text-right">
              <p className="text-[10px] uppercase tracking-widest text-[#8E867C]">Investment</p>
              <p className="font-serif text-2xl font-bold text-[#1C1B1A]">{service.price}</p>
            </div>
          </div>

          {/* FULL DESCRIPTION */}
          <div className="space-y-2">
            <h3 className="font-serif text-lg font-semibold text-[#1C1B1A]">Experience Overview</h3>
            <p className="text-sm text-[#5C564E] leading-relaxed font-light">{service.fullDesc}</p>
          </div>

          {/* SUITABLE FOR */}
          <div className="bg-[#F4EFEA] p-4 border border-[#1C1B1A]/6 space-y-1 rounded-sm">
            <p className="text-[10px] uppercase tracking-widest font-semibold text-[#8E867C]">Recommended For:</p>
            <p className="text-xs text-[#1C1B1A] font-medium">{service.suitableFor}</p>
          </div>

          {/* INCLUDES */}
          <div className="space-y-3 pt-2">
            <h3 className="font-serif text-lg font-semibold text-[#1C1B1A]">What the Ritual Includes</h3>
            <ul className="space-y-2 text-xs text-[#1C1B1A]">
              {service.includes.map((inc, idx) => (
                <li key={idx} className="flex items-start gap-2.5 bg-white p-3 border border-[#1C1B1A]/6 rounded-xs">
                  <CheckCircle2 className="w-4 h-4 text-[#C4A77D] shrink-0 mt-0.5" />
                  <span>{inc}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* AVAILABLE BRANCHES */}
          <div className="space-y-3 pt-2 border-t border-[#1C1B1A]/8">
            <h3 className="font-serif text-lg font-semibold text-[#1C1B1A]">Available at Sanctuaries</h3>
            <div className="space-y-2">
              {availableBranches.map((b) => (
                <div
                  key={b.id}
                  className="bg-white p-3 border border-[#1C1B1A]/6 flex items-center justify-between rounded-xs"
                >
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#C4A77D]" />
                    <div>
                      <p className="text-xs font-semibold text-[#1C1B1A]">{b.name}</p>
                      <p className="text-[10px] text-[#8E867C]">{b.type}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      onClose();
                      onBookService(service.id, b.id);
                    }}
                    className="text-[11px] text-[#1C1B1A] hover:text-[#C4A77D] font-semibold underline underline-offset-2"
                  >
                    Book at {b.shortName}
                  </button>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* FOOTER ACTION */}
        <div className="p-6 border-t border-[#1C1B1A]/8 bg-white space-y-3">
          <button
            onClick={() => {
              onClose();
              onBookService(service.id);
            }}
            className="w-full btn-primary py-4 text-xs tracking-widest text-center"
          >
            BOOK THIS SERVICE NOW
          </button>
        </div>

      </div>
    </div>
  );
};
