import React from 'react';
import { Calendar } from 'lucide-react';

interface MobileNavProps {
  onOpenBooking: (branchId?: string) => void;
}

export const MobileNav: React.FC<MobileNavProps> = ({ onOpenBooking }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 sm:hidden bg-[#FAF8F5]/95 backdrop-blur-md border-t border-[#1C1B1A]/10 p-3 shadow-lg">
      <div className="flex items-center gap-2">
        <button
          onClick={() => onOpenBooking()}
          className="flex-1 btn-primary py-3 text-xs tracking-widest text-center shadow-md flex items-center justify-center gap-2"
        >
          <Calendar className="w-4 h-4 text-[#C4A77D]" />
          <span>BOOK AN APPOINTMENT</span>
        </button>
      </div>
    </div>
  );
};
