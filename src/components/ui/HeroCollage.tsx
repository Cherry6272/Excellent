import React from 'react';

// Real E3 Photos
import {
  e3ReceptionWideImg,
  e3StylingFloorImg,
  e3PedicureLoungeImg,
  e3NailArtBarImg,
  e3StylingActionImg,
  e3FacialSuiteImg,
  e3SpaTreatmentSuiteImg,
  e3EntranceImg,
  e3WashStationCorridorImg,
  e3ReceptionDeskImg,
  e3MasterFarhanImg
} from '../../assets/e3images';

// Real E2 Photos
import {
  e2StorefrontImg,
  e2ChairsRowImg,
  e2WaitingLoungeImg,
  e2StationMirrorImg,
  e2WashStationImg,
  e2ReceptionImg,
  e2MasterDanishImg
} from '../../assets/e2images';

// Real JP Nagar Photos
import excellent1 from '../../assets/excellent1.jpeg';
import excellent2 from '../../assets/excellent2.jpeg';
import excellent3 from '../../assets/excellent3.jpeg';
import excellent4 from '../../assets/excellent4.jpeg';
import excellent5 from '../../assets/excellent5.jpeg';
import excellent6 from '../../assets/excellent6.jpeg';
import furkanImg from '../../assets/furkanmasterjp.jpeg';

export const HeroCollage: React.FC = () => {
  // 5 Staggered columns with real photos from JP Nagar, RR Nagar E2, and RR Nagar E3
  const col1 = [
    { img: e3ReceptionWideImg, alt: 'E3 Reception Lounge' },
    { img: e2ChairsRowImg, alt: 'E2 Barber Stations' },
    { img: excellent6, alt: 'JP Nagar Grooming Alcove' },
    { img: e3FacialSuiteImg, alt: 'E3 Hydra Facial Room' },
    { img: e2StationMirrorImg, alt: 'E2 Mirror Station' },
  ];

  const col2 = [
    { img: e2StorefrontImg, alt: 'E2 Men Parlour Facade' },
    { img: e3PedicureLoungeImg, alt: 'E3 Pedicure Foot Spa' },
    { img: excellent2, alt: 'JP Nagar Oak Master Suite' },
    { img: e3StylingActionImg, alt: 'E3 Master Styling' },
    { img: e3WashStationCorridorImg, alt: 'E3 Wash Corridor' },
  ];

  const col3 = [
    { img: e3NailArtBarImg, alt: 'E3 Diamond Nail Bar' },
    { img: e2WaitingLoungeImg, alt: 'E2 Leather Lounge' },
    { img: excellent3, alt: 'JP Nagar Executive Corner' },
    { img: e3EntranceImg, alt: 'E3 Glass Entrance Portal' },
    { img: e3MasterFarhanImg, alt: 'Master Farhan at E3' },
  ];

  const col4 = [
    { img: e3StylingFloorImg, alt: 'E3 Unisex Styling Floor' },
    { img: e2WashStationImg, alt: 'E2 Hair Wash Bay' },
    { img: excellent4, alt: 'JP Nagar Serene Waiting Lounge' },
    { img: e3SpaTreatmentSuiteImg, alt: 'E3 Dermal Spa Room' },
    { img: e2MasterDanishImg, alt: 'Master Danish at E2' },
  ];

  const col5 = [
    { img: e2ReceptionImg, alt: 'E2 Reception & Altar' },
    { img: excellent1, alt: 'JP Nagar Oak Station' },
    { img: e3ReceptionDeskImg, alt: 'E3 Reception Desk' },
    { img: furkanImg, alt: 'Master Furkan at JP Nagar' },
    { img: excellent5, alt: 'JP Nagar Scalp Care' },
  ];

  // Helper to render duplicated column for smooth continuous marquee scroll
  const renderColumn = (
    items: { img: string; alt: string }[],
    animationClass: string,
    extraColClass: string = ''
  ) => {
    // Duplicate array to enable seamless 50% translation infinite loop
    const stream = [...items, ...items];
    return (
      <div className={`flex flex-col gap-4 shrink-0 w-44 sm:w-52 md:w-60 lg:w-64 ${extraColClass}`}>
        <div className={`flex flex-col gap-4 ${animationClass} pause-hover`}>
          {stream.map((item, idx) => (
            <div
              key={idx}
              className="relative rounded-md overflow-hidden border border-[#1C1B1A]/8 shadow-xs bg-[#EAE3DB] shrink-0 h-52 sm:h-60 md:h-68"
            >
              <img
                src={item.img}
                alt={item.alt}
                loading="lazy"
                className="w-full h-full object-cover select-none pointer-events-none"
              />
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* 1. SCROLLING MASONRY COLLAGE - CLEAR & VIBRANT */}
      <div className="absolute inset-0 flex justify-center gap-3 sm:gap-4 md:gap-5 -top-20 -bottom-20 opacity-45 sm:opacity-55 hover:opacity-70 transition-opacity duration-700 -rotate-1 scale-105 filter contrast-[1.04] brightness-[0.98]">
        {renderColumn(col1, 'animate-marquee-up-slow')}
        {renderColumn(col2, 'animate-marquee-down')}
        {renderColumn(col3, 'animate-marquee-up')}
        {renderColumn(col4, 'animate-marquee-down-slow', 'hidden sm:flex')}
        {renderColumn(col5, 'animate-marquee-up-slow', 'hidden lg:flex')}
      </div>

      {/* 2. OPTICAL DISSOLVE WASH (No hard edges, no boxes: guarantees text legibility on the left while leaving the center and right wide open) */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#FAF8F5]/95 via-[#FAF8F5]/70 via-35% to-[#FAF8F5]/10 pointer-events-none" />

      {/* 3. SEAMLESS TOP & BOTTOM EDGE TRANSITIONS */}
      <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-[#FAF8F5] via-[#FAF8F5]/60 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 inset-x-0 h-28 bg-gradient-to-t from-[#FAF8F5] via-[#FAF8F5]/60 to-transparent pointer-events-none" />
    </div>
  );
};
