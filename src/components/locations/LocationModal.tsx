import React from 'react';
import type { LocationItem } from '../../data/locations';
import { PROFESSIONALS } from '../../data/team';
import { X, MapPin, Clock, Phone, Navigation, CheckCircle2, Calendar } from 'lucide-react';
import { ImageCarousel } from '../ui/ImageCarousel';

interface LocationModalProps {
  location: LocationItem | null;
  onClose: () => void;
  onBookAtLocation: (locationId: string, stylistId?: string) => void;
}

export const LocationModal: React.FC<LocationModalProps> = ({
  location,
  onClose,
  onBookAtLocation
}) => {
  if (!location) return null;

  const branchStaff = PROFESSIONALS.filter((p) => p.branchId === location.id);
  const images = location.galleryImages && location.galleryImages.length > 0 
    ? location.galleryImages 
    : [location.image];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-fade-in">
      <div className="bg-[#FAF8F5] w-full max-w-4xl rounded-sm shadow-2xl overflow-hidden border border-[#1C1B1A]/10 max-h-[92vh] flex flex-col">
        
        {/* HEADER BAR */}
        <div className="flex items-center justify-between p-4 sm:px-6 sm:py-4 border-b border-[#1C1B1A]/8 bg-white sticky top-0 z-30">
          <div>
            <span className="tag-label">{location.type}</span>
            <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#1C1B1A]">{location.name}</h2>
          </div>
          <button
            onClick={onClose}
            aria-label="Close branch modal"
            className="p-2 text-[#5C564E] hover:text-[#1C1B1A] hover:bg-[#F4EFEA] rounded-xs transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* MODAL SCROLLABLE BODY */}
        <div className="overflow-y-auto p-4 sm:p-6 space-y-6 flex-1">
          
          {/* HERO IMAGE CAROUSEL */}
          <div className="rounded-sm overflow-hidden border border-[#1C1B1A]/10 shadow-sm">
            <ImageCarousel 
              images={images} 
              heightClass="h-64 sm:h-96" 
              objectFit="object-cover" 
              showThumbnails={true}
            />
          </div>

          {/* DESCRIPTION & CONTACT INFO */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8">
            <div className="md:col-span-7 space-y-4">
              <h4 className="font-serif text-xl sm:text-2xl font-semibold text-[#1C1B1A]">The Sanctuary Atmosphere</h4>
              <p className="text-xs sm:text-sm text-[#5C564E] leading-relaxed font-light">
                {location.description}
              </p>

              <div className="pt-2 space-y-2.5">
                <h5 className="text-xs uppercase tracking-widest font-semibold text-[#8E867C]">Sanctuary Features:</h5>
                <ul className="space-y-2 text-xs text-[#1C1B1A]">
                  {location.features.map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#C4A77D] shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* SPECIALTIES TAGS */}
              <div className="pt-2">
                <h5 className="text-[10px] uppercase tracking-widest font-semibold text-[#8E867C] mb-2">Location Specialties:</h5>
                <div className="flex flex-wrap gap-1.5">
                  {location.specialties.map((spec, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] bg-[#F4EFEA] text-[#1C1B1A] px-2.5 py-1 rounded-xs border border-[#1C1B1A]/5 font-medium"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="md:col-span-5 bg-white p-5 sm:p-6 border border-[#1C1B1A]/8 space-y-4 rounded-sm self-start">
              <h4 className="font-serif text-lg font-semibold text-[#1C1B1A]">Address & Hours</h4>
              <div className="space-y-3 text-xs text-[#5C564E]">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#C4A77D] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-[#1C1B1A]">{location.address}</p>
                    <p className="text-[11px] text-[#8E867C] mt-0.5">{location.landmark}</p>
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
                  <span className="font-medium">{location.phone}</span>
                </div>
              </div>

              <a
                href={location.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full btn-secondary text-xs py-2.5 text-center flex items-center justify-center gap-2"
              >
                <Navigation className="w-3.5 h-3.5 text-[#C4A77D]" />
                <span>OPEN IN GOOGLE MAPS</span>
              </a>
            </div>
          </div>

          {/* MASTERS & SPECIALISTS AT THIS BRANCH */}
          {branchStaff.length > 0 && (
            <div className="space-y-4 pt-6 border-t border-[#1C1B1A]/8">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-serif text-xl sm:text-2xl font-semibold text-[#1C1B1A]">
                    Master Stylists at {location.shortName}
                  </h4>
                  <p className="text-xs text-[#5C564E]">Click any specialist to reserve your dedicated appointment.</p>
                </div>
                <span className="text-xs font-semibold text-[#C4A77D] bg-[#C4A77D]/10 px-2.5 py-1 rounded-xs">
                  {branchStaff.length} Masters
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
                {branchStaff.map((staff) => (
                  <div 
                    key={staff.id} 
                    onClick={() => {
                      onClose();
                      onBookAtLocation(location.id, staff.id);
                    }}
                    className="bg-white p-3.5 border border-[#1C1B1A]/8 hover:border-[#1C1B1A]/30 flex items-center gap-3.5 rounded-sm cursor-pointer transition-all hover:bg-[#F4EFEA]/50 group"
                  >
                    <img
                      src={staff.avatar}
                      alt={staff.name}
                      className={`w-14 h-14 rounded-full object-cover ${staff.avatarPosition || 'object-top'} border-2 border-[#C4A77D]/40 shrink-0 group-hover:scale-105 transition-transform`}
                    />
                    <div className="min-w-0 flex-1">
                      <h5 className="font-serif font-semibold text-[#1C1B1A] text-sm group-hover:text-[#8E7044] transition-colors truncate">
                        {staff.name}
                      </h5>
                      <p className="text-[11px] text-[#C4A77D] font-medium truncate">{staff.role}</p>
                      <p className="text-[10px] text-[#8E867C] mt-0.5">{staff.experienceYears} Yrs Exp • Book Now &rarr;</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* FOOTER ACTION BAR */}
        <div className="p-3 sm:px-6 sm:py-4 border-t border-[#1C1B1A]/8 bg-white flex flex-col sm:flex-row items-center justify-between gap-3 sticky bottom-0 z-30">
          <div className="text-xs text-[#5C564E] hidden sm:block">
            Selected: <span className="font-semibold text-[#1C1B1A]">{location.name}</span>
          </div>
          <button
            onClick={() => {
              onClose();
              onBookAtLocation(location.id);
            }}
            className="w-full sm:w-auto btn-primary py-3.5 px-8 text-xs tracking-widest flex items-center justify-center gap-2"
          >
            <Calendar className="w-4 h-4 text-[#C4A77D]" />
            <span>BOOK AN APPOINTMENT AT THIS LOCATION</span>
          </button>
        </div>

      </div>
    </div>
  );
};
