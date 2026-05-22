// Data file containing all static content
// This separates data from component logic for better maintainability

export const SERVICES = [
  {
    id: 1,
    title: 'Residential Properties',
    desc: 'Premium apartments, villas and independent homes in prime Bangalore locations.'
  },
  {
    id: 2,
    title: 'Commercial Properties',
    desc: 'Office spaces, showrooms and commercial investments with high ROI potential.'
  },
  {
    id: 3,
    title: 'Industrial Properties',
    desc: 'Warehouses, factories and industrial sheds for scalable business operations.'
  },
  {
    id: 4,
    title: 'Land & Plots',
    desc: 'DTCP and BDA approved plots for residential and commercial developments.'
  },
  {
    id: 5,
    title: 'Property Consultation',
    desc: 'End-to-end expert guidance for buying, selling and investment decisions.'
  },
  {
    id: 6,
    title: 'Property Management',
    desc: 'Complete property maintenance and tenant management solutions.'
  },
  {
    id: 7,
    title: 'Legal & Financial Support',
    desc: 'Documentation verification, legal assistance and financial support services.'
  },
  {
    id: 8,
    title: 'Interior & Architecture Assistance',
    desc: 'Interior planning, architecture consultation and renovation guidance.'
  },
  {
    id: 9,
    title: 'Loan Support Assistance',
    desc: 'Home loan guidance, eligibility checks and documentation support.'
  }
];

export const PROPERTIES = [
  {
    id: 1,
    title: 'Luxury Villas',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1400&auto=format&fit=crop',
    type: 'Villa',
    price: '₹4.5 Cr',
    location: 'Hebbal, Bangalore',
    description: 'Premium property with modern amenities, strategic location and excellent investment opportunity.'
  },
  {
    id: 2,
    title: 'Commercial Spaces',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1400&auto=format&fit=crop',
    type: 'Commercial',
    price: '₹8 Cr',
    location: 'MG Road, Bangalore',
    description: 'Premium property with modern amenities, strategic location and excellent investment opportunity.'
  },
  {
    id: 3,
    title: 'Premium Apartments',
    image: 'https://images.unsplash.com/photo-1460317442991-0ec209397118?q=80&w=1400&auto=format&fit=crop',
    type: 'Apartment',
    price: '₹1.8 Cr',
    location: 'Yelahanka, Bangalore',
    description: 'Premium property with modern amenities, strategic location and excellent investment opportunity.'
  },
  {
    id: 4,
    title: 'Industrial Warehouse',
    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1400&auto=format&fit=crop',
    type: 'Industrial',
    price: '₹12 Cr',
    location: 'Peenya Industrial Area',
    description: 'Premium property with modern amenities, strategic location and excellent investment opportunity.'
  }
];

export const BLOGS = [
  {
    id: 1,
    title: 'Top Real Estate Investment Locations in Bangalore 2026',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1400&auto=format&fit=crop',
    category: 'Real Estate News'
  },
  {
    id: 2,
    title: 'How to Verify Property Documents Before Buying',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1400&auto=format&fit=crop',
    category: 'Real Estate News'
  },
  {
    id: 3,
    title: 'Luxury Villas vs Apartments: Which is Better?',
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1400&auto=format&fit=crop',
    category: 'Real Estate News'
  }
];

export const STATS = [
  { number: '500+', label: 'Happy Clients' },
  { number: '1000+', label: 'Properties Listed' },
  { number: '24/7', label: 'Client Support' },
  { number: '100%', label: 'Transparency' }
];

export const ABOUT_FEATURES = [
  {
    id: 1,
    title: 'Trusted Advisors',
    description: 'Honest and professional guidance for buyers, sellers and investors.'
  },
  {
    id: 2,
    title: 'Transparent Deals',
    description: 'Every transaction is handled with complete transparency and clarity.'
  },
  {
    id: 3,
    title: 'Legal Support',
    description: 'Verified documentation and complete legal guidance for safe transactions.'
  },
  {
    id: 4,
    title: 'After Sales Support',
    description: 'Dedicated customer assistance even after the property closure.'
  }
];

export const WHY_CHOOSE_US = [
  {
    id: 1,
    title: 'Verified Property Listings',
    description: 'Every property is screened and verified before listing.'
  },
  {
    id: 2,
    title: 'Professional Consultation',
    description: 'Expert advice tailored to your property goals.'
  },
  {
    id: 3,
    title: 'End-to-End Assistance',
    description: 'From property search to registration and beyond.'
  }
];

export const VIRTUAL_TOURS = [
  {
    id: 1,
    title: 'Luxury Villa Walkthrough',
    description: 'Interactive 360° virtual tour for premium villa properties.',
    image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=1400&auto=format&fit=crop',
    buttonText: 'Watch Tour'
  },
  {
    id: 2,
    title: 'Apartment Video Tour',
    description: 'Fully guided property walkthrough videos with detailed interior views.',
    image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1400&auto=format&fit=crop',
    buttonText: 'View Video'
  },
  {
    id: 3,
    title: 'Commercial Space Tour',
    description: 'Detailed walkthroughs for office spaces and commercial investments.',
    image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1400&auto=format&fit=crop',
    buttonText: 'Explore Now'
  }
];

export const PROPERTY_FILTERS = {
  propertyTypes: ['Apartment', 'Villa', 'Commercial', 'Industrial'],
  budgets: ['Below ₹50L', '₹50L - ₹1Cr', '₹1Cr - ₹5Cr', 'Above ₹5Cr'],
  locations: ['Hebbal', 'Yelahanka', 'Whitefield', 'MG Road']
};

export default {
  SERVICES,
  PROPERTIES,
  BLOGS,
  STATS,
  ABOUT_FEATURES,
  WHY_CHOOSE_US,
  VIRTUAL_TOURS,
  PROPERTY_FILTERS
};
