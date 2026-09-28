import React from 'react';
import type { LocationItem } from '../../data/locations';
import { PROFESSIONALS } from '../../data/team';
import { X, MapPin, Clock, Phone, Navigation, CheckCircle2 } from 'lucide-react';
import { ImageCarousel } from '../ui/ImageCarousel';

interface LocationModalProps {
  location: LocationItem | null;
  onClose: () => void;
  onBookAtLocation: (locationId: string) => void;
}

export const LocationModal: React.FC<LocationModalProps> = ({
  location,
  onClose,
  onBookAtLocation
}) => {
  if (!location) return null;

  const branchStaff = PROFESSIONALS.filter((p) => p.branchId === location.id);
  const images = location.galleryImages || [location.image];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/40 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-fade-in">
      <div className="bg-[#FAF8F5] w-full max-w-4xl rounded-sm shadow-2xl overflow-hidden border border-[#1C1B1A]/10 max-h-[90vh] flex flex-col">
        
        {/* HEADER BAR */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-[#1C1B1A]/8 bg-white">
          <div>
            <span className="tag-label">{location.type}</span>
            <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#1C1B1A]">{location.name}</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#5C564E] hover:text-[#1C1B1A] hover:bg-[#F4EFEA] rounded-xs transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* MODAL SCROLLABLE BODY */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8 flex-1">
          
          {/* HERO IMAGE CAROUSEL */}
          <div className="relative h-64 sm:h-80 rounded-sm overflow-hidden bg-[#EAE3DB]">
            <ImageCarousel images={images} heightClass="h-full" />
            <div className="absolute bottom-6 left-6 right-6 text-white space-y-1 pointer-events-none z-20">
              <span className="text-xs uppercase tracking-widest font-semibold text-[#C4A77D]">
                Bengaluru Branch
              </span>
              <h3 className="font-serif text-3xl font-normal drop-shadow-xs">{location.subTitle}</h3>
            </div>
          </div>

          {/* DESCRIPTION & CONTACT INFO */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-7 space-y-4">
              <h4 className="font-serif text-xl font-semibold text-[#1C1B1A]">The Sanctuary Atmosphere</h4>
              <p className="text-sm text-[#5C564E] leading-relaxed font-light">
                {location.description}
              </p>

              <div className="pt-2 space-y-2">
                <h5 className="text-xs uppercase tracking-widest font-semibold text-[#8E867C]">Sanctuary Features:</h5>
                <ul className="space-y-1.5 text-xs text-[#1C1B1A]">
                  {location.features.map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#C4A77D]" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="md:col-span-5 bg-white p-6 border border-[#1C1B1A]/8 space-y-4 rounded-sm">
              <h4 className="font-serif text-lg font-semibold text-[#1C1B1A]">Address & Hours</h4>
              <div className="space-y-3 text-xs text-[#5C564E]">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#C4A77D] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-[#1C1B1A]">{location.address}</p>
                    <p className="text-[11px] text-[#8E867C]">{location.landmark}</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 pt-2 border-t border-[#1C1B1A]/6">
                  <Clock className="w-4 h-4 text-[#C4A77D] shrink-0 mt-0.5" />
                  <div>
                    <p><span className="font-medium text-[#1C1B1A]">Mon – Fri:</span> {location.hours.weekdays}</p>
                    <p><span className="font-medium text-[#1C1B1A]">Sat – Sun:</span> {location.hours.weekends}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 pt-2 border-t border-[#1C1B1A]/6">
                  <Phone className="w-4 h-4 text-[#C4A77D] shrink-0" />
                  <span>{location.phone}</span>
                </div>
              </div>

              <a
                href={location.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full btn-secondary text-xs py-2.5 text-center flex items-center justify-center gap-2"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>GET DIRECTIONS ON GOOGLE MAPS</span>
              </a>
            </div>
          </div>

          {/* STAFF AT THIS BRANCH */}
          {branchStaff.length > 0 && (
            <div className="space-y-4 pt-4 border-t border-[#1C1B1A]/8">
              <h4 className="font-serif text-2xl font-semibold text-[#1C1B1A]">
                Specialists Available at {location.shortName}
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {branchStaff.map((staff) => (
                  <div key={staff.id} className="bg-white p-4 border border-[#1C1B1A]/8 flex items-center gap-4 rounded-sm">
                    <img
                      src={staff.avatar}
                      alt={staff.name}
                      className="w-14 h-14 rounded-full object-cover border border-[#C4A77D]/30"
                    />
                    <div>
                      <h5 className="font-serif font-semibold text-[#1C1B1A] text-base">{staff.name}</h5>
                      <p className="text-xs text-[#C4A77D] font-medium">{staff.role}</p>
                      <p className="text-[11px] text-[#8E867C] mt-0.5">{staff.experienceYears} Years Experience</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* FOOTER ACTION BAR */}
        <div className="p-4 sm:p-6 border-t border-[#1C1B1A]/8 bg-white flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-[#5C564E]">
            Selected: <span className="font-semibold text-[#1C1B1A]">{location.name}</span>
          </div>
          <button
            onClick={() => {
              onClose();
              onBookAtLocation(location.id);
            }}
            className="w-full sm:w-auto btn-primary py-3.5 px-8 text-xs tracking-widest"
          >
            BOOK AN APPOINTMENT AT THIS LOCATION
          </button>
        </div>

      </div>
    </div>
  );
};
