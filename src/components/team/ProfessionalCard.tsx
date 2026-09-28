import React from 'react';
import type { ProfessionalItem } from '../../data/team';
import { MapPin, ArrowRight } from 'lucide-react';

interface ProfessionalCardProps {
  professional: ProfessionalItem;
  onBookWithStylist: (professionalId: string, branchId: string) => void;
}

export const ProfessionalCard: React.FC<ProfessionalCardProps> = ({
  professional,
  onBookWithStylist
}) => {
  return (
    <div className="card-luxury rounded-sm overflow-hidden flex flex-col justify-between h-full group">
      <div>
        {/* PORTRAIT PHOTO */}
        <div className="relative h-72 sm:h-80 overflow-hidden bg-[#EAE3DB]">
          <img
            src={professional.avatar}
            alt={professional.name}
            className="w-full h-full object-cover img-editorial group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-xs text-[#1C1B1A] text-[10px] uppercase font-semibold px-2.5 py-1 border border-[#1C1B1A]/8">
            {professional.experienceYears} Years Master Craft
          </div>
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <h3 className="font-serif text-2xl font-semibold drop-shadow-xs">{professional.name}</h3>
            <p className="text-xs text-[#C4A77D] font-medium drop-shadow-xs">{professional.role}</p>
          </div>
        </div>

        {/* CONTENT */}
        <div className="p-6 space-y-4">
          <div className="flex items-center gap-1.5 text-xs text-[#5C564E] font-medium">
            <MapPin className="w-3.5 h-3.5 text-[#C4A77D]" />
            <span>{professional.branchName}</span>
          </div>

          <p className="text-xs text-[#5C564E] font-light leading-relaxed">
            {professional.bio}
          </p>

          <div className="space-y-1.5 pt-2 border-t border-[#1C1B1A]/6">
            <p className="text-[10px] uppercase tracking-widest text-[#8E867C] font-semibold">Specializes In:</p>
            <div className="flex flex-wrap gap-1.5">
              {professional.specialties.map((spec, idx) => (
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
      </div>

      {/* FOOTER CTA */}
      <div className="p-6 pt-0">
        <button
          onClick={() => onBookWithStylist(professional.id, professional.branchId)}
          className="w-full btn-primary py-3 text-xs tracking-widest flex items-center justify-center gap-2"
        >
          <span>BOOK WITH {professional.name.split(' ')[0].toUpperCase()}</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
