// Program types
export interface Program {
  id: string;
  title: string;
  ageRange: string;
  description: string;
  features: string[];
  image: string;
}

// Testimonial types
export interface Testimonial {
  id: string;
  content: string;
  author: string;
  childInfo: string;
  initials: string;
}

// Contact form types
export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  childAge: string;
  program: string;
  message: string;
}

// Gallery image types
export interface GalleryImage {
  src: string;
  alt: string;
  category: string;
}

// FAQ types
export interface FAQItem {
  question: string;
  answer: string;
}



