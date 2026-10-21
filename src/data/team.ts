import furkanImg from '../assets/furkanmasterjp.jpeg';
import salimImg from '../assets/salimmasterjp.jpeg';
import talivImg from '../assets/talivmasterjp.jpeg';

import {
  e2MasterAatifImg,
  e2MasterDanishImg,
  e2MasterShoaibImg
} from '../assets/e2images';

import {
  e3MasterFarhanImg,
  e3MasterKabeerImg,
  e3MasterShabanaImg,
  e3MasterNagmaImg,
  e3MasterReshmaImg,
  e3MasterAfzalImg,
  e3MasterRashidImg
} from '../assets/e3images';

export interface ProfessionalItem {
  id: string;
  name: string;
  role: string;
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
  // RR NAGAR — E2 (EXCELLENT MEN\'S PARLOUR) MASTERS
  // =========================================================================
  {
    id: 'danish-e2',
    name: 'Danish',
    role: 'Senior Stylist & Beard Architect',
    specialties: ['Modern Textured Haircuts', 'Beard Sculpting & Lining', 'Head Massage Therapy'],
    branchId: 'rr-nagar-e2',
    branchName: 'RR Nagar — E2',
    experienceYears: 10,
    bio: 'With a keen eye for contemporary men\'s aesthetic cuts, Danish crafts clean textured styles and master beard definitions.',
    avatar: e2MasterDanishImg,
    avatarPosition: 'object-top'
  },
  {
    id: 'aatif-e2',
    name: 'Aatif',
    role: 'Master Barber & Precision Haircrafter',
    specialties: ['Precision Scissor Cuts', 'Hot Towel Razor Shave', 'Scalp Detox Spa'],
    branchId: 'rr-nagar-e2',
    branchName: 'RR Nagar — E2',
    experienceYears: 8,
    bio: 'Specializes in crisp hairline detailing, traditional hot towel straight razor shaves, and relaxing scalp revitalizations.',
    avatar: e2MasterAatifImg,
    avatarPosition: 'object-top'
  },
  {
    id: 'shoaib-e2',
    name: 'Shoaib',
    role: 'Senior Master Barber & Cranial Therapist',
    specialties: ['Classical Barbering', 'Gentlemen\'s Executive Cut', 'Acupressure Scalp Therapy'],
    branchId: 'rr-nagar-e2',
    branchName: 'RR Nagar — E2',
    experienceYears: 13,
    bio: 'A veteran craftsman renowned for patient, restorative barbering sessions and classical head massage therapies.',
    avatar: e2MasterShoaibImg,
    avatarPosition: 'object-top'
  },

  // =========================================================================
  // RR NAGAR — E3 (E3 UNISEX SALON & SPA) MASTERS
  // =========================================================================
  {
    id: 'farhan-e3',
    name: 'Farhan',
    role: 'Lead Master Stylist & Hair Sculptor',
    specialties: ['Couture Unisex Haircuts', 'Beard Architecture', 'Keratin & Smoothing'],
    branchId: 'rr-nagar-e3',
    branchName: 'RR Nagar — E3',
    experienceYears: 11,
    bio: 'Lead stylist at E3 specializing in bespoke cuts, advanced texture restructuring, and precision hair design.',
    avatar: e3MasterFarhanImg,
    avatarPosition: 'object-top'
  },
  {
    id: 'kabeer-e3',
    name: 'Kabeer',
    role: 'Senior Hair Stylist & Color Specialist',
    specialties: ['Global Color & Highlights', 'Blowdry Sculpting', 'Lived-in Cuts'],
    branchId: 'rr-nagar-e3',
    branchName: 'RR Nagar — E3',
    experienceYears: 9,
    bio: 'Passionate about dimensional color pigments and effortless volume styling that elevates your everyday look.',
    avatar: e3MasterKabeerImg,
    avatarPosition: 'object-top'
  },
  {
    id: 'afzal-e3',
    name: 'Afzal',
    role: 'Artistic Director & Senior Mentor',
    specialties: ['Creative Hair Design', 'Precision Color Blending', 'VIP Style Consultation'],
    branchId: 'rr-nagar-e3',
    branchName: 'RR Nagar — E3',
    experienceYears: 15,
    bio: 'Brings over 15 years of master styling experience, mentoring the creative craft and curating bespoke transformations.',
    avatar: e3MasterAfzalImg,
    avatarPosition: 'object-top'
  },
  {
    id: 'shabana-e3',
    name: 'Shabana',
    role: 'Lead Aesthetician & Skincare Specialist',
    specialties: ['Hydra-Glow Facials', 'Matcha Sun De-Tan', 'LED Light Therapy'],
    branchId: 'rr-nagar-e3',
    branchName: 'RR Nagar — E3',
    experienceYears: 10,
    bio: 'Expert in clinical facial therapies and deep dermal nourishment, creating instant hydration and glowing skin.',
    avatar: e3MasterShabanaImg,
    avatarPosition: 'object-top'
  },
  {
    id: 'nagma-e3',
    name: 'Nagma',
    role: 'Senior Skincare & Wellness Therapist',
    specialties: ['Organic Facial Rituals', 'Skin Detoxification', 'Waxing & Threading Art'],
    branchId: 'rr-nagar-e3',
    branchName: 'RR Nagar — E3',
    experienceYears: 8,
    bio: 'Delivers gentle, soothing skin treatments and holistic dermal wellness in our private aesthetic suites.',
    avatar: e3MasterNagmaImg,
    avatarPosition: 'object-top'
  },
  {
    id: 'reshma-e3',
    name: 'Reshma',
    role: 'Master Nail Artist & Foot Reflexologist',
    specialties: ['Pedicure Spa Rituals', 'Couture Gel Nail Art', 'Foot Reflexology'],
    branchId: 'rr-nagar-e3',
    branchName: 'RR Nagar — E3',
    experienceYears: 7,
    bio: 'Dedicated to pristine nail architecture, artistic hand embellishment, and soothing botanical foot soaks.',
    avatar: e3MasterReshmaImg,
    avatarPosition: 'object-top'
  },
  {
    id: 'rashid-e3',
    name: 'Rashid',
    role: 'Master Grooming Specialist & Scalp Therapist',
    specialties: ['Gentlemen\'s Haircraft', 'Hot Oil Scalp Massage', 'Beard Grooming'],
    branchId: 'rr-nagar-e3',
    branchName: 'RR Nagar — E3',
    experienceYears: 9,
    bio: 'Expert in revitalizing cranial acupressure and classic grooming rituals that leave guests thoroughly refreshed.',
    avatar: e3MasterRashidImg,
    avatarPosition: 'object-top'
  }
];
