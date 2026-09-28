export interface RitualPackage {
  id: string;
  name: string;
  tagline: string;
  description: string;
  duration: string;
  price: string;
  valuePrice?: string;
  includedServices: string[];
  recommendedFor: string;
  availableBranches: string[];
  badge?: string;
}

export const RITUALS: RitualPackage[] = [
  {
    id: 'the-executive',
    name: 'The Executive Ritual',
    tagline: 'Refined hair design, razor beard sculpting & tension-release head massage.',
    description: 'Designed for the modern leader requiring a sharp, effortlessly polished aesthetic with deep cranial relaxation.',
    duration: '90 Min',
    price: '₹3,200',
    valuePrice: '₹3,750',
    includedServices: [
      'Signature EXCELLENT Haircut & Sculpting',
      'Artisanal Beard Trim & Hot Towel Shave',
      'Acupressure Scalp & Shoulder Massage',
      'Refreshing Cold Express Facial Polish'
    ],
    recommendedFor: 'Pre-meeting preparation, executive maintenance & weekend reset.',
    availableBranches: ['jp-nagar', 'rr-nagar-e2', 'rr-nagar-e3'],
    badge: 'Most Popular'
  },
  {
    id: 'the-groom-ritual',
    name: 'The Groom Signature Ritual',
    tagline: 'Complete head-to-toe grooming curation for weddings and celebrations.',
    description: 'An indulgent, multi-phase experience bringing out pristine skin clarity, sharp hair contours, and immaculate hand and foot presentation.',
    duration: '180 Min',
    price: '₹6,900',
    valuePrice: '₹8,400',
    includedServices: [
      'Couture Haircut & Scalp Detox Spa',
      'Royal Straight Razor Beard Design',
      'EXCELLENT Hydra-Glow Deep Skincare Facial',
      'Travertine Mineral Hand & Foot Grooming'
    ],
    recommendedFor: 'Grooms, wedding parties & red-carpet celebration events.',
    availableBranches: ['jp-nagar', 'rr-nagar-e2', 'rr-nagar-e3'],
    badge: 'Celebration Special'
  },
  {
    id: 'the-reset-spa',
    name: 'The Reset Botanical Spa',
    tagline: 'Sensory hair renewal, skin hydration & deep foot reflexology soak.',
    description: 'Step away from urban noise. A tranquil multi-sensory retreat combining botanical scalp steam, cold-pressed oils, and stone basin foot reflexology.',
    duration: '120 Min',
    price: '₹4,800',
    valuePrice: '₹5,600',
    includedServices: [
      'Restorative Botanical Hair Spa & Steam',
      'Matcha De-Tan Soothing Facial Scrub',
      'Warm Stone Basin Pedicure Soak',
      'Rosewater Facial Mist & Tea Ceremony'
    ],
    recommendedFor: 'Weekend stress relief, deep hydration & sensory wellness.',
    availableBranches: ['rr-nagar-e2', 'rr-nagar-e3']
  },
  {
    id: 'the-signature-excellent',
    name: 'The Signature EXCELLENT Sanctuary',
    tagline: 'The pinnacle of luxury hair, skin & nail pampering in one afternoon.',
    description: 'Our complete private luxury suite experience. Every detail tailored to your aesthetic preferences by our senior master stylists.',
    duration: '210 Min',
    price: '₹9,500',
    valuePrice: '₹11,500',
    includedServices: [
      'Signature Haircut & Dimensional Gloss / Balayage',
      'EXCELLENT Hydra-Glow Skincare Ritual with LED',
      'Couture Gel Manicure & Hand Therapy',
      'Travertine Mineral Spa Pedicure',
      'Artisanal Refreshments & Private Suite Access'
    ],
    recommendedFor: 'Ultimate self-care day, milestone birthdays & luxury gifting.',
    availableBranches: ['rr-nagar-e2', 'rr-nagar-e3'],
    badge: 'Ultimate Luxury'
  }
];
