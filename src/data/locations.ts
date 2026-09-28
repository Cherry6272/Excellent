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
  galleryImages?: string[];
  mapsUrl: string;
  description: string;
  features: string[];
  specialties: string[];
}

import jpNagarImg from '../assets/jp_nagar.jpg';
import rrNagar01Img from '../assets/rr_nagar_01.jpg';
import rrNagar02Img from '../assets/rr_nagar_02.jpg';

export const LOCATIONS: LocationItem[] = [
  {
    id: 'jp-nagar',
    name: 'JP Nagar Branch',
    shortName: 'JP Nagar',
    subTitle: 'Signature Grooming & Hair Architecture',
    type: 'Grooming & Hair Salon',
    address: '15th Cross Road, 3rd Phase, JP Nagar, Bengaluru, Karnataka 560078',
    landmark: 'Opposite Mini Forest Cultural Centre',
    phone: '+91 80 4920 1821',
    email: 'jpnagar@excellentsalon.in',
    hours: {
      weekdays: '09:00 AM – 09:00 PM',
      weekends: '08:30 AM – 09:30 PM'
    },
    image: jpNagarImg,
    mapsUrl: 'https://maps.google.com/?q=JP+Nagar+Bengaluru',
    galleryImages: [
      jpNagarImg,
      'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&q=80&w=800'
    ],
    description: 'A quiet architectural sanctuary featuring warm solid oak finishes, private grooming suites, and bespoke razor craft. Built for executive grooming and scalp restoration.',
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
    subTitle: 'High-Ceiling Hair & Styling Studio',
    type: 'Hair & Styling Sanctuary',
    address: 'Ideal Homes Township, 5th Stage, Rajarajeshwari Nagar, Bengaluru, Karnataka 560098',
    landmark: 'Near Ideal Homes Circle',
    phone: '+91 80 4920 1822',
    email: 'rrnagare2@excellentsalon.in',
    hours: {
      weekdays: '09:30 AM – 09:00 PM',
      weekends: '09:00 AM – 09:30 PM'
    },
    image: rrNagar01Img,
    mapsUrl: 'https://maps.google.com/?q=RR+Nagar+Bengaluru',
    galleryImages: [
      rrNagar01Img,
      'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?auto=format&fit=crop&q=80&w=800'
    ],
    description: 'Our flagship double-height hair studio flooded with natural light, arched mirror alcoves, and advanced balayage & keratin laboratories.',
    features: [
      'Double-Height Natural Sunlight Atrium',
      'Advanced Hair Color & Balayage Lab',
      'Linen Wash Sanctuaries',
      'Dedicated Consultation Bar'
    ],
    specialties: ['Balayage & Global Color', 'Keratin & Smoothening', 'Couture Haircuts', 'Deep Conditioning Spa']
  },
  {
    id: 'rr-nagar-e3',
    name: 'RR Nagar — E3',
    shortName: 'RR Nagar E3',
    subTitle: 'Unisex Beauty & Spa Lounge',
    type: 'Unisex Spa & Nail Lounge',
    address: '80 Feet Main Road, Bangarappa Nagar, RR Nagar, Bengaluru, Karnataka 560098',
    landmark: 'Adjacent to Luxury Living Avenue',
    phone: '+91 80 4920 1823',
    email: 'rrnagare3@excellentsalon.in',
    hours: {
      weekdays: '09:00 AM – 09:00 PM',
      weekends: '08:30 AM – 09:30 PM'
    },
    image: rrNagar02Img,
    mapsUrl: 'https://maps.google.com/?q=RR+Nagar+Bangarappa+Bengaluru',
    galleryImages: [
      rrNagar02Img,
      'https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=800'
    ],
    description: 'An all-inclusive, serene beauty and spa lounge offering signature manicures, pedicures in travertine basins, advanced skincare rituals, and unisex hair wellness.',
    features: [
      'Travertine Stone Pedicure Waterways',
      'Private Organic Facial Suites',
      'Unisex Nail & Hand Care Bar',
      'Sensory Aromatherapy Atmosphere'
    ],
    specialties: ['Hydra-Glow Facials', 'Spa Pedicure Rituals', 'Unisex Skin Treatments', 'Bridal & Occasion Pampering']
  }
];
