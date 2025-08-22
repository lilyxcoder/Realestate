export interface Property {
  id: string;
  title: string;
  price: number;
  address: string;
  bedrooms: number;
  bathrooms: number;
  area: number; // in sqft
  image: string;
  images: string[];
  featured: boolean;
  type: 'House' | 'Apartment' | 'Condo' | 'Villa';
  description: string;
  amenities: string[];
  agentId: string;
  data_ai_hint?: string;
}

export interface Agent {
  id: string;
  name: string;
  title: string;
  phone: string;
  email: string;
  image: string;
  propertiesCount: number;
  data_ai_hint?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  comment: string;
  image: string;
  data_ai_hint?: string;
}
