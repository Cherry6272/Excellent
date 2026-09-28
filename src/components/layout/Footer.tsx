import React from 'react';
import { Phone, Clock, Camera, ArrowUpRight } from 'lucide-react';
import { LOCATIONS } from '../../data/locations';

interface FooterProps {
  onOpenBooking: (branchId?: string) => void;
  onSelectLocation: (locationId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking, onSelectLocation }) => {
  return (
    <footer className="bg-[#F4EFEA] border-t border-[#1C1B1A]/10 text-[#1C1B1A] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* TOP BRAND STATEMENT & CTA */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-16 border-b border-[#1C1B1A]/10 items-end">
          <div className="lg:col-span-8 space-y-4">
            <span className="tag-label">Signature Bengaluru Experience</span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal leading-tight">
              Designed for the ritual, <br className="hidden sm:inline" />
              <span className="italic font-light text-[#5C564E]">not just the result.</span>
            </h2>
            <p className="text-sm text-[#5C564E] max-w-2xl font-light">
              Experience modern hair design, master grooming, and serene skin wellness at any of our three light-luxury sanctuaries across Bengaluru.
            </p>
          </div>
          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end">
            <button
              onClick={() => onOpenBooking()}
              className="btn-primary w-full py-4 text-xs tracking-widest text-center"
            >
              RESERVE YOUR APPOINTMENT
            </button>
          </div>
        </div>

        {/* LOCATIONS GRID IN FOOTER */}
        <div className="py-12 border-b border-[#1C1B1A]/10 grid grid-cols-1 md:grid-cols-3 gap-8">
          {LOCATIONS.map((loc) => (
            <div key={loc.id} className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="font-serif text-xl font-semibold text-[#1C1B1A]">{loc.name}</h3>
                <span className="text-[10px] uppercase font-semibold text-[#C4A77D] tracking-wider px-2 py-0.5 bg-white border border-[#1C1B1A]/8">
                  {loc.shortName}
                </span>
              </div>
              <p className="text-xs text-[#5C564E] leading-relaxed">{loc.address}</p>
              <div className="text-xs text-[#8E867C] space-y-1 pt-1">
                <p className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#C4A77D]" />
                  <span>{loc.hours.weekdays}</span>
                </p>
                <p className="flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-[#C4A77D]" />
                  <span>{loc.phone}</span>
                </p>
              </div>
              <div className="pt-2 flex items-center gap-4 text-xs font-medium">
                <button
                  onClick={() => onSelectLocation(loc.id)}
                  className="text-[#1C1B1A] hover:text-[#C4A77D] underline underline-offset-4 transition-colors"
                >
                  View Branch Details
                </button>
                <a
                  href={loc.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#5C564E] hover:text-[#1C1B1A] flex items-center gap-1 transition-colors"
                >
                  <span>Google Maps</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* FOOTER BOTTOM LINKS & COPYRIGHT */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-[#8E867C]">
          <div className="flex items-center gap-2">
            <span className="font-serif text-lg font-bold text-[#1C1B1A] tracking-wider">EXCELLENT</span>
            <span>© {new Date().getFullYear()} EXCELLENT Salon & Grooming Rituals. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[#5C564E] hover:text-[#1C1B1A] transition-colors"
            >
              <Camera className="w-4 h-4 text-[#C4A77D]" />
              <span>@excellentsalon.bengaluru</span>
            </a>
            <span>•</span>
            <span>JP Nagar · RR Nagar E2 · RR Nagar E3</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
