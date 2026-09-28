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
}

export const PROFESSIONALS: ProfessionalItem[] = [
  {
    id: 'arjun-v',
    name: 'Arjun Vardhan',
    role: 'Senior Master Grooming Specialist',
    specialties: ['Precision Hair Architecture', 'Hot Towel Beard Craft', 'Scalp Restoration'],
    branchId: 'jp-nagar',
    branchName: 'JP Nagar Branch',
    experienceYears: 12,
    bio: 'Trained in London & Milan, Arjun specializes in structural hair carving tailored to natural growth patterns.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'priya-s',
    name: 'Priya Sharma',
    role: 'Artistic Director — Hair & Color',
    specialties: ['Editorial Balayage', 'Organic Keratin Infusion', 'Couture Blowouts'],
    branchId: 'rr-nagar-e2',
    branchName: 'RR Nagar — E2',
    experienceYears: 10,
    bio: 'Priya brings Paris fashion week color expertise to Bengaluru, creating soft, luminous balayage with zero harsh lines.',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'vikram-m',
    name: 'Vikram Menon',
    role: 'Master Barber & Scalp Therapist',
    specialties: ['Traditional Straight Razor Shave', 'Beard Sculpting', 'Cranial Acupressure'],
    branchId: 'jp-nagar',
    branchName: 'JP Nagar Branch',
    experienceYears: 14,
    bio: 'Master of classical razorcraft with deep knowledge of scalp health and warm essential oil compress therapies.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'ananya-r',
    name: 'Ananya Rao',
    role: 'Lead Skincare Specialist & Aesthetician',
    specialties: ['Hydra-Glow Facials', 'Matcha Sun De-Tan', 'LED Light Therapy'],
    branchId: 'rr-nagar-e3',
    branchName: 'RR Nagar — E3',
    experienceYears: 9,
    bio: 'Specialized in holistic dermal health, Ananya curates soothing skincare rituals for immediate radiant clarity.',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'rohan-k',
    name: 'Rohan Kulkarni',
    role: 'Unisex Hair Stylist & Balayage Artist',
    specialties: ['Textured Haircuts', 'Dimensional Highlights', 'Blowdry Sculpting'],
    branchId: 'rr-nagar-e2',
    branchName: 'RR Nagar — E2',
    experienceYears: 8,
    bio: 'Known for effortless, lived-in haircuts and fluid styling that transitions seamlessly from day to evening.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'meera-d',
    name: 'Meera Nair',
    role: 'Nail Artist & Reflexology Practitioner',
    specialties: ['Travertine Stone Pedicures', 'Gel Nail Artistry', 'Hand Paraffin Care'],
    branchId: 'rr-nagar-e3',
    branchName: 'RR Nagar — E3',
    experienceYears: 7,
    bio: 'Passionate about pristine hand aesthetics and therapeutic foot reflexology using warm natural botanical oils.',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=600'
  }
];
