export interface ServiceItem {
  id: string;
  name: string;
  category: 'hair' | 'grooming' | 'skin' | 'nails' | 'beauty';
  shortDesc: string;
  fullDesc: string;
  duration: string;
  price: string;
  suitableFor: string;
  includes: string[];
  branches: string[];
  isPopular?: boolean;
}

export const SERVICES: ServiceItem[] = [
  // HAIR
  {
    id: 'sig-haircut',
    name: 'Signature EXCELLENT Haircut & Sculpting',
    category: 'hair',
    shortDesc: 'Precision hair tailoring based on bone structure, hair density, and lifestyle.',
    fullDesc: 'Begins with a diagnostic scalp and hair analysis, followed by an organic botanical wash, precise hair design, and bespoke blow-dry sculpting.',
    duration: '45–60 Min',
    price: '₹1,450',
    suitableFor: 'All hair lengths and textures seeking refined structure.',
    includes: ['Consultation & Scalp Check', 'Organic Cleansing & Conditioning', 'Sculpted Haircut', 'Blow-dry & Styling Finish'],
    branches: ['jp-nagar', 'rr-nagar-e2', 'rr-nagar-e3'],
    isPopular: true
  },
  {
    id: 'hair-spa-botanical',
    name: 'Restorative Botanical Hair Spa',
    category: 'hair',
    shortDesc: 'Deep scalp detoxification and keratin hydration treatment.',
    fullDesc: 'Infused with cold-pressed botanical oils, essential lipids, and micro-steaming to revive damaged hair follicles and restore high shine.',
    duration: '60 Min',
    price: '₹2,600',
    suitableFor: 'Dry, heat-damaged, or environmental stress-exposed hair.',
    includes: ['Aromatherapy Scalp Massage', 'Warm Micro-steam Infusion', 'Nutrient Mask Application', 'Cold Rinse Seal'],
    branches: ['jp-nagar', 'rr-nagar-e2', 'rr-nagar-e3']
  },
  {
    id: 'balayage-editorial',
    name: 'Editorial Balayage & Dimensional Color',
    category: 'hair',
    shortDesc: 'Hand-painted seamless highlights creating effortless sun-kissed depth.',
    fullDesc: 'Couture color technique using low-ammonia Italian pigments, customized gloss toner, and bond-rebuilding treatment.',
    duration: '180 Min',
    price: '₹7,500',
    suitableFor: 'Clients seeking seamless dimensional radiance without harsh regrowth lines.',
    includes: ['Color Palette Consultation', 'Hand-Painted Balayage', 'Glossing Toner & Bond Builder', 'Blow-out Styling'],
    branches: ['rr-nagar-e2', 'rr-nagar-e3'],
    isPopular: true
  },
  {
    id: 'keratin-smooth',
    name: 'Organic Silk Keratin Infusion',
    category: 'hair',
    shortDesc: 'Frizz-eliminating smoothing treatment for silky manageability up to 4 months.',
    fullDesc: 'Advanced formaldehyde-free keratin complex that smooths hair cuticles, seals moisture, and reduces daily styling time by 70%.',
    duration: '150 Min',
    price: '₹6,800',
    suitableFor: 'Frizzy, rebellious, or chemically processed hair.',
    includes: ['Deep Clarifying Wash', 'Keratin Seal Infusion', 'Precision Flat-Iron Thermal Bonding', 'Post-Care Elixir'],
    branches: ['rr-nagar-e2', 'rr-nagar-e3']
  },

  // GROOMING
  {
    id: 'beard-sculpt',
    name: 'Artisanal Beard Sculpting & Hot Towel',
    category: 'grooming',
    shortDesc: 'Sharp line trim, razor detail, and warm essential oil towel wrap.',
    fullDesc: 'A classic master grooming ritual featuring straight-razor cheek lines, beard foil fade, organic beard butter treatment, and hot peppermint towel relaxation.',
    duration: '35 Min',
    price: '₹950',
    suitableFor: 'Beard wearers desiring clean lines and beard hair softness.',
    includes: ['Beard Shape & Length Trim', 'Straight Razor Detail', 'Hot Peppermint Towel Compress', 'Beard Butter Massage'],
    branches: ['jp-nagar', 'rr-nagar-e2', 'rr-nagar-e3'],
    isPopular: true
  },
  {
    id: 'royal-shave',
    name: 'The Royal Straight Razor Shave',
    category: 'grooming',
    shortDesc: 'Multi-pass smooth shave with pre-shave oil and cold stone finish.',
    fullDesc: 'The ultimate shave experience: pre-shave cedarwood oil, lathering badger-hair brush, double-pass razor shave, and cooling rosewater compresses.',
    duration: '45 Min',
    price: '₹1,200',
    suitableFor: 'Gentlemen appreciating timeless shaving craftsmanship.',
    includes: ['Pre-Shave Oil Treatment', 'Hot Towel Lathering', 'Double Pass Precision Shave', 'Cool Stone Aftershave Therapy'],
    branches: ['jp-nagar', 'rr-nagar-e2']
  },
  {
    id: 'head-massage-acupressure',
    name: 'Acupressure Head & Shoulder Relief',
    category: 'grooming',
    shortDesc: 'Stress-releasing cranial pressure massage with warm botanical oil.',
    fullDesc: 'Targets tension points across the scalp, neck, and upper back using warm rosemary and argan oil to stimulate circulation and mental clarity.',
    duration: '30 Min',
    price: '₹1,100',
    suitableFor: 'Anyone experiencing desk fatigue or tension headaches.',
    includes: ['Cranial Acupressure', 'Warm Rosemary Infusion', 'Neck & Shoulder Release', 'Towel Wipe Finish'],
    branches: ['jp-nagar', 'rr-nagar-e2', 'rr-nagar-e3']
  },

  // SKIN & FACIAL
  {
    id: 'hydra-glow-facial',
    name: 'EXCELLENT Hydra-Glow Skincare Ritual',
    category: 'skin',
    shortDesc: 'Non-invasive deep pore cleansing, hyaluronic hydration, and LED therapy.',
    fullDesc: 'Combines vortex exfoliation, gentle extraction, cold-infused vitamin serums, and red LED light therapy for an instant luminous finish.',
    duration: '60 Min',
    price: '₹3,800',
    suitableFor: 'Dehydrated, dull, or uneven skin tone seeking instant radiance.',
    includes: ['Hydro-Dermabrasion', 'Ultrasonic Pore Extraction', 'Hyaluronic Acid Infusion', 'Red Light LED Therapy'],
    branches: ['jp-nagar', 'rr-nagar-e2', 'rr-nagar-e3'],
    isPopular: true
  },
  {
    id: 'detan-soothing-mask',
    name: 'Matcha & Sea Salt De-Tan Clarifier',
    category: 'skin',
    shortDesc: 'Natural antioxidant treatment to lift sun tan and refine skin texture.',
    fullDesc: 'Gently polishes away sun-damaged surface cells with ceremonial matcha, wild honey, and sea mineral clay.',
    duration: '45 Min',
    price: '₹2,200',
    suitableFor: 'Skin exposed to daily sunlight, urban pollution, and hyperpigmentation.',
    includes: ['Exfoliating Sea Salt Scrub', 'Matcha Clay Pack', 'Ice Globe Cooling Massage', 'SPF 50 Protection'],
    branches: ['jp-nagar', 'rr-nagar-e2', 'rr-nagar-e3']
  },

  // NAILS
  {
    id: 'spa-pedicure-travertine',
    name: 'Travertine Mineral Spa Pedicure',
    category: 'nails',
    shortDesc: 'Soaking in stone water basins, foot exfoliation, and hot wax wrap.',
    fullDesc: 'Hosted at our RR Nagar E3 stone basins: Himalayan salt soak, callus smoothing, cuticle care, volcanic stone massage, and natural nail buff or polish.',
    duration: '60 Min',
    price: '₹2,400',
    suitableFor: 'Tired feet requiring deep hydration and pristine nail care.',
    includes: ['Himalayan Pink Salt Foot Soak', 'Pumice & Sugar Scrub', 'Volcanic Stone Calf Massage', 'Hydrating Paraffin Booties'],
    branches: ['rr-nagar-e2', 'rr-nagar-e3'],
    isPopular: true
  },
  {
    id: 'gel-manicure-couture',
    name: 'Couture Gel Manicure & Hand Care',
    category: 'nails',
    shortDesc: 'Precision nail shaping, cuticle care, and chip-resistant gel polish.',
    fullDesc: 'Gentle dry manicure technique, cuticle nourishment, choice of non-toxic luxury gel polish, and anti-aging hand cream massage.',
    duration: '50 Min',
    price: '₹1,950',
    suitableFor: 'Clients wanting flawless, glossy nails lasting 3+ weeks.',
    includes: ['Nail Architectural Shaping', 'Gentle Cuticle Grooming', 'LED Gel Application', 'Botanical Hand Massage'],
    branches: ['rr-nagar-e2', 'rr-nagar-e3']
  },

  // BEAUTY
  {
    id: 'brow-thread-tint',
    name: 'Precision Eyebrow Architecture & Tinting',
    category: 'beauty',
    shortDesc: 'Custom brow mapping, organic cotton threading, and subtle tint.',
    fullDesc: 'Frame your eyes with precision brow symmetry, hypoallergenic threading, and botanical henna tint tailored to your hair tone.',
    duration: '30 Min',
    price: '₹850',
    suitableFor: 'Desiring clean, structured brow framing.',
    includes: ['Facial Mapping Consultation', 'Precision Threading', 'Custom Tone Tint', 'Soothing Aloe Compress'],
    branches: ['jp-nagar', 'rr-nagar-e2', 'rr-nagar-e3']
  },
  {
    id: 'occasion-makeup-styling',
    name: 'Occasion Beauty & Hair Styling',
    category: 'beauty',
    shortDesc: 'High-definition radiant makeup and sophisticated hairstyle for events.',
    fullDesc: 'Personalized makeup artistry using airbrush technique and long-wearing luxury products paired with elegant soft waves or updos.',
    duration: '90 Min',
    price: '₹5,500',
    suitableFor: 'Weddings, receptions, and red-carpet galas.',
    includes: ['Skincare Prep & Primer', 'Airbrush HD Makeup', 'Eyelash Enhancements', 'Couture Hair Updo / Waves'],
    branches: ['rr-nagar-e2', 'rr-nagar-e3']
  }
];
