import React from 'react';
import type { RitualPackage } from '../../data/rituals';
import { Clock, CheckCircle2, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface RitualCardProps {
  ritual: RitualPackage;
  onBookRitual: (ritualId: string) => void;
}

export const RitualCard: React.FC<RitualCardProps> = ({ ritual, onBookRitual }) => {
  return (
    <motion.div 
      whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(0,0,0,0.1)" }}
      transition={{ duration: 0.2 }}
      className="card-luxury p-8 rounded-sm flex flex-col justify-between h-full space-y-6 relative overflow-hidden group bg-white border border-[#1C1B1A]/8"
    >
      {ritual.badge && (
        <div className="absolute top-0 right-0 bg-[#1C1B1A] text-[#FAF8F5] text-[9px] uppercase font-semibold tracking-widest px-3 py-1">
          {ritual.badge}
        </div>
      )}

      <div className="space-y-4">
        <div className="space-y-1">
          <span className="text-[10px] uppercase tracking-widest text-[#C4A77D] font-semibold">
            Curated Ritual Package
          </span>
          <h3 className="font-serif text-2xl font-semibold text-[#1C1B1A]">{ritual.name}</h3>
          <p className="text-xs text-[#5C564E] font-light leading-relaxed">{ritual.tagline}</p>
        </div>

        <div className="flex items-baseline gap-3 pt-2 border-t border-[#1C1B1A]/6">
          <span className="font-serif text-3xl font-bold text-[#1C1B1A]">{ritual.price}</span>
          {ritual.valuePrice && (
            <span className="text-xs text-[#8E867C] line-through font-light">
              Worth {ritual.valuePrice}
            </span>
          )}
          <span className="text-xs text-[#8E867C] ml-auto flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-[#C4A77D]" />
            <span>{ritual.duration}</span>
          </span>
        </div>

        {/* INCLUDED SERVICES */}
        <div className="space-y-2 pt-2">
          <p className="text-[10px] uppercase tracking-widest text-[#8E867C] font-semibold">
            Included Ritual Treatments:
          </p>
          <ul className="space-y-1.5 text-xs text-[#1C1B1A]">
            {ritual.includedServices.map((inc, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C4A77D] shrink-0 mt-0.5" />
                <span>{inc}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="pt-4 border-t border-[#1C1B1A]/8 space-y-3">
        <p className="text-[11px] text-[#5C564E] font-light italic">
          "{ritual.recommendedFor}"
        </p>
        <button
          onClick={() => onBookRitual(ritual.id)}
          className="w-full btn-primary py-3 text-xs tracking-widest flex items-center justify-center gap-2"
        >
          <span>BOOK THIS RITUAL</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </motion.div>
  );
};
