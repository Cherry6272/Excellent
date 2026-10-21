export interface LocationItem {
  id: string;
  name: string;
  shortName: string;
  subTitle: string;
  type: string;
  address: string;
  landmark: string;
  phone: string;
  email: string;
  hours: {
    weekdays: string;
    weekends: string;
  };
  image: string;
  galleryImages: string[];
  mapsUrl: string;
  description: string;
  features: string[];
  specialties: string[];
}

import excellent1 from '../assets/excellent1.jpeg';
import excellent2 from '../assets/excellent2.jpeg';
import excellent3 from '../assets/excellent3.jpeg';
import excellent4 from '../assets/excellent4.jpeg';
import excellent5 from '../assets/excellent5.jpeg';
import excellent6 from '../assets/excellent6.jpeg';
import excellent7 from '../assets/excellent7.jpeg';
import excellent8 from '../assets/excellent8.jpeg';

import {
  e2StorefrontImg,
  e2ReceptionImg,
  e2WaitingLoungeImg,
  e2StationMirrorImg,
  e2WashStationImg,
  e2ChairsRowImg
} from '../assets/e2images';

import {
  e3EntranceImg,
  e3ReceptionWideImg,
  e3ReceptionDeskImg,
  e3StylingFloorImg,
  e3StylingActionImg,
  e3PedicureLoungeImg,
  e3NailArtBarImg,
  e3FacialSuiteImg,
  e3SpaTreatmentSuiteImg,
  e3WashStationCorridorImg
} from '../assets/e3images';

export const LOCATIONS: LocationItem[] = [
  {
    id: 'jp-nagar',
    name: 'JP Nagar Branch',
    shortName: 'JP Nagar',
    subTitle: 'Signature Grooming & Hair Architecture',
    type: 'Executive Grooming Sanctuary',
    address: '15th Cross Road, 3rd Phase, JP Nagar, Bengaluru, Karnataka 560078',
    landmark: 'Opposite Mini Forest Cultural Centre',
    phone: '+91 80 4920 1821',
    email: 'jpnagar@excellentsalon.in',
    hours: {
      weekdays: '09:00 AM – 09:00 PM',
      weekends: '08:30 AM – 09:30 PM'
    },
    image: excellent2,
    mapsUrl: 'https://maps.google.com/?q=JP+Nagar+Bengaluru',
    galleryImages: [
      excellent2,
      excellent1,
      excellent3,
      excellent4,
      excellent5,
      excellent6,
      excellent7,
      excellent8
    ],
    description: 'A quiet architectural sanctuary featuring warm solid oak finishes, private grooming stations, and bespoke razor craft. Built for executive grooming, scalp restoration, and precision haircraft.',
    features: [
      'Private Master Grooming Suites',
      'Scalp & Hair Restoration Suite',
      'Complementary Cold-Brew & Espresso Bar',
      'Valet Parking Available'
    ],
    specialties: ['Precision Haircraft', 'Hot Towel Beard Rituals', 'Scalp Detox Therapy', 'Executive Styling']
  },
  {
    id: 'rr-nagar-e2',
    name: 'RR Nagar — E2',
    shortName: 'RR Nagar E2',
    subTitle: 'Signature Men\'s Parlour & Grooming Studio',
    type: 'Men\'s Grooming Sanctuary',
    address: '#384/A-P-11, 40 Feet Main Road, Ideal Township, R.R. Nagar, Bengaluru, Karnataka 560098',
    landmark: 'Near Ideal Homes Circle',
    phone: '+91 80 4920 1822',
    email: 'rrnagare2@excellentsalon.in',
    hours: {
      weekdays: '09:30 AM – 09:00 PM',
      weekends: '09:00 AM – 09:30 PM'
    },
    image: e2StorefrontImg,
    mapsUrl: 'https://maps.google.com/?q=RR+Nagar+Bengaluru',
    galleryImages: [
      e2StorefrontImg,
      e2ChairsRowImg,
      e2WaitingLoungeImg,
      e2ReceptionImg,
      e2StationMirrorImg,
      e2WashStationImg
    ],
    description: 'Our dedicated men’s parlour located in Ideal Township, RR Nagar. Features custom barber stations, traditional hot towel straight razorcraft, soothing scalp wash bays, and relaxed executive hospitality.',
    features: [
      'Bespoke Men\'s Barbering Stations',
      'Hot Towel & Straight Razor Rituals',
      'Executive Scalp Care & Hair Wash Bay',
      'Tufted Leather Waiting Lounge'
    ],
    specialties: ['Precision Fade Haircuts', 'Beard Sculpting & Hot Shave', 'Scalp Spa & Cranial Massage', 'Men\'s Facials & De-Tan']
  },
  {
    id: 'rr-nagar-e3',
    name: 'RR Nagar — E3',
    shortName: 'RR Nagar E3',
    subTitle: 'Unisex Beauty, Hair & Luxury Spa Lounge',
    type: 'Unisex Salon & Luxury Spa',
    address: '80 Feet Main Road, Bangarappa Nagar, RR Nagar, Bengaluru, Karnataka 560098',
    landmark: 'Adjacent to Luxury Living Avenue',
    phone: '+91 80 4920 1823',
    email: 'rrnagare3@excellentsalon.in',
    hours: {
      weekdays: '09:00 AM – 09:00 PM',
      weekends: '08:30 AM – 09:30 PM'
    },
    image: e3ReceptionWideImg,
    mapsUrl: 'https://maps.google.com/?q=RR+Nagar+Bangarappa+Bengaluru',
    galleryImages: [
      e3ReceptionWideImg,
      e3EntranceImg,
      e3StylingFloorImg,
      e3StylingActionImg,
      e3PedicureLoungeImg,
      e3NailArtBarImg,
      e3FacialSuiteImg,
      e3SpaTreatmentSuiteImg,
      e3WashStationCorridorImg,
      e3ReceptionDeskImg
    ],
    description: 'Our expansive, light-filled unisex salon & wellness sanctuary in Bangarappa Nagar, RR Nagar. Featuring designer hair styling suites, custom pedicure & foot spa tubs, an artisanal diamond nail bar, and private aesthetic dermal treatment rooms.',
    features: [
      'Expansive Unisex Hair Styling Suites',
      'Dedicated Pedicure & Foot Spa Lounge',
      'Artisan Gel Nail & Manicure Bar',
      'Private Aesthetic Skincare & Hydra-Facial Suite',
      'Private Dermal Therapy & Spa Treatment Room'
    ],
    specialties: ['Couture Haircuts & Styling', 'Balayage, Global Color & Keratin', 'Hydra-Glow Dermal Facials', 'Spa Pedicures & Nail Artistry', 'Holistic Head & Body Spa']
  }
];
