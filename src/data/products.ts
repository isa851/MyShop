import { Product, Category } from '../types';

export const categories: Category[] = [
  {
    id: '1',
    name: 'Smartphones',
    slug: 'smartphones',
    icon: 'Smartphone',
    subcategories: [
      { id: '1-1', name: 'iPhone', slug: 'iphone' },
      { id: '1-2', name: 'Samsung Galaxy', slug: 'samsung-galaxy' },
      { id: '1-3', name: 'Google Pixel', slug: 'google-pixel' },
      { id: '1-4', name: 'OnePlus', slug: 'oneplus' },
      { id: '1-5', name: 'Xiaomi', slug: 'xiaomi' }
    ]
  },
  {
    id: '2',
    name: 'Laptops',
    slug: 'laptops',
    icon: 'Laptop',
    subcategories: [
      { id: '2-1', name: 'MacBook', slug: 'macbook' },
      { id: '2-2', name: 'Gaming Laptops', slug: 'gaming-laptops' },
      { id: '2-3', name: 'Ultrabooks', slug: 'ultrabooks' },
      { id: '2-4', name: 'Business Laptops', slug: 'business-laptops' },
      { id: '2-5', name: 'Workstations', slug: 'workstations' }
    ]
  },
  {
    id: '3',
    name: 'Tablets',
    slug: 'tablets',
    icon: 'Tablet',
    subcategories: [
      { id: '3-1', name: 'iPad', slug: 'ipad' },
      { id: '3-2', name: 'Android Tablets', slug: 'android-tablets' },
      { id: '3-3', name: 'Windows Tablets', slug: 'windows-tablets' },
      { id: '3-4', name: 'E-Readers', slug: 'e-readers' }
    ]
  },
  {
    id: '4',
    name: 'Audio',
    slug: 'audio',
    icon: 'Headphones',
    subcategories: [
      { id: '4-1', name: 'Headphones', slug: 'headphones' },
      { id: '4-2', name: 'Earbuds', slug: 'earbuds' },
      { id: '4-3', name: 'Speakers', slug: 'speakers' },
      { id: '4-4', name: 'Sound Systems', slug: 'sound-systems' }
    ]
  },
  {
    id: '5',
    name: 'Gaming',
    slug: 'gaming',
    icon: 'Gamepad2',
    subcategories: [
      { id: '5-1', name: 'Consoles', slug: 'consoles' },
      { id: '5-2', name: 'Controllers', slug: 'controllers' },
      { id: '5-3', name: 'Gaming Accessories', slug: 'gaming-accessories' },
      { id: '5-4', name: 'VR Headsets', slug: 'vr-headsets' }
    ]
  },
  {
    id: '6',
    name: 'Accessories',
    slug: 'accessories',
    icon: 'Cable',
    subcategories: [
      { id: '6-1', name: 'Chargers', slug: 'chargers' },
      { id: '6-2', name: 'Cases', slug: 'cases' },
      { id: '6-3', name: 'Cables', slug: 'cables' },
      { id: '6-4', name: 'Power Banks', slug: 'power-banks' }
    ]
  }
];

export const products: Product[] = [
  // Smartphones
  {
    id: '1',
    name: 'iPhone 15 Pro Max',
    brand: 'Apple',
    price: 1199,
    originalPrice: 1299,
    category: 'smartphones',
    subcategory: 'iphone',
    description: 'The most advanced iPhone ever with titanium design, A17 Pro chip, and revolutionary camera system.',
    features: [
      'Titanium design - lightweight and durable',
      'A17 Pro chip with 6-core GPU',
      '48MP Main camera with 5x Telephoto',
      'Action Button for instant access',
      'USB-C connectivity',
      'Up to 29 hours video playback'
    ],
    specifications: {
      'Display': '6.7-inch Super Retina XDR',
      'Chip': 'A17 Pro',
      'Storage': '256GB',
      'Camera': '48MP Main, 12MP Ultra Wide, 12MP Telephoto',
      'Battery': 'Up to 29 hours video',
      'Material': 'Titanium',
      'Colors': 'Natural, Blue, White, Black'
    },
    images: [
      'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg',
      'https://images.pexels.com/photos/1251832/pexels-photo-1251832.jpeg'
    ],
    inStock: true,
    rating: 4.8,
    reviewCount: 2847,
    isNew: true,
    isFeatured: true,
    discount: 8
  },
  {
    id: '2',
    name: 'Samsung Galaxy S24 Ultra',
    brand: 'Samsung',
    price: 1299,
    category: 'smartphones',
    subcategory: 'samsung-galaxy',
    description: 'Ultimate productivity powerhouse with built-in S Pen, advanced AI features, and pro-grade cameras.',
    features: [
      'Built-in S Pen for ultimate productivity',
      'Snapdragon 8 Gen 3 for Galaxy',
      '200MP main camera with Space Zoom',
      'Galaxy AI features',
      'Titanium frame construction',
      '5000mAh battery with fast charging'
    ],
    specifications: {
      'Display': '6.8-inch Dynamic AMOLED 2X',
      'Processor': 'Snapdragon 8 Gen 3',
      'Storage': '256GB',
      'Camera': '200MP Main, 50MP Telephoto, 10MP Telephoto, 12MP Ultra Wide',
      'Battery': '5000mAh',
      'S Pen': 'Built-in',
      'Colors': 'Titanium Gray, Titanium Black, Titanium Violet'
    },
    images: [
      'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg',
      'https://images.pexels.com/photos/4553618/pexels-photo-4553618.jpeg'
    ],
    inStock: true,
    rating: 4.7,
    reviewCount: 1923,
    isNew: true,
    isFeatured: true
  },
  {
    id: '3',
    name: 'Google Pixel 8 Pro',
    brand: 'Google',
    price: 999,
    category: 'smartphones',
    subcategory: 'google-pixel',
    description: 'AI-powered smartphone with advanced computational photography and pure Android experience.',
    features: [
      'Google Tensor G3 chip',
      'AI-powered camera features',
      '6.7-inch LTPO OLED display',
      'Magic Eraser and Best Take',
      '7 years of OS updates',
      'Temperature sensor'
    ],
    specifications: {
      'Chip': 'Google Tensor G3',
      'Display': '6.7-inch LTPO OLED',
      'Storage': '128GB',
      'Camera': '50MP Main, 48MP Ultra Wide, 48MP Telephoto',
      'Battery': '5050mAh',
      'OS': 'Android 14',
      'Colors': 'Obsidian, Porcelain, Bay'
    },
    images: [
      'https://images.pexels.com/photos/1440727/pexels-photo-1440727.jpeg',
      'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg'
    ],
    inStock: true,
    rating: 4.4,
    reviewCount: 1567
  },
  {
    id: '4',
    name: 'OnePlus 12',
    brand: 'OnePlus',
    price: 799,
    category: 'smartphones',
    subcategory: 'oneplus',
    description: 'Flagship performance with Snapdragon 8 Gen 3, ultra-fast charging, and premium design.',
    features: [
      'Snapdragon 8 Gen 3 processor',
      '100W SuperVOOC fast charging',
      'Hasselblad camera system',
      '6.82-inch 120Hz AMOLED display',
      'OxygenOS 14 based on Android 14',
      '5400mAh battery'
    ],
    specifications: {
      'Processor': 'Snapdragon 8 Gen 3',
      'Display': '6.82-inch AMOLED 120Hz',
      'Storage': '256GB',
      'Camera': '50MP Main, 64MP Telephoto, 114° Ultra Wide',
      'Battery': '5400mAh',
      'Charging': '100W SuperVOOC',
      'Colors': 'Silky Black, Flowy Emerald'
    },
    images: [
      'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg',
      'https://images.pexels.com/photos/4553618/pexels-photo-4553618.jpeg'
    ],
    inStock: true,
    rating: 4.5,
    reviewCount: 892
  },
  {
    id: '5',
    name: 'Xiaomi 14 Ultra',
    brand: 'Xiaomi',
    price: 1299,
    category: 'smartphones',
    subcategory: 'xiaomi',
    description: 'Photography flagship with Leica cameras, Snapdragon 8 Gen 3, and premium materials.',
    features: [
      'Leica Summilux lens system',
      'Snapdragon 8 Gen 3 processor',
      '6.73-inch LTPO AMOLED display',
      '90W HyperCharge technology',
      'IP68 water resistance',
      'Xiaomi HyperOS'
    ],
    specifications: {
      'Processor': 'Snapdragon 8 Gen 3',
      'Display': '6.73-inch LTPO AMOLED',
      'Storage': '512GB',
      'Camera': '50MP Main Leica, 50MP Ultra Wide, 50MP Telephoto',
      'Battery': '5300mAh',
      'Charging': '90W Wired, 80W Wireless',
      'Colors': 'Black, White'
    },
    images: [
      'https://images.pexels.com/photos/1440727/pexels-photo-1440727.jpeg',
      'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg'
    ],
    inStock: true,
    rating: 4.6,
    reviewCount: 743,
    isNew: true
  },

  // Laptops
  {
    id: '6',
    name: 'MacBook Pro 16-inch M3 Max',
    brand: 'Apple',
    price: 3499,
    category: 'laptops',
    subcategory: 'macbook',
    description: 'The most powerful MacBook Pro ever with M3 Max chip, perfect for demanding workflows.',
    features: [
      'M3 Max chip with 16-core CPU',
      '40-core GPU for extreme performance',
      '128GB unified memory',
      '16.2-inch Liquid Retina XDR display',
      '22-hour battery life',
      'Advanced thermal design'
    ],
    specifications: {
      'Chip': 'Apple M3 Max',
      'Display': '16.2-inch Liquid Retina XDR',
      'Memory': '128GB unified memory',
      'Storage': '1TB SSD',
      'Battery': 'Up to 22 hours',
      'Ports': '3x Thunderbolt 4, HDMI, SDXC, MagSafe 3',
      'Colors': 'Space Black, Silver'
    },
    images: [
      'https://images.pexels.com/photos/812264/pexels-photo-812264.jpeg',
      'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg'
    ],
    inStock: true,
    rating: 4.9,
    reviewCount: 847,
    isNew: true,
    isFeatured: true
  },
  {
    id: '7',
    name: 'ASUS ROG Strix G16',
    brand: 'ASUS',
    price: 1699,
    category: 'laptops',
    subcategory: 'gaming-laptops',
    description: 'High-performance gaming laptop with RTX 4070 and Intel Core i7 for ultimate gaming experience.',
    features: [
      'Intel Core i7-13650HX processor',
      'NVIDIA GeForce RTX 4070',
      '16GB DDR5 RAM',
      '16-inch 165Hz display',
      'Advanced cooling system',
      'RGB keyboard with Aura Sync'
    ],
    specifications: {
      'Processor': 'Intel Core i7-13650HX',
      'Graphics': 'NVIDIA GeForce RTX 4070',
      'Memory': '16GB DDR5',
      'Storage': '1TB PCIe SSD',
      'Display': '16-inch FHD 165Hz',
      'Keyboard': 'RGB backlit',
      'OS': 'Windows 11 Home'
    },
    images: [
      'https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg',
      'https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg'
    ],
    inStock: true,
    rating: 4.5,
    reviewCount: 892
  },
  {
    id: '8',
    name: 'Dell XPS 13 Plus',
    brand: 'Dell',
    price: 1299,
    category: 'laptops',
    subcategory: 'ultrabooks',
    description: 'Premium ultrabook with stunning design, Intel 13th gen processors, and exceptional build quality.',
    features: [
      'Intel Core i7-1360P processor',
      '13.4-inch OLED InfinityEdge display',
      '16GB LPDDR5 memory',
      'Capacitive function row',
      'Premium aluminum construction',
      'Windows 11 Pro'
    ],
    specifications: {
      'Processor': 'Intel Core i7-1360P',
      'Display': '13.4-inch OLED 3.5K',
      'Memory': '16GB LPDDR5',
      'Storage': '512GB PCIe SSD',
      'Graphics': 'Intel Iris Xe',
      'Weight': '2.73 lbs',
      'Colors': 'Platinum, Graphite'
    },
    images: [
      'https://images.pexels.com/photos/812264/pexels-photo-812264.jpeg',
      'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg'
    ],
    inStock: true,
    rating: 4.4,
    reviewCount: 1234
  },
  {
    id: '9',
    name: 'ThinkPad X1 Carbon Gen 11',
    brand: 'Lenovo',
    price: 1899,
    category: 'laptops',
    subcategory: 'business-laptops',
    description: 'Ultimate business laptop with military-grade durability, security features, and all-day battery.',
    features: [
      'Intel Core i7-1365U vPro processor',
      '14-inch WUXGA IPS display',
      'Military-grade durability (MIL-STD-810H)',
      'Fingerprint reader and IR camera',
      'Up to 28.7 hours battery life',
      'Carbon fiber construction'
    ],
    specifications: {
      'Processor': 'Intel Core i7-1365U vPro',
      'Display': '14-inch WUXGA IPS',
      'Memory': '32GB LPDDR5',
      'Storage': '1TB PCIe SSD',
      'Security': 'TPM 2.0, Fingerprint, IR Camera',
      'Weight': '2.48 lbs',
      'Colors': 'Black'
    },
    images: [
      'https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg',
      'https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg'
    ],
    inStock: true,
    rating: 4.6,
    reviewCount: 567
  },
  {
    id: '10',
    name: 'HP ZBook Studio G10',
    brand: 'HP',
    price: 2799,
    category: 'laptops',
    subcategory: 'workstations',
    description: 'Professional mobile workstation with RTX graphics, ISV certification, and enterprise security.',
    features: [
      'Intel Core i9-13900H processor',
      'NVIDIA RTX 4000 Ada Generation',
      '32GB DDR5 memory',
      '16-inch DreamColor display',
      'ISV certified applications',
      'HP Wolf Security'
    ],
    specifications: {
      'Processor': 'Intel Core i9-13900H',
      'Graphics': 'NVIDIA RTX 4000 Ada',
      'Memory': '32GB DDR5',
      'Storage': '1TB PCIe SSD',
      'Display': '16-inch DreamColor 4K',
      'Certification': 'ISV Certified',
      'Colors': 'Turbo Silver'
    },
    images: [
      'https://images.pexels.com/photos/812264/pexels-photo-812264.jpeg',
      'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg'
    ],
    inStock: true,
    rating: 4.7,
    reviewCount: 234
  },

  // Tablets
  {
    id: '11',
    name: 'iPad Pro 12.9-inch M4',
    brand: 'Apple',
    price: 1299,
    category: 'tablets',
    subcategory: 'ipad',
    description: 'Incredibly thin and light iPad Pro with M4 chip and breakthrough Ultra Retina XDR display.',
    features: [
      'M4 chip with next-level performance',
      'Ultra Retina XDR display with nano-texture',
      'Incredibly thin 5.1mm design',
      'Apple Pencil Pro compatibility',
      'Thunderbolt connectivity',
      'All-day battery life'
    ],
    specifications: {
      'Chip': 'Apple M4',
      'Display': '12.9-inch Ultra Retina XDR',
      'Storage': '256GB',
      'Thickness': '5.1mm',
      'Weight': '682g',
      'Camera': '12MP Wide, 10MP Ultra Wide',
      'Colors': 'Silver, Space Black'
    },
    images: [
      'https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg',
      'https://images.pexels.com/photos/1334598/pexels-photo-1334598.jpeg'
    ],
    inStock: true,
    rating: 4.8,
    reviewCount: 1234,
    isNew: true,
    isFeatured: true
  },
  {
    id: '12',
    name: 'Samsung Galaxy Tab S9 Ultra',
    brand: 'Samsung',
    price: 1199,
    category: 'tablets',
    subcategory: 'android-tablets',
    description: 'Largest Galaxy Tab with S Pen included, perfect for productivity and creative work.',
    features: [
      'Snapdragon 8 Gen 2 for Galaxy',
      '14.6-inch Dynamic AMOLED 2X display',
      'S Pen included in the box',
      'IP68 water resistance',
      'DeX mode for desktop experience',
      '11200mAh battery'
    ],
    specifications: {
      'Processor': 'Snapdragon 8 Gen 2',
      'Display': '14.6-inch Dynamic AMOLED 2X',
      'Storage': '256GB',
      'Memory': '12GB RAM',
      'S Pen': 'Included',
      'Battery': '11200mAh',
      'Colors': 'Graphite, Beige'
    },
    images: [
      'https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg',
      'https://images.pexels.com/photos/1334598/pexels-photo-1334598.jpeg'
    ],
    inStock: true,
    rating: 4.5,
    reviewCount: 678
  },
  {
    id: '13',
    name: 'Microsoft Surface Pro 10',
    brand: 'Microsoft',
    price: 1099,
    category: 'tablets',
    subcategory: 'windows-tablets',
    description: '2-in-1 laptop and tablet with Intel Core processors and all-day battery life.',
    features: [
      'Intel Core i7-1355U processor',
      '13-inch PixelSense Flow display',
      'Detachable keyboard (sold separately)',
      'Surface Pen support',
      'Windows 11 Pro',
      'Up to 19 hours battery life'
    ],
    specifications: {
      'Processor': 'Intel Core i7-1355U',
      'Display': '13-inch PixelSense Flow',
      'Storage': '256GB SSD',
      'Memory': '16GB LPDDR5',
      'Connectivity': 'Wi-Fi 6E, Bluetooth 5.3',
      'Weight': '1.97 lbs',
      'Colors': 'Platinum, Graphite'
    },
    images: [
      'https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg',
      'https://images.pexels.com/photos/1334598/pexels-photo-1334598.jpeg'
    ],
    inStock: true,
    rating: 4.3,
    reviewCount: 456
  },
  {
    id: '14',
    name: 'Amazon Kindle Oasis',
    brand: 'Amazon',
    price: 249,
    category: 'tablets',
    subcategory: 'e-readers',
    description: 'Premium e-reader with 7-inch display, adjustable warm light, and waterproof design.',
    features: [
      '7-inch glare-free display',
      'Adjustable warm light',
      'Waterproof design (IPX8)',
      'Page turn buttons',
      'Weeks of battery life',
      'Access to millions of books'
    ],
    specifications: {
      'Display': '7-inch E Ink Carta 1200',
      'Storage': '32GB',
      'Connectivity': 'Wi-Fi + Cellular',
      'Battery': 'Up to 6 weeks',
      'Water Resistance': 'IPX8',
      'Weight': '6.8 oz',
      'Colors': 'Graphite, Champagne Gold'
    },
    images: [
      'https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg',
      'https://images.pexels.com/photos/1334598/pexels-photo-1334598.jpeg'
    ],
    inStock: true,
    rating: 4.4,
    reviewCount: 2341
  },

  // Audio
  {
    id: '15',
    name: 'Sony WH-1000XM5',
    brand: 'Sony',
    price: 399,
    originalPrice: 449,
    category: 'audio',
    subcategory: 'headphones',
    description: 'Industry-leading noise canceling headphones with exceptional sound quality and comfort.',
    features: [
      'Industry-leading noise canceling',
      '30-hour battery life',
      'Multipoint Bluetooth connection',
      'Quick Attention mode',
      'Speak-to-chat technology',
      'Premium comfort and sound'
    ],
    specifications: {
      'Driver': '30mm',
      'Frequency Response': '4 Hz-40,000 Hz',
      'Battery Life': '30 hours',
      'Charging': 'USB-C, 3 min for 3 hours',
      'Weight': '250g',
      'Connectivity': 'Bluetooth 5.2, NFC',
      'Colors': 'Black, Silver'
    },
    images: [
      'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg',
      'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg'
    ],
    inStock: true,
    rating: 4.6,
    reviewCount: 3421,
    discount: 11
  },
  {
    id: '16',
    name: 'AirPods Pro (3rd generation)',
    brand: 'Apple',
    price: 249,
    category: 'audio',
    subcategory: 'earbuds',
    description: 'Next-generation AirPods Pro with USB-C, adaptive audio, and enhanced noise cancellation.',
    features: [
      'Adaptive Audio technology',
      'Enhanced Active Noise Cancellation',
      'Transparency mode',
      'USB-C charging case',
      'Personalized Spatial Audio',
      'Up to 6 hours listening time'
    ],
    specifications: {
      'Chip': 'H2',
      'Battery': '6 hours (AirPods), 30 hours (case)',
      'Charging': 'USB-C, Wireless, MagSafe',
      'Water Resistance': 'IPX4',
      'Audio': 'Spatial Audio with head tracking',
      'Controls': 'Touch control',
      'Colors': 'White'
    },
    images: [
      'https://images.pexels.com/photos/8543885/pexels-photo-8543885.jpeg',
      'https://images.pexels.com/photos/4495705/pexels-photo-4495705.jpeg'
    ],
    inStock: true,
    rating: 4.7,
    reviewCount: 4521,
    isFeatured: true
  },
  {
    id: '17',
    name: 'Bose QuietComfort Ultra',
    brand: 'Bose',
    price: 429,
    category: 'audio',
    subcategory: 'headphones',
    description: 'Premium noise canceling headphones with spatial audio and luxurious comfort.',
    features: [
      'World-class noise cancellation',
      'Immersive spatial audio',
      '24-hour battery life',
      'CustomTune technology',
      'Premium materials',
      'Bose Music app integration'
    ],
    specifications: {
      'Driver': 'TriPort acoustic architecture',
      'Battery Life': '24 hours',
      'Charging': 'USB-C, 15 min for 2.5 hours',
      'Weight': '254g',
      'Connectivity': 'Bluetooth 5.3',
      'Microphone': '6-mic array',
      'Colors': 'Black, White Smoke, Sandstone'
    },
    images: [
      'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg',
      'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg'
    ],
    inStock: true,
    rating: 4.5,
    reviewCount: 1876
  },
  {
    id: '18',
    name: 'Sonos Era 300',
    brand: 'Sonos',
    price: 449,
    category: 'audio',
    subcategory: 'speakers',
    description: 'Revolutionary spatial audio speaker with Dolby Atmos and room-filling sound.',
    features: [
      'Dolby Atmos spatial audio',
      '6 strategically placed drivers',
      'Trueplay tuning technology',
      'Voice control with Alexa',
      'AirPlay 2 and Bluetooth',
      'Sustainable design'
    ],
    specifications: {
      'Drivers': '6 drivers (4 woofers, 2 tweeters)',
      'Connectivity': 'Wi-Fi, Bluetooth, AirPlay 2',
      'Voice Control': 'Amazon Alexa built-in',
      'Dimensions': '7.2 x 6.4 x 6.4 inches',
      'Weight': '4.73 lbs',
      'Power': 'AC power',
      'Colors': 'Black, White'
    },
    images: [
      'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg',
      'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg'
    ],
    inStock: true,
    rating: 4.6,
    reviewCount: 892
  },

  // Gaming
  {
    id: '19',
    name: 'PlayStation 5',
    brand: 'Sony',
    price: 499,
    category: 'gaming',
    subcategory: 'consoles',
    description: 'Next-generation gaming console with ultra-high speed SSD and ray tracing.',
    features: [
      'Custom AMD Zen 2 CPU',
      'Custom RDNA 2 GPU',
      'Ultra-high speed SSD',
      'Ray tracing support',
      'DualSense wireless controller',
      '4K gaming up to 120fps'
    ],
    specifications: {
      'CPU': 'AMD Zen 2, 8 cores, 3.5GHz',
      'GPU': 'Custom RDNA 2, 10.28 TFLOPs',
      'Memory': '16GB GDDR6',
      'Storage': '825GB SSD',
      'Optical Drive': '4K UHD Blu-ray',
      'Output': '4K at 120Hz, 8K',
      'Dimensions': '15.4 x 10.2 x 4.1 inches'
    },
    images: [
      'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg',
      'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg'
    ],
    inStock: true,
    rating: 4.7,
    reviewCount: 5432,
    isFeatured: true
  },
  {
    id: '20',
    name: 'Xbox Series X',
    brand: 'Microsoft',
    price: 499,
    category: 'gaming',
    subcategory: 'consoles',
    description: 'Most powerful Xbox ever with 12 teraflops of processing power and Quick Resume.',
    features: [
      'Custom AMD Zen 2 CPU',
      '12 teraflops GPU performance',
      '1TB NVMe SSD',
      'Quick Resume feature',
      'Smart Delivery technology',
      'Backward compatibility'
    ],
    specifications: {
      'CPU': 'AMD Zen 2, 8 cores, 3.8GHz',
      'GPU': 'Custom RDNA 2, 12 TFLOPs',
      'Memory': '16GB GDDR6',
      'Storage': '1TB NVMe SSD',
      'Optical Drive': '4K UHD Blu-ray',
      'Output': '4K at 120Hz, 8K',
      'Dimensions': '11.85 x 5.94 x 5.94 inches'
    },
    images: [
      'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg',
      'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg'
    ],
    inStock: true,
    rating: 4.6,
    reviewCount: 4321
  },
  {
    id: '21',
    name: 'Meta Quest 3',
    brand: 'Meta',
    price: 499,
    category: 'gaming',
    subcategory: 'vr-headsets',
    description: 'Mixed reality headset with breakthrough Meta Reality technology and enhanced performance.',
    features: [
      'Mixed reality capabilities',
      'Snapdragon XR2 Gen 2 processor',
      '4K+ Infinite Display',
      'Touch Plus controllers',
      'Hand tracking',
      'Wireless freedom'
    ],
    specifications: {
      'Processor': 'Snapdragon XR2 Gen 2',
      'Display': '4K+ Infinite Display (2064x2208 per eye)',
      'Storage': '128GB',
      'Tracking': '6DOF inside-out tracking',
      'Audio': 'Integrated spatial audio',
      'Battery': '2-3 hours gameplay',
      'Weight': '515g'
    },
    images: [
      'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg',
      'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg'
    ],
    inStock: true,
    rating: 4.4,
    reviewCount: 1876,
    isNew: true
  },

  // Accessories
  {
    id: '22',
    name: 'Anker PowerCore 10000',
    brand: 'Anker',
    price: 29,
    category: 'accessories',
    subcategory: 'power-banks',
    description: 'Ultra-compact portable charger with PowerIQ technology and premium build quality.',
    features: [
      '10000mAh capacity',
      'PowerIQ charging technology',
      'Ultra-compact design',
      'MultiProtect safety system',
      'LED power indicator',
      'Travel-friendly size'
    ],
    specifications: {
      'Capacity': '10000mAh / 37Wh',
      'Input': 'USB-C 5V/3A',
      'Output': 'USB-A 5V/2.4A, USB-C 5V/3A',
      'Size': '3.62 x 2.36 x 0.87 inches',
      'Weight': '6.35 oz',
      'Charging Time': '4.5 hours',
      'Colors': 'Black, White, Blue'
    },
    images: [
      'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg',
      'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg'
    ],
    inStock: true,
    rating: 4.5,
    reviewCount: 8765
  },
  {
    id: '23',
    name: 'Apple MagSafe Charger',
    brand: 'Apple',
    price: 39,
    category: 'accessories',
    subcategory: 'chargers',
    description: 'Wireless charger with perfectly aligned magnets for iPhone 12 and later.',
    features: [
      'Perfectly aligned magnets',
      'Up to 15W wireless charging',
      'Compatible with iPhone 12 and later',
      'Works with MagSafe cases',
      '1-meter USB-C cable included',
      'Qi wireless charging compatible'
    ],
    specifications: {
      'Power Output': 'Up to 15W',
      'Compatibility': 'iPhone 12 and later',
      'Cable Length': '1 meter USB-C',
      'Dimensions': '2.24 inches diameter',
      'Weight': '1.6 oz',
      'Connector': 'USB-C',
      'Colors': 'White'
    },
    images: [
      'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg',
      'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg'
    ],
    inStock: true,
    rating: 4.3,
    reviewCount: 2341
  },
  {
    id: '24',
    name: 'Peak Design Everyday Case',
    brand: 'Peak Design',
    price: 49,
    category: 'accessories',
    subcategory: 'cases',
    description: 'Premium phone case with magnetic mounting system and weather-resistant materials.',
    features: [
      'SlimLink magnetic mounting',
      'Weather-resistant materials',
      'Precise button and port access',
      'Wireless charging compatible',
      'Lifetime warranty',
      'Sustainable materials'
    ],
    specifications: {
      'Compatibility': 'iPhone 15 Pro Max',
      'Materials': 'Recycled polycarbonate, TPU',
      'Mounting': 'SlimLink magnetic system',
      'Protection': 'Drop tested to 2 meters',
      'Wireless Charging': 'Compatible',
      'Weight': '1.2 oz',
      'Colors': 'Charcoal, Sage, Midnight'
    },
    images: [
      'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg',
      'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg'
    ],
    inStock: true,
    rating: 4.6,
    reviewCount: 567
  }
];

export const featuredProducts = products.filter(p => p.isFeatured);
export const newProducts = products.filter(p => p.isNew);
export const discountedProducts = products.filter(p => p.discount && p.discount > 0);