import React from 'react';
import type { LocationItem } from '../../data/locations';
import { MapPin, Clock, Phone, ArrowRight } from 'lucide-react';
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
  return (
    <motion.div 
      whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(0,0,0,0.15)" }}
      transition={{ duration: 0.2 }}
      className="card-luxury rounded-sm overflow-hidden flex flex-col group h-full bg-white border border-[#1C1B1A]/8"
    >
      {/* CARD IMAGE */}
      <div className="relative h-64 sm:h-72 overflow-hidden bg-[#EAE3DB]">
        <img
          src={location.image}
          alt={location.name}
          className="w-full h-full object-cover img-editorial group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        <div className="absolute top-4 left-4">
          <span className="bg-[#FAF8F5]/90 backdrop-blur-xs text-[#1C1B1A] text-[10px] uppercase font-semibold tracking-widest px-3 py-1 border border-[#1C1B1A]/10">
            {location.type}
          </span>
        </div>
        <div className="absolute bottom-4 left-4 right-4 text-white">
          <h3 className="font-serif text-2xl font-semibold drop-shadow-xs">{location.name}</h3>
          <p className="text-xs text-white/90 font-light drop-shadow-xs">{location.subTitle}</p>
        </div>
      </div>

      {/* CARD CONTENT */}
      <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
        <div className="space-y-4">
          <p className="text-xs text-[#5C564E] leading-relaxed font-light">
            {location.description}
          </p>

          <div className="space-y-2 text-xs text-[#5C564E] pt-2 border-t border-[#1C1B1A]/6">
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-[#C4A77D] shrink-0 mt-0.5" />
              <span>{location.address}</span>
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
          <div className="pt-2">
            <p className="text-[10px] uppercase tracking-widest text-[#8E867C] font-semibold mb-2">
              Branch Highlights:
            </p>
            <div className="flex flex-wrap gap-1.5">
              {location.specialties.map((spec, idx) => (
                <span
                  key={idx}
                  className="text-[10px] bg-[#F4EFEA] text-[#1C1B1A] px-2.5 py-1 rounded-xs border border-[#1C1B1A]/5"
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
            className="flex-1 btn-primary text-xs py-3 text-center"
          >
            BOOK AT THIS LOCATION
          </button>
          <button
            onClick={() => onSelectDetail(location.id)}
            className="btn-secondary text-xs py-3 px-4 text-center flex items-center justify-center gap-1.5"
          >
            <span>VIEW LOCATION</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};
