import React from 'react';
import type { ServiceItem } from '../../data/services';
import { Clock, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  service: ServiceItem;
  onSelectService: (service: ServiceItem) => void;
  onBookService: (serviceId: string) => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  service,
  onSelectService,
  onBookService
}) => {
  return (
    <motion.div 
      whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(0,0,0,0.1)" }}
      transition={{ duration: 0.2 }}
      className="card-luxury p-6 rounded-sm flex flex-col justify-between h-full group bg-white border border-[#1C1B1A]/8"
    >
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-[10px] uppercase font-semibold tracking-widest text-[#8E867C] px-2 py-0.5 bg-[#F4EFEA] border border-[#1C1B1A]/5">
            {service.category}
          </span>
          {service.isPopular && (
            <span className="flex items-center gap-1 text-[10px] uppercase font-semibold text-[#B66850] bg-[#B66850]/10 px-2 py-0.5 rounded-xs">
              <Sparkles className="w-3 h-3" />
              <span>Signature</span>
            </span>
          )}
        </div>

        <h3 className="font-serif text-xl font-semibold text-[#1C1B1A] group-hover:text-[#C4A77D] transition-colors">
          {service.name}
        </h3>

        <p className="text-xs text-[#5C564E] leading-relaxed font-light line-clamp-2">
          {service.shortDesc}
        </p>

        <div className="flex items-center justify-between text-xs text-[#5C564E] pt-2 border-t border-[#1C1B1A]/6">
          <div className="flex items-center gap-1.5 text-[#8E867C]">
            <Clock className="w-3.5 h-3.5 text-[#C4A77D]" />
            <span>{service.duration}</span>
          </div>
          <div className="font-serif text-lg font-bold text-[#1C1B1A]">
            {service.price}
          </div>
        </div>
      </div>

      <div className="pt-4 flex items-center gap-2">
        <button
          onClick={() => onSelectService(service)}
          className="flex-1 btn-secondary text-[11px] py-2.5 px-3 text-center"
        >
          VIEW EXPERIENCE
        </button>
        <button
          onClick={() => onBookService(service.id)}
          className="btn-primary text-[11px] py-2.5 px-4 text-center whitespace-nowrap"
        >
          BOOK
        </button>
      </div>
    </motion.div>
  );
};
