import React, { useState, useEffect } from 'react';
import { MapPin, Calendar, Menu, X, ChevronDown } from 'lucide-react';
import { LOCATIONS } from '../../data/locations';

interface HeaderProps {
  onOpenBooking: (branchId?: string, serviceId?: string, stylistId?: string) => void;
  activeSection: string;
  setActiveSection: (section: string) => void;
  onSelectLocationDetail: (locationId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenBooking,
  activeSection,
  setActiveSection,
  onSelectLocationDetail
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'story', label: 'Our Story' },
    { id: 'services', label: 'Services' },
    { id: 'rituals', label: 'Rituals' },
    { id: 'locations', label: 'Locations' },
    { id: 'space', label: 'The Space' },
    { id: 'team', label: 'Professionals' }
  ];

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF8F5]/95 backdrop-blur-md shadow-xs border-b border-[#1C1B1A]/8 py-3.5'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between gap-6">
            
            {/* BRAND LOGO */}
            <button
              onClick={() => handleNavClick('home')}
              className="group text-left focus:outline-hidden shrink-0"
            >
              <div className="flex items-center gap-2.5">
                <span className="font-serif text-2xl sm:text-3xl font-bold tracking-[0.2em] uppercase text-[#1C1B1A]">
                  EXCELLENT
                </span>
                <span className="h-4 w-[1px] bg-[#1C1B1A]/20 hidden sm:inline-block" />
                <span className="text-[10px] tracking-[0.25em] uppercase font-semibold text-[#C4A77D] hidden sm:inline-block">
                  BENGALURU
                </span>
              </div>
            </button>

            {/* DESKTOP NAVIGATION LINKS */}
            <nav className="hidden xl:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-[11px] uppercase tracking-[0.16em] font-medium transition-colors relative py-1.5 ${
                    activeSection === item.id
                      ? 'text-[#1C1B1A] font-semibold'
                      : 'text-[#5C564E] hover:text-[#1C1B1A]'
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#C4A77D]" />
                  )}
                </button>
              ))}
            </nav>

            {/* ACTION BUTTONS — SINGLE CLEAN BOOKING CTA */}
            <div className="flex items-center gap-3 shrink-0">
              
              {/* Quick Branch Selector Dropdown */}
              <div className="relative group hidden sm:block">
                <button className="flex items-center gap-2 text-[11px] tracking-[0.14em] uppercase font-medium text-[#5C564E] hover:text-[#1C1B1A] px-3.5 py-2.5 border border-[#1C1B1A]/12 rounded-xs bg-white/60 hover:bg-white transition-all">
                  <MapPin className="w-3.5 h-3.5 text-[#C4A77D]" />
                  <span>Sanctuaries (3)</span>
                  <ChevronDown className="w-3 h-3 text-[#8E867C] group-hover:rotate-180 transition-transform duration-200" />
                </button>
                
                <div className="absolute right-0 top-full mt-2 w-64 bg-white border border-[#1C1B1A]/10 shadow-xl rounded-sm py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="px-3.5 py-1.5 text-[9px] uppercase tracking-[0.2em] font-bold text-[#8E867C] border-b border-[#1C1B1A]/6">
                    Bengaluru Locations
                  </div>
                  {LOCATIONS.map((loc) => (
                    <button
                      key={loc.id}
                      onClick={() => onSelectLocationDetail(loc.id)}
                      className="w-full text-left px-3.5 py-2.5 hover:bg-[#F4EFEA] flex flex-col transition-colors"
                    >
                      <span className="font-semibold text-xs text-[#1C1B1A]">{loc.name}</span>
                      <span className="text-[10px] text-[#8E867C] mt-0.5">{loc.type}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* SINGLE HEADER BOOK APPOINTMENT CTA */}
              <button
                onClick={() => onOpenBooking()}
                className="btn-primary text-[11px] py-2.5 px-4 sm:px-5 shadow-xs tracking-[0.14em]"
              >
                <Calendar className="w-3.5 h-3.5 text-[#C4A77D]" />
                <span className="hidden sm:inline">BOOK APPOINTMENT</span>
                <span className="sm:hidden">BOOK</span>
              </button>

              {/* MOBILE MENU HAMBURGER ICON ONLY */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-[#1C1B1A] hover:bg-[#F4EFEA] rounded-xs transition-colors xl:hidden"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>

            </div>

          </div>
        </div>
      </header>

      {/* MOBILE FULLSCREEN MENU OVERLAY */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#FAF8F5] flex flex-col justify-between p-6 sm:p-10 animate-fade-in xl:hidden">
          <div>
            <div className="flex items-center justify-between border-b border-[#1C1B1A]/10 pb-6 mb-8">
              <div>
                <span className="font-serif text-3xl font-bold uppercase tracking-widest text-[#1C1B1A]">EXCELLENT</span>
                <p className="text-[10px] uppercase tracking-[0.25em] text-[#8E867C]">Salon & Grooming Rituals</p>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-[#1C1B1A] hover:bg-[#F4EFEA] rounded-full"
              >
                <X className="w-7 h-7" />
              </button>
            </div>

            <nav className="flex flex-col gap-5">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className="text-left font-serif text-2xl tracking-wide text-[#1C1B1A] hover:text-[#C4A77D] transition-colors py-1 flex items-center justify-between"
                >
                  <span>{item.label}</span>
                  <span className="text-xs font-sans text-[#8E867C]">→</span>
                </button>
              ))}
            </nav>
          </div>

          <div className="border-t border-[#1C1B1A]/10 pt-6 space-y-4">
            <div className="text-xs text-[#5C564E] space-y-1">
              <p className="font-semibold text-[#1C1B1A]">Three Bengaluru Sanctuaries:</p>
              <p className="text-[11px] text-[#8E867C]">• JP Nagar • RR Nagar (E2) • RR Nagar (E3)</p>
            </div>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full btn-primary py-3.5 text-xs text-center tracking-widest"
            >
              BOOK AN APPOINTMENT NOW
            </button>
          </div>
        </div>
      )}
    </>
  );
};
