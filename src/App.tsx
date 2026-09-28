import { useState } from 'react';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { MobileNav } from './components/layout/MobileNav';
import { LocationCard } from './components/locations/LocationCard';
import { LocationModal } from './components/locations/LocationModal';
import { ServiceCard } from './components/services/ServiceCard';
import { ServiceDrawer } from './components/services/ServiceDrawer';
import { RitualCard } from './components/services/RitualCard';
import { SpaceGallery } from './components/gallery/SpaceGallery';
import { ProfessionalCard } from './components/team/ProfessionalCard';
import { BookingWizard } from './components/booking/BookingWizard';

import { LOCATIONS, type LocationItem } from './data/locations';
import { SERVICES, type ServiceItem } from './data/services';
import { RITUALS } from './data/rituals';
import { PROFESSIONALS } from './data/team';

import heroImg from './assets/hero_salon.jpg';
import jpNagarImg from './assets/jp_nagar.jpg';
import rrNagar01Img from './assets/rr_nagar_01.jpg';
import rrNagar02Img from './assets/rr_nagar_02.jpg';

import { Calendar, MapPin, Sparkles, Star, Camera } from 'lucide-react';

export function App() {
  const [activeSection, setActiveSection] = useState<string>('home');
  
  // Modals & Drawers state
  const [isBookingOpen, setIsBookingOpen] = useState<boolean>(false);
  const [bookingBranchId, setBookingBranchId] = useState<string | undefined>(undefined);
  const [bookingServiceId, setBookingServiceId] = useState<string | undefined>(undefined);
  const [bookingStylistId, setBookingStylistId] = useState<string | undefined>(undefined);

  const [selectedLocationDetail, setSelectedLocationDetail] = useState<LocationItem | null>(null);
  const [selectedServiceDetail, setSelectedServiceDetail] = useState<ServiceItem | null>(null);

  const [serviceFilterCategory, setServiceFilterCategory] = useState<string>('all');

  // Trigger Booking Modal helper
  const handleOpenBooking = (branchId?: string, serviceId?: string, stylistId?: string) => {
    setBookingBranchId(branchId);
    setBookingServiceId(serviceId);
    setBookingStylistId(stylistId);
    setIsBookingOpen(true);
  };

  // Service filtering
  const filteredServices = serviceFilterCategory === 'all'
    ? SERVICES
    : SERVICES.filter((s) => s.category === serviceFilterCategory);

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1C1B1A] flex flex-col font-sans">
      
      {/* GLOBAL HEADER */}
      <Header
        onOpenBooking={handleOpenBooking}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        onSelectLocationDetail={(id) => {
          const loc = LOCATIONS.find((l) => l.id === id);
          if (loc) setSelectedLocationDetail(loc);
        }}
      />

      <main className="flex-1">
        
        {/* ========================================================================= */}
        {/* 1. HERO SECTION */}
        {/* ========================================================================= */}
        <section id="home" className="relative min-h-[90vh] sm:min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
          {/* BACKGROUND EDITORIAL PHOTOGRAPHY */}
          <div className="absolute inset-0 z-0">
            <img
              src={heroImg}
              alt="EXCELLENT Luxury Salon Interior Bengaluru"
              className="w-full h-full object-cover object-center opacity-85 scale-102 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#FAF8F5]/90 via-[#FAF8F5]/70 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#FAF8F5] via-transparent to-transparent" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
            <div className="max-w-2xl space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#FAF8F5]/90 backdrop-blur-xs border border-[#1C1B1A]/10 rounded-xs">
                <Sparkles className="w-3.5 h-3.5 text-[#C4A77D]" />
                <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#1C1B1A]">
                  Bengaluru’s Premier Light-Luxury Salon
                </span>
              </div>

              <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal leading-[1.08] text-[#1C1B1A]">
                Where grooming <br />
                becomes a <span className="italic font-light text-[#5C564E]">ritual.</span>
              </h1>

              <p className="text-sm sm:text-base text-[#5C564E] font-light leading-relaxed max-w-xl">
                A premium grooming and beauty experience across Bengaluru, designed around exceptional service, refined architectural spaces, and personalized aesthetic attention.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button
                  onClick={() => handleOpenBooking()}
                  className="btn-primary py-4 px-8 text-xs tracking-widest shadow-md"
                >
                  <Calendar className="w-4 h-4 text-[#C4A77D]" />
                  <span>BOOK AN APPOINTMENT</span>
                </button>
                <button
                  onClick={() => {
                    const el = document.getElementById('services');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="btn-secondary py-4 px-8 text-xs tracking-widest"
                >
                  EXPLORE OUR SERVICES
                </button>
              </div>

              {/* THREE BRANCHES TEASER ACCENT */}
              <div className="pt-8 flex flex-wrap items-center gap-6 text-xs text-[#5C564E] border-t border-[#1C1B1A]/10">
                <span className="font-semibold text-[#1C1B1A]">Three Sanctuaries:</span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#C4A77D]" /> JP Nagar
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#C4A77D]" /> RR Nagar (E2)
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#C4A77D]" /> RR Nagar (E3)
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 2. BRAND PHILOSOPHY STATEMENT */}
        {/* ========================================================================= */}
        <section id="story" className="py-20 sm:py-28 bg-[#F4EFEA] border-y border-[#1C1B1A]/8">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
            <span className="tag-label">Our Philosophy</span>

            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#1C1B1A] leading-tight">
              More than a salon. <br />
              <span className="italic font-light text-[#5C564E]">A space made for you.</span>
            </h2>

            <p className="text-sm sm:text-base text-[#5C564E] font-light leading-relaxed max-w-3xl mx-auto">
              We believe true grooming is an unhurried, restorative experience. EXCELLENT was created to offer Bengaluru a quiet retreat from daily hustle — where master craftsmanship meets natural light, solid oak finishes, and personal consultation.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 text-left border-t border-[#1C1B1A]/8">
              <div className="space-y-1">
                <h3 className="font-serif text-2xl font-semibold text-[#1C1B1A]">1:1 Attention</h3>
                <p className="text-xs text-[#5C564E] font-light">Dedicated master stylist time for every service.</p>
              </div>
              <div className="space-y-1">
                <h3 className="font-serif text-2xl font-semibold text-[#1C1B1A]">Master Craftsmen</h3>
                <p className="text-xs text-[#5C564E] font-light">Stylists trained across European & Asian academies.</p>
              </div>
              <div className="space-y-1">
                <h3 className="font-serif text-2xl font-semibold text-[#1C1B1A]">Light Architecture</h3>
                <p className="text-xs text-[#5C564E] font-light">Spacious ivory interiors filled with natural sunlight.</p>
              </div>
              <div className="space-y-1">
                <h3 className="font-serif text-2xl font-semibold text-[#1C1B1A]">Organic Formulas</h3>
                <p className="text-xs text-[#5C564E] font-light">Premium non-toxic Italian color & skincare lipids.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 3. THREE LOCATIONS HUB */}
        {/* ========================================================================= */}
        <section id="locations" className="py-20 sm:py-28 bg-[#FAF8F5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <span className="tag-label">Bengaluru Sanctuaries</span>
              <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#1C1B1A]">
                Three addresses. <br />
                <span className="italic text-[#5C564E] font-light">One signature experience.</span>
              </h2>
              <p className="text-sm text-[#5C564E] font-light">
                Discover our three distinct locations across Bengaluru, each designed with bespoke architectural features while maintaining our signature standard.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {LOCATIONS.map((loc) => (
                <LocationCard
                  key={loc.id}
                  location={loc}
                  onSelectDetail={(id) => {
                    const lObj = LOCATIONS.find((l) => l.id === id);
                    if (lObj) setSelectedLocationDetail(lObj);
                  }}
                  onBookAtLocation={(id) => handleOpenBooking(id)}
                />
              ))}
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* 4. SERVICES CATALOG */}
        {/* ========================================================================= */}
        <section id="services" className="py-20 sm:py-28 bg-[#F4EFEA] border-t border-[#1C1B1A]/8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="space-y-3">
                <span className="tag-label">Bespoke Menu</span>
                <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#1C1B1A]">
                  Services Curation
                </h2>
                <p className="text-sm text-[#5C564E] font-light max-w-xl">
                  Organized into specialized care disciplines for hair, beard design, dermal hydration, and hand aesthetics.
                </p>
              </div>

              {/* CATEGORY FILTER PILLS */}
              <div className="flex flex-wrap gap-2">
                {[
                  { id: 'all', label: 'All Services' },
                  { id: 'hair', label: 'Hair' },
                  { id: 'grooming', label: 'Grooming' },
                  { id: 'skin', label: 'Skin & Facial' },
                  { id: 'nails', label: 'Nails' },
                  { id: 'beauty', label: 'Beauty' }
                ].map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setServiceFilterCategory(cat.id)}
                    className={`text-xs uppercase tracking-widest px-4 py-2 rounded-xs font-medium transition-all ${
                      serviceFilterCategory === cat.id
                        ? 'bg-[#1C1B1A] text-[#FAF8F5] font-semibold shadow-xs'
                        : 'bg-white text-[#5C564E] hover:bg-[#FAF8F5] border border-[#1C1B1A]/6'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>

            {/* SERVICES GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredServices.map((service) => (
                <ServiceCard
                  key={service.id}
                  service={service}
                  onSelectService={(serv) => setSelectedServiceDetail(serv)}
                  onBookService={(sId) => handleOpenBooking(undefined, sId)}
                />
              ))}
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* 5. CURATED RITUALS & PACKAGES */}
        {/* ========================================================================= */}
        <section id="rituals" className="py-20 sm:py-28 bg-[#FAF8F5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <span className="tag-label">Signature Packages</span>
              <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#1C1B1A]">
                Curated Rituals
              </h2>
              <p className="text-sm text-[#5C564E] font-light">
                Comprehensive multi-treatment journeys designed to rejuvenate hair, skin, and mind in a single seamless session.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {RITUALS.map((ritual) => (
                <RitualCard
                  key={ritual.id}
                  ritual={ritual}
                  onBookRitual={(rId) => handleOpenBooking(undefined, rId)}
                />
              ))}
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* 6. UNISEX EXPERIENCE ("A SPACE FOR EVERYONE") */}
        {/* ========================================================================= */}
        <section className="py-20 sm:py-28 bg-[#F4EFEA] border-y border-[#1C1B1A]/8 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-6 space-y-6">
                <span className="tag-label">Inclusive Atmosphere</span>
                <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#1C1B1A] leading-tight">
                  A Space For Everyone.
                </h2>
                <p className="text-sm text-[#5C564E] font-light leading-relaxed">
                  Our RR Nagar E2, RR Nagar E3, and JP Nagar locations offer thoughtful unisex beauty and grooming services without rigid gender partitions. Whether seeking executive razor care, hand-painted balayage, or stone basin pedicures, every guest enjoys total sanctuary comfort.
                </p>

                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div className="bg-white p-4 border border-[#1C1B1A]/6 rounded-xs space-y-1">
                    <h3 className="font-serif text-lg font-semibold text-[#1C1B1A]">Men's Grooming</h3>
                    <p className="text-xs text-[#5C564E] font-light">Hot towel shaves, beard sculpting & hair craft.</p>
                  </div>
                  <div className="bg-white p-4 border border-[#1C1B1A]/6 rounded-xs space-y-1">
                    <h3 className="font-serif text-lg font-semibold text-[#1C1B1A]">Women's Hair & Color</h3>
                    <p className="text-xs text-[#5C564E] font-light">Balayage, silk keratin & couture haircuts.</p>
                  </div>
                  <div className="bg-white p-4 border border-[#1C1B1A]/6 rounded-xs space-y-1">
                    <h3 className="font-serif text-lg font-semibold text-[#1C1B1A]">Dermal Skincare</h3>
                    <p className="text-xs text-[#5C564E] font-light">Hydra-glow, matcha de-tan & LED therapy.</p>
                  </div>
                  <div className="bg-white p-4 border border-[#1C1B1A]/6 rounded-xs space-y-1">
                    <h3 className="font-serif text-lg font-semibold text-[#1C1B1A]">Travertine Nails</h3>
                    <p className="text-xs text-[#5C564E] font-light">Stone pedicure soak & couture gel manicures.</p>
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    onClick={() => handleOpenBooking()}
                    className="btn-primary py-3.5 px-7 text-xs tracking-widest"
                  >
                    BOOK AN APPOINTMENT
                  </button>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="relative rounded-sm overflow-hidden shadow-xl border border-[#1C1B1A]/10 bg-[#EAE3DB] h-96 sm:h-[480px]">
                  <img
                    src={rrNagar02Img}
                    alt="Unisex Sanctuary Experience EXCELLENT"
                    className="w-full h-full object-cover img-editorial"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                    <span className="text-[10px] uppercase tracking-widest font-semibold text-[#C4A77D]">
                      RR Nagar — E3
                    </span>
                    <h3 className="font-serif text-2xl font-semibold drop-shadow-xs">The Pedicure & Beauty Sanctuary</h3>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 7. THE SPACE — EDITORIAL INTERIOR GALLERY */}
        {/* ========================================================================= */}
        <section id="space" className="py-20 sm:py-28 bg-[#FAF8F5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <span className="tag-label">Architectural Interiors</span>
              <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#1C1B1A]">
                The Space
              </h2>
              <p className="font-serif italic text-lg sm:text-xl text-[#5C564E] font-light">
                "Designed for the ritual, not just the result. Every detail has a purpose."
              </p>
            </div>

            <SpaceGallery />

          </div>
        </section>

        {/* ========================================================================= */}
        {/* 8. PROFESSIONALS / MASTER STYLISTS */}
        {/* ========================================================================= */}
        <section id="team" className="py-20 sm:py-28 bg-[#F4EFEA] border-t border-[#1C1B1A]/8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <span className="tag-label">Master Craftsmen</span>
              <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#1C1B1A]">
                Our Professionals
              </h2>
              <p className="text-sm text-[#5C564E] font-light">
                Meet our senior stylists, master barbers, and skincare aestheticians across JP Nagar, RR Nagar E2, and RR Nagar E3.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {PROFESSIONALS.map((prof) => (
                <ProfessionalCard
                  key={prof.id}
                  professional={prof}
                  onBookWithStylist={(stId, bId) => handleOpenBooking(bId, undefined, stId)}
                />
              ))}
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* 9. TESTIMONIALS */}
        {/* ========================================================================= */}
        <section className="py-20 sm:py-28 bg-[#FAF8F5] border-t border-[#1C1B1A]/8">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            
            <div className="text-center space-y-3">
              <span className="tag-label">Client Stories</span>
              <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#1C1B1A]">
                Thoughtful Words
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  quote: "The JP Nagar branch is unlike any salon in Bengaluru. Warm oak paneling, tranquil music, and Arjun’s razor craft is absolute perfection.",
                  name: "Siddharth Rao",
                  branch: "JP Nagar Guest",
                  rating: 5
                },
                {
                  quote: "Priya at RR Nagar E2 transformed my dull hair with effortless balayage. Natural light in the studio makes the whole afternoon feel like a spa getaway.",
                  name: "Meera K.",
                  branch: "RR Nagar E2 Guest",
                  rating: 5
                },
                {
                  quote: "The travertine stone pedicure at RR Nagar E3 is world-class. Peaceful environment, zero rush, and warm linen seating. High end throughout.",
                  name: "Anand & Shweta",
                  branch: "RR Nagar E3 Guests",
                  rating: 5
                }
              ].map((t, idx) => (
                <div key={idx} className="card-luxury p-8 rounded-sm space-y-4 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex gap-1 text-[#C4A77D]">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <p className="text-xs text-[#5C564E] font-light leading-relaxed italic">
                      "{t.quote}"
                    </p>
                  </div>
                  <div className="pt-4 border-t border-[#1C1B1A]/6">
                    <p className="font-serif font-semibold text-[#1C1B1A]">{t.name}</p>
                    <p className="text-[10px] text-[#8E867C] uppercase tracking-wider">{t.branch}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* 10. INSTAGRAM / SOCIAL SECTION */}
        {/* ========================================================================= */}
        <section className="py-16 bg-[#F4EFEA] border-t border-[#1C1B1A]/8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-[#1C1B1A]/8 pb-6">
              <div>
                <span className="tag-label">Social Curation</span>
                <h3 className="font-serif text-2xl font-semibold text-[#1C1B1A]">Follow Our Journey</h3>
              </div>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary py-2.5 px-5 text-xs flex items-center gap-2"
              >
                <Camera className="w-4 h-4 text-[#C4A77D]" />
                <span>@EXCELLENTSALON.BENGALURU</span>
              </a>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { img: heroImg, caption: 'Ivory Sanctuary Archways' },
                { img: jpNagarImg, caption: 'JP Nagar Executive Grooming' },
                { img: rrNagar01Img, caption: 'RR Nagar E2 Hair Lab' },
                { img: rrNagar02Img, caption: 'RR Nagar E3 Pedicure Sanctuary' }
              ].map((item, idx) => (
                <div key={idx} className="relative h-48 overflow-hidden rounded-xs group bg-[#EAE3DB]">
                  <img
                    src={item.img}
                    alt={item.caption}
                    className="w-full h-full object-cover img-editorial group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-3 text-center text-white">
                    <span className="text-xs font-serif italic">{item.caption}</span>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

      </main>

      {/* GLOBAL FOOTER */}
      <Footer
        onOpenBooking={handleOpenBooking}
        onSelectLocation={(id) => {
          const lObj = LOCATIONS.find((l) => l.id === id);
          if (lObj) setSelectedLocationDetail(lObj);
        }}
      />

      {/* STICKY MOBILE APPOINTMENT BAR */}
      <MobileNav onOpenBooking={handleOpenBooking} />

      {/* MODALS & DRAWERS */}
      <LocationModal
        location={selectedLocationDetail}
        onClose={() => setSelectedLocationDetail(null)}
        onBookAtLocation={(id) => handleOpenBooking(id)}
      />

      <ServiceDrawer
        service={selectedServiceDetail}
        onClose={() => setSelectedServiceDetail(null)}
        onBookService={(sId, bId) => handleOpenBooking(bId, sId)}
      />

      <BookingWizard
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialBranchId={bookingBranchId}
        initialServiceId={bookingServiceId}
        initialStylistId={bookingStylistId}
      />

    </div>
  );
}

export default App;
