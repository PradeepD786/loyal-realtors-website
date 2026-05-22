// Contact Information - Centralized for easy maintenance
export const CONTACT_INFO = {
  whatsapp: '+91 9743304860',
  phone: '+91 7090121515',
  email: 'loyalrealtors14@gmail.com',
  alternateEmail: 'hariskoyyode@gmail.com',
  address: {
    line1: 'A403, Unique Concorde',
    line2: 'LKR Nagar Main Road',
    line3: 'Devinagar, Bangalore – 560094'
  },
  whatsappLink: 'https://wa.me/919743304860',
  social: {
    facebook: 'https://facebook.com/share/1DALLLch9m/',
    instagram: 'https://instagram.com/loyalrealtors_blr',
    whatsapp: 'https://wa.me/919743304860'
  },
  website: 'www.loyalrealtors.com'
};

// Theme Configuration
export const THEME = {
  colors: {
    primary: '#062d22',
    primaryDark: '#041c15',
    primaryLight: '#0a3f31',
    accent: '#fbbf24',
    accentHover: '#f59e0b',
    light: '#f7f7f5',
    white: '#ffffff',
    black: '#000000',
    gray: {
      300: '#d1d5db',
      500: '#6b7280',
      600: '#4b5563',
      700: '#374151'
    }
  },
  spacing: {
    container: 'max-w-7xl',
    py: 'py-24',
    px: 'px-6'
  },
  typography: {
    h1: 'text-5xl md:text-7xl font-black',
    h2: 'text-5xl font-black',
    h3: 'text-2xl font-bold',
    body: 'text-lg leading-8',
    sm: 'text-sm'
  },
  borderRadius: {
    lg: 'rounded-3xl',
    xl: 'rounded-[40px]',
    full: 'rounded-full'
  }
};

// Service Charges
export const SERVICE_CHARGES = {
  rental: {
    label: 'Rental Properties',
    amount: '1 Month Rent',
    description: 'Service charge applicable upon successful rental closure.'
  },
  sale: {
    label: 'Sale / Purchase Transactions',
    amount: '2%',
    description: 'Service charge on the final transaction value after successful completion.'
  }
};

// Validation Rules
export const VALIDATION_RULES = {
  name: {
    required: true,
    minLength: 3,
    pattern: /^[a-zA-Z\s]*$/,
    errorMsg: 'Please enter a valid name (min 3 characters)'
  },
  phone: {
    required: true,
    pattern: /^[0-9]{10}$/,
    errorMsg: 'Please enter a valid 10-digit phone number'
  },
  email: {
    required: true,
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    errorMsg: 'Please enter a valid email address'
  },
  message: {
    required: true,
    minLength: 10,
    errorMsg: 'Message must be at least 10 characters'
  }
};

// API Endpoints (if needed for backend integration)
export const API_ENDPOINTS = {
  submitInquiry: '/api/inquiries/submit',
  submitContactForm: '/api/contact/submit',
  getProperties: '/api/properties',
  getBlogs: '/api/blogs'
};

export default {
  CONTACT_INFO,
  THEME,
  SERVICE_CHARGES,
  VALIDATION_RULES,
  API_ENDPOINTS
};
