import prabhakarImg from '../assets/prabhakar.jpeg';
import mukeemImg from '../assets/mukeem.jpeg';
import furkanImg from '../assets/furkanmasterjp.jpeg';
import salimImg from '../assets/salimmasterjp.jpeg';
import talivImg from '../assets/talivmasterjp.jpeg';

import {
  e2MasterHuzairImg,
  e2MasterShahrukhImg,
  e2MasterNazirImg
} from '../assets/e2images';

import {
  e3MasterAlamImg,
  e3MasterMuniImg,
  e3MasterRameshwariImg,
  e3MasterGunjarImg,
  e3MasterStellaImg,
  e3MasterAshokImg,
  e3MasterNazimImg
} from '../assets/e3images';

export interface ProfessionalItem {
  id: string;
  name: string;
  role: string;
  isFounder?: boolean;
  specialties: string[];
  branchId: string;
  branchName: string;
  experienceYears: number;
  bio: string;
  avatar: string;
  avatarPosition?: string;
}

export const PROFESSIONALS: ProfessionalItem[] = [
  // =========================================================================
  // JP NAGAR BRANCH MASTERS
  // =========================================================================
  {
    id: 'prabhakar',
    name: 'Prabhakar',
    role: 'Founder & Master Craftsman',
    isFounder: true,
    specialties: ['Bespoke Hair Architecture', 'Classical Master Razor Craft', 'Executive Scalp Care', 'Signature VIP Consultation'],
    branchId: 'jp-nagar',
    branchName: 'JP Nagar Branch',
    experienceYears: 20,
    bio: 'Founder of EXCELLENT with two decades of master barbering and salon leadership. Prabhakar established the brand to bring refined, calm, and uncompromising grooming artistry to Bengaluru.',
    avatar: prabhakarImg,
    avatarPosition: 'object-top'
  },
  {
    id: 'mukeem',
    name: 'Mukeem',
    role: 'Master Barber & Fade Sculptor',
    specialties: ['Precision Taper & Skin Fades', 'Beard Lining & Geometry', 'Scalp Revitalization Spa', 'Head Massage'],
    branchId: 'jp-nagar',
    branchName: 'JP Nagar Branch',
    experienceYears: 11,
    bio: 'A master of razor-sharp hairline detailing and contemporary scissor architecture, Mukeem combines modern fade craftsmanship with personalized beard contouring.',
    avatar: mukeemImg,
    avatarPosition: 'object-top'
  },
  {
    id: 'furkan',
    name: 'Furkan',
    role: 'Senior Master Grooming Specialist',
    specialties: ['Precision Hair Architecture', 'Hot Towel Beard Craft', 'Scalp Restoration'],
    branchId: 'jp-nagar',
    branchName: 'JP Nagar Branch',
    experienceYears: 12,
    bio: 'Furkan specializes in structural hair carving tailored to natural growth patterns with bespoke razor precision.',
    avatar: furkanImg,
    avatarPosition: 'object-top'
  },
  {
    id: 'salim',
    name: 'Salim',
    role: 'Master Barber & Scalp Therapist',
    specialties: ['Traditional Straight Razor Shave', 'Beard Sculpting', 'Cranial Acupressure'],
    branchId: 'jp-nagar',
    branchName: 'JP Nagar Branch',
    experienceYears: 14,
    bio: 'Master of classical razorcraft with deep knowledge of scalp health and warm essential oil compress therapies.',
    avatar: salimImg,
    avatarPosition: 'object-top'
  },
  {
    id: 'taliv',
    name: 'Taliv',
    role: 'Executive Grooming Expert',
    specialties: ['Executive Styling', 'Hair & Scalp Rituals', 'Clean Taper Fades'],
    branchId: 'jp-nagar',
    branchName: 'JP Nagar Branch',
    experienceYears: 8,
    bio: 'Known for bespoke executive grooming, seamless fades, and refined scissor styling techniques.',
    avatar: talivImg,
    avatarPosition: 'object-top'
  },

  // =========================================================================
  // RR NAGAR — E2 (EXCELLENT MEN'S PARLOUR) MASTERS
  // =========================================================================
  {
    id: 'shahrukh-e2',
    name: 'Shahrukh',
    role: 'Senior Stylist & Beard Architect',
    specialties: ['Modern Textured Haircuts', 'Beard Sculpting & Lining', 'Head Massage Therapy'],
    branchId: 'rr-nagar-e2',
    branchName: 'RR Nagar — E2',
    experienceYears: 10,
    bio: 'With a keen eye for contemporary men\'s aesthetic cuts, Shahrukh crafts clean textured styles and master beard definitions.',
    avatar: e2MasterShahrukhImg,
    avatarPosition: 'object-top'
  },
  {
    id: 'huzair-e2',
    name: 'Huzair',
    role: 'Master Barber & Precision Haircrafter',
    specialties: ['Precision Scissor Cuts', 'Hot Towel Razor Shave', 'Scalp Detox Spa'],
    branchId: 'rr-nagar-e2',
    branchName: 'RR Nagar — E2',
    experienceYears: 8,
    bio: 'Specializes in crisp hairline detailing, traditional hot towel straight razor shaves, and relaxing scalp revitalizations.',
    avatar: e2MasterHuzairImg,
    avatarPosition: 'object-top'
  },
  {
    id: 'nazir-e2',
    name: 'Nazir',
    role: 'Senior Master Barber & Cranial Therapist',
    specialties: ['Classical Barbering', 'Gentlemen\'s Executive Cut', 'Acupressure Scalp Therapy'],
    branchId: 'rr-nagar-e2',
    branchName: 'RR Nagar — E2',
    experienceYears: 13,
    bio: 'A veteran craftsman renowned for patient, restorative barbering sessions and classical head massage therapies.',
    avatar: e2MasterNazirImg,
    avatarPosition: 'object-top'
  },

  // =========================================================================
  // RR NAGAR — E3 (E3 UNISEX SALON & SPA) MASTERS
  // =========================================================================
  {
    id: 'alam-e3',
    name: 'Alam',
    role: 'Lead Master Stylist & Hair Sculptor',
    specialties: ['Couture Unisex Haircuts', 'Beard Architecture', 'Keratin & Smoothing'],
    branchId: 'rr-nagar-e3',
    branchName: 'RR Nagar — E3',
    experienceYears: 11,
    bio: 'Lead stylist at E3 specializing in bespoke cuts, advanced texture restructuring, and precision hair design.',
    avatar: e3MasterAlamImg,
    avatarPosition: 'object-top'
  },
  {
    id: 'muni-e3',
    name: 'Muni',
    role: 'Senior Hair Stylist & Color Specialist',
    specialties: ['Global Color & Highlights', 'Blowdry Sculpting', 'Lived-in Cuts'],
    branchId: 'rr-nagar-e3',
    branchName: 'RR Nagar — E3',
    experienceYears: 9,
    bio: 'Passionate about dimensional color pigments and effortless volume styling that elevates your everyday look.',
    avatar: e3MasterMuniImg,
    avatarPosition: 'object-top'
  },
  {
    id: 'ashok-e3',
    name: 'Ashok',
    role: 'Artistic Director & Senior Mentor',
    specialties: ['Creative Hair Design', 'Precision Color Blending', 'VIP Style Consultation'],
    branchId: 'rr-nagar-e3',
    branchName: 'RR Nagar — E3',
    experienceYears: 15,
    bio: 'Brings over 15 years of master styling experience, mentoring the creative craft and curating bespoke transformations.',
    avatar: e3MasterAshokImg,
    avatarPosition: 'object-top'
  },
  {
    id: 'rameshwari-e3',
    name: 'Rameshwari',
    role: 'Lead Aesthetician & Skincare Specialist',
    specialties: ['Hydra-Glow Facials', 'Matcha Sun De-Tan', 'LED Light Therapy'],
    branchId: 'rr-nagar-e3',
    branchName: 'RR Nagar — E3',
    experienceYears: 10,
    bio: 'Expert in clinical facial therapies and deep dermal nourishment, creating instant hydration and glowing skin.',
    avatar: e3MasterRameshwariImg,
    avatarPosition: 'object-top'
  },
  {
    id: 'gunjar-e3',
    name: 'Gunjar',
    role: 'Senior Skincare & Wellness Therapist',
    specialties: ['Organic Facial Rituals', 'Skin Detoxification', 'Waxing & Threading Art'],
    branchId: 'rr-nagar-e3',
    branchName: 'RR Nagar — E3',
    experienceYears: 8,
    bio: 'Delivers gentle, soothing skin treatments and holistic dermal wellness in our private aesthetic suites.',
    avatar: e3MasterGunjarImg,
    avatarPosition: 'object-top'
  },
  {
    id: 'stella-e3',
    name: 'Stella',
    role: 'Master Nail Artist & Foot Reflexologist',
    specialties: ['Pedicure Spa Rituals', 'Couture Gel Nail Art', 'Foot Reflexology'],
    branchId: 'rr-nagar-e3',
    branchName: 'RR Nagar — E3',
    experienceYears: 7,
    bio: 'Dedicated to pristine nail architecture, artistic hand embellishment, and soothing botanical foot soaks.',
    avatar: e3MasterStellaImg,
    avatarPosition: 'object-top'
  },
  {
    id: 'nazim-e3',
    name: 'Nazim',
    role: 'Master Grooming Specialist & Scalp Therapist',
    specialties: ['Gentlemen\'s Haircraft', 'Hot Oil Scalp Massage', 'Beard Grooming'],
    branchId: 'rr-nagar-e3',
    branchName: 'RR Nagar — E3',
    experienceYears: 9,
    bio: 'Expert in revitalizing cranial acupressure and classic grooming rituals that leave guests thoroughly refreshed.',
    avatar: e3MasterNazimImg,
    avatarPosition: 'object-top'
  }
];
