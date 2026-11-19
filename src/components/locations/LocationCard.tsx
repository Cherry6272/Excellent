import React from 'react';
import type { LocationItem } from '../../data/locations';
import { PROFESSIONALS } from '../../data/team';
import { MapPin, Clock, Phone, ArrowRight, Camera, Users } from 'lucide-react';
import { motion } from 'framer-motion';

interface LocationCardProps {
  location: LocationItem;
  onSelectDetail: (locationId: string) => void;
  onBookAtLocation: (locationId: string) => void;
}

export const LocationCard: React.FC<LocationCardProps> = ({
  location,
  onSelectDetail,
  onBookAtLocation
}) => {
  const branchStaff = PROFESSIONALS.filter((p) => p.branchId === location.id);
  const photoCount = location.galleryImages?.length || 1;

  return (
    <motion.div 
      whileHover={{ y: -5, boxShadow: "0 12px 32px -8px rgba(28, 27, 26, 0.12)" }}
      transition={{ duration: 0.25 }}
      className="card-luxury rounded-sm overflow-hidden flex flex-col group h-full bg-white border border-[#1C1B1A]/8 shadow-xs"
    >
      {/* CARD IMAGE */}
      <div 
        onClick={() => onSelectDetail(location.id)}
        className="relative h-64 sm:h-72 overflow-hidden bg-[#EAE3DB] cursor-pointer"
      >
        <img
          src={location.image}
          alt={location.name}
          loading="lazy"
          className="w-full h-full object-cover img-editorial group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
        
        {/* TOP STATUS BADGES */}
        <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between z-10 pointer-events-none">
          <span className="bg-[#FAF8F5]/95 backdrop-blur-md text-[#1C1B1A] text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 rounded-xs shadow-xs border border-[#1C1B1A]/10">
            {location.type}
          </span>

          <div className="flex items-center gap-1.5">
            <span className="bg-black/60 backdrop-blur-xs text-white text-[10px] font-medium px-2 py-0.5 rounded-xs flex items-center gap-1 border border-white/10">
              <Camera className="w-3 h-3 text-[#C4A77D]" />
              <span>{photoCount}</span>
            </span>
            <span className="bg-black/60 backdrop-blur-xs text-white text-[10px] font-medium px-2 py-0.5 rounded-xs flex items-center gap-1 border border-white/10">
              <Users className="w-3 h-3 text-[#C4A77D]" />
              <span>{branchStaff.length}</span>
            </span>
          </div>
        </div>

        {/* BOTTOM TITLE OVERLAY */}
        <div className="absolute bottom-4 left-4 right-4 text-white">
          <h3 className="font-serif text-2xl font-semibold drop-shadow-xs">{location.name}</h3>
          <p className="text-xs text-white/90 font-light drop-shadow-xs line-clamp-1">{location.subTitle}</p>
        </div>
      </div>

      {/* CARD CONTENT */}
      <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-6">
        <div className="space-y-4">
          
          {/* PERSONALITY & RATE HIGHLIGHTS */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#C4A77D]">
                {location.taglineBadge || location.subTitle}
              </span>
              <span className="flex items-center gap-1 text-[10px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full font-medium border border-emerald-200">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>Open Today</span>
              </span>
            </div>
            {location.rateHighlights && (
              <p className="text-[11px] font-medium text-[#1C1B1A] bg-[#F4EFEA] px-2.5 py-1 rounded-xs inline-block border border-[#1C1B1A]/6">
                {location.rateHighlights}
              </p>
            )}
          </div>

          <p className="text-xs text-[#5C564E] leading-relaxed font-light line-clamp-3">
            {location.description}
          </p>

          {/* MASTER CRAFTSMEN AT THIS BRANCH */}
          {branchStaff.length > 0 && (
            <div className="pt-2 border-t border-[#1C1B1A]/6 space-y-1.5">
              <div className="flex items-center justify-between text-[11px]">
                <span className="text-[#8E867C] font-semibold uppercase tracking-wider text-[10px]">
                  Masters at this Sanctuary:
                </span>
                <span className="text-[#1C1B1A] font-semibold">{branchStaff.length} Specialists</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2 overflow-hidden">
                  {branchStaff.slice(0, 4).map((staff) => (
                    <img
                      key={staff.id}
                      src={staff.avatar}
                      alt={staff.name}
                      title={`${staff.name} — ${staff.role}`}
                      className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover object-top"
                    />
                  ))}
                </div>
                <p className="text-[11px] text-[#5C564E] truncate">
                  {branchStaff.slice(0, 3).map((s) => s.name).join(', ')}
                  {branchStaff.length > 3 && ` +${branchStaff.length - 3} more`}
                </p>
              </div>
            </div>
          )}

          {/* ADDRESS & HOURS */}
          <div className="space-y-2 text-xs text-[#5C564E] pt-2 border-t border-[#1C1B1A]/6">
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-[#C4A77D] shrink-0 mt-0.5" />
              <span className="line-clamp-2">{location.address}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#C4A77D] shrink-0" />
              <span>{location.hours.weekdays}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#C4A77D] shrink-0" />
              <span>{location.phone}</span>
            </div>
          </div>

          {/* SPECIALTIES TAGS */}
          <div className="pt-1">
            <div className="flex flex-wrap gap-1.5">
              {location.specialties.slice(0, 3).map((spec, idx) => (
                <span
                  key={idx}
                  className="text-[10px] bg-[#FAF8F5] text-[#5C564E] px-2.5 py-1 rounded-xs border border-[#1C1B1A]/8 font-medium"
                >
                  {spec}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* BUTTON ACTIONS */}
        <div className="pt-4 border-t border-[#1C1B1A]/8 flex flex-col sm:flex-row gap-2.5">
          <button
            onClick={() => onBookAtLocation(location.id)}
            className="flex-1 btn-primary text-xs py-3 text-center shadow-xs"
          >
            BOOK AT THIS SANCTUARY
          </button>
          <button
            onClick={() => onSelectDetail(location.id)}
            className="btn-secondary text-xs py-3 px-4 text-center flex items-center justify-center gap-1.5"
          >
            <span>VIEW SANCTUARY & MENU</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#C4A77D]" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};
