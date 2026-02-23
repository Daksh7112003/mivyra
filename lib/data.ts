export const categories = ['Necklaces', 'Earrings', 'Bracelets', 'Rings', 'Sets'];

export const products = [
  {
    _id: 'p1',
    name: 'Luna Pearl Drop Earrings',
    slug: 'luna-pearl-drop-earrings',
    price: 1499,
    originalPrice: 2199,
    category: 'Earrings',
    occasion: 'Party',
    stock: 24,
    images: [
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=1200',
      'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=1200'
    ],
    description: 'Elegant pearl drops crafted for evening glamour with lightweight comfort.',
    rating: 4.8,
    reviewsCount: 126,
    bestseller: true
  },
  {
    _id: 'p2',
    name: 'Celeste Layered Necklace',
    slug: 'celeste-layered-necklace',
    price: 1799,
    originalPrice: 2499,
    category: 'Necklaces',
    occasion: 'Casual',
    stock: 15,
    images: ['https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=1200'],
    description: 'Rose gold layered necklace to elevate everyday style.',
    rating: 4.7,
    reviewsCount: 86,
    bestseller: true
  },
  {
    _id: 'p3',
    name: 'Aurora Charm Bracelet',
    slug: 'aurora-charm-bracelet',
    price: 1299,
    originalPrice: 1899,
    category: 'Bracelets',
    occasion: 'Gift',
    stock: 35,
    images: ['https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1200'],
    description: 'Delicate charm bracelet with premium polish and adjustable clasp.',
    rating: 4.6,
    reviewsCount: 59,
    bestseller: false
  }
];

export const testimonials = [
  { name: 'Ananya S.', text: 'Mivyra pieces look luxe and feel incredibly light. Got compliments instantly!' },
  { name: 'Rhea M.', text: 'Packaging and quality are top-tier. Perfect gifting experience.' },
  { name: 'Priya K.', text: 'Elegant designs at a great price. My go-to jewellery brand now.' }
];
