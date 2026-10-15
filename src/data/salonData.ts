// PRAND SALON — Editable local placeholder data
// All content here is demo/prototype data and can be replaced with real info.

export const salonInfo = {
  brand: 'PRAND SALON',
  brandAr: 'براند صالون',
  tagline: 'قصتك بتبدأ من ستايلك',
  intro:
    'صالون حلاقة رجالي فاخر في دار السلام، القاهرة. هنحول شكلك لتحفة فنية — لأن الستايل مش رفاهية، ده أسلوب حياة.',
  area: 'دار السلام، القاهرة',
  tiktok: 'https://www.tiktok.com/@prandsalon',
  ownerTiktok: 'https://www.tiktok.com/@ahmedmibrahiim',
};

export const assets = {
  logo: '/assets/images/1000139631.jpg',
  crown: '/assets/images/1000139612.jpg',
  facilities: [
    {
      id: 'interior-main',
      image: '/assets/images/1000139611.jpg',
      label: 'مساحة الصالون',
      alt: 'مساحة داخلية في PRAND SALON',
    },
    {
      id: 'feature-wall',
      image: '/assets/images/1000139615.jpg',
      label: 'GOOD HAIR GOOD MOOD',
      alt: 'تفصيلة داخلية تحمل عبارة GOOD HAIR GOOD MOOD',
    },
    {
      id: 'workstation',
      image: '/assets/images/1000139617.jpg',
      label: 'محطة العمل',
      alt: 'كرسي ومحطة عمل داخل PRAND SALON',
    },
    {
      id: 'care-area',
      image: '/assets/images/1000139618.jpg',
      label: 'منطقة العناية',
      alt: 'منطقة غسيل وعناية داخل PRAND SALON',
    },
    {
      id: 'interior-detail',
      image: '/assets/images/1000139614.jpg',
      label: 'تفاصيل المكان',
      alt: 'تفاصيل داخلية من PRAND SALON',
    },
  ],
  haircutStyles: [
    {
      id: 'style-1',
      image: '/assets/images/1000139635.jpg',
      label: 'ستايل من أعمال PRAND SALON',
      alt: 'قصة شعر من أعمال PRAND SALON',
    },
    {
      id: 'style-2',
      image: '/assets/images/1000139636.jpg',
      label: 'ستايل من أعمال PRAND SALON',
      alt: 'قصة شعر من أعمال PRAND SALON',
    },
    {
      id: 'style-3',
      image: '/assets/images/96494d2e-d2b6-45f9-843c-1d6c66c528b8.jpg',
      label: 'ستايل من أعمال PRAND SALON',
      alt: 'قصة شعر من أعمال PRAND SALON',
    },
  ],
} as const;

export interface Branch {
  id: string;
  name: string;
  address: string;
  landmark: string;
  area: string;
}

export const branches: Branch[] = [
  {
    id: 'fayoum',
    name: 'فرع شارع فيوم',
    address: 'شارع فيوم',
    landmark: 'أمام محل طبارك للملابس',
    area: 'دار السلام، القاهرة',
  },
  {
    id: 'rayyan',
    name: 'فرع مول الريان',
    address: 'شارع أبو أشرف',
    landmark: 'مول الريان',
    area: 'دار السلام، القاهرة',
  },
];

export interface Barber {
  id: string;
  name: string;
  isDemo: boolean;
  specialty: string;
  bio: string;
  portrait: string;
  gallery: string[];
  rating?: number;
  reviewCount?: number;
}

export const barbers: Barber[] = [
  {
    id: 'demo-1',
    name: 'أحمد — مثال توضيحي',
    isDemo: true,
    specialty: 'فاد وقصات حديثة',
    bio: 'محتوى تجريبي — استبدل ببيانات الحلاق الحقيقي',
    portrait:
      'https://images.pexels.com/photos/20302333/pexels-photo-20302333.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    gallery: [
      'https://images.pexels.com/photos/4625626/pexels-photo-4625626.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/16098668/pexels-photo-16098668.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
  },
  {
    id: 'demo-2',
    name: 'محمود — مثال توضيحي',
    isDemo: true,
    specialty: 'قصات كلاسيك ولحية',
    bio: 'محتوى تجريبي — استبدل ببيانات الحلاق الحقيقي',
    portrait:
      'https://images.pexels.com/photos/2068672/pexels-photo-2068672.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    gallery: [
      'https://images.pexels.com/photos/27467943/pexels-photo-27467943.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/19664860/pexels-photo-19664860.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
  },
  {
    id: 'demo-3',
    name: 'كريم — مثال توضيحي',
    isDemo: true,
    specialty: 'ستايلات كيرلي',
    bio: 'محتوى تجريبي — استبدل ببيانات الحلاق الحقيقي',
    portrait:
      'https://images.pexels.com/photos/19664889/pexels-photo-19664889.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    gallery: [
      'https://images.pexels.com/photos/8775424/pexels-photo-8775424.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/33461079/pexels-photo-33461079.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
  },
];

export interface GalleryItem {
  id: string;
  category: 'fades' | 'curly' | 'classic' | 'styles';
  image: string;
  label: string;
  alt?: string;
}

export const galleryItems: GalleryItem[] = [
  ...assets.haircutStyles.map((style) => ({
    id: style.id,
    category: 'styles' as const,
    image: style.image,
    label: style.label,
    alt: style.alt,
  })),
  // Stock placeholders retained for the existing category layout.
  // Fades
  {
    id: 'g1',
    category: 'fades',
    image:
      'https://images.pexels.com/photos/3037244/pexels-photo-3037244.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    label: 'فاد عالي',
  },
  {
    id: 'g2',
    category: 'fades',
    image:
      'https://images.pexels.com/photos/18503633/pexels-photo-18503633.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    label: 'فاد متدرج',
  },
  {
    id: 'g3',
    category: 'fades',
    image:
      'https://images.pexels.com/photos/33448216/pexels-photo-33448216.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    label: 'فاد دقيق',
  },
  {
    id: 'g4',
    category: 'fades',
    image:
      'https://images.pexels.com/photos/4663136/pexels-photo-4663136.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    label: 'فاد جانبي',
  },
  // Curly
  {
    id: 'g5',
    category: 'curly',
    image:
      'https://images.pexels.com/photos/8775424/pexels-photo-8775424.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    label: 'كيرلي طبيعي',
  },
  {
    id: 'g6',
    category: 'curly',
    image:
      'https://images.pexels.com/photos/16098668/pexels-photo-16098668.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    label: 'كيرلي ستايل',
  },
  {
    id: 'g7',
    category: 'curly',
    image:
      'https://images.pexels.com/photos/27467943/pexels-photo-27467943.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    label: 'كيرلي عصري',
  },
  {
    id: 'g8',
    category: 'curly',
    image:
      'https://images.pexels.com/photos/4625626/pexels-photo-4625626.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    label: 'كيرلي منسق',
  },
  // Classic
  {
    id: 'g9',
    category: 'classic',
    image:
      'https://images.pexels.com/photos/1453005/pexels-photo-1453005.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    label: 'كلاسيك أنيق',
  },
  {
    id: 'g10',
    category: 'classic',
    image:
      'https://images.pexels.com/photos/7518695/pexels-photo-7518695.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    label: 'كلاسيك جانبي',
  },
  {
    id: 'g11',
    category: 'classic',
    image:
      'https://images.pexels.com/photos/11262382/pexels-photo-11262382.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    label: 'كلاسيك دقيق',
  },
  {
    id: 'g12',
    category: 'classic',
    image:
      'https://images.pexels.com/photos/3998414/pexels-photo-3998414.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    label: 'كلاسيك بالحية',
  },
];

export interface Service {
  id: string;
  name: string;
  description: string;
  icon: string;
  priceNote: string;
}

export const services: Service[] = [
  {
    id: 's1',
    name: 'قص شعر',
    description: 'قصات عصرية وكلاسيكية تناسب ستايلك',
    icon: 'scissors',
    priceNote: 'السعر عند الفرع',
  },
  {
    id: 's2',
    name: 'فاد وتدرج',
    description: 'فادات دقيقة بأدوات احترافية',
    icon: 'layers',
    priceNote: 'السعر عند الفرع',
  },
  {
    id: 's3',
    name: 'تهذيب لحية',
    description: 'تشكيل وتهذيب اللحية باحترافية',
    icon: 'sparkles',
    priceNote: 'السعر عند الفرع',
  },
  {
    id: 's4',
    name: 'حلاقة بموس',
    description: 'حلاقة تقليدية بالمنشفة والموس',
    icon: 'razor',
    priceNote: 'السعر عند الفرع',
  },
  {
    id: 's5',
    name: 'غسيل وتصفيف',
    description: 'غسيل عميق وتصفيف نهائي للستايل',
    icon: 'droplet',
    priceNote: 'السعر عند الفرع',
  },
  {
    id: 's6',
    name: 'باقات كاملة',
    description: 'باقات متكاملة للعناية الكاملة',
    icon: 'crown',
    priceNote: 'السعر عند الفرع',
  },
];

export interface GalleryCategory {
  id: 'fades' | 'curly' | 'classic' | 'styles';  label: string;
}

export const galleryCategories: GalleryCategory[] = [
  { id: 'styles', label: 'ستايلات PRAND' },
  { id: 'fades', label: 'فاد' },
  { id: 'curly', label: 'كيرلي' },
  { id: 'classic', label: 'كلاسيك' },
];

export const heroImages = [
  'https://images.pexels.com/photos/3037244/pexels-photo-3037244.jpeg?auto=compress&cs=tinysrgb&h=1200&w=1800',
  'https://images.pexels.com/photos/18503633/pexels-photo-18503633.jpeg?auto=compress&cs=tinysrgb&h=1200&w=1800',
  'https://images.pexels.com/photos/1453005/pexels-photo-1453005.jpeg?auto=compress&cs=tinysrgb&h=1200&w=1800',
];
