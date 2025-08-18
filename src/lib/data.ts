import type { Property, Agent, Testimonial } from './types';

const agents: Agent[] = [
  {
    id: '1',
    name: 'Alice Johnson',
    title: 'Senior Real Estate Agent',
    phone: '123-456-7890',
    email: 'alice.j@realestate.com',
    image: 'https://placehold.co/400x400.png',
    propertiesCount: 5,
    data_ai_hint: "professional woman"
  },
  {
    id: '2',
    name: 'Bob Williams',
    title: 'Commercial Property Specialist',
    phone: '123-456-7891',
    email: 'bob.w@realestate.com',
    image: 'https://placehold.co/400x400.png',
    propertiesCount: 3,
    data_ai_hint: "professional man"
  },
   {
    id: '3',
    name: 'Charlie Brown',
    title: 'Luxury Home Consultant',
    phone: '123-456-7892',
    email: 'charlie.b@realestate.com',
    image: 'https://placehold.co/400x400.png',
    propertiesCount: 4,
    data_ai_hint: "friendly man"
  },
];

const properties: Property[] = [
  {
    id: '1',
    title: 'Modern Downtown Loft',
    price: 1200000,
    address: '123 Main St, Anytown, USA',
    bedrooms: 2,
    bathrooms: 2,
    area: 1500,
    image: 'https://placehold.co/600x400.png',
    images: ['https://placehold.co/1200x800.png', 'https://placehold.co/1200x800.png', 'https://placehold.co/1200x800.png'],
    featured: true,
    type: 'Apartment',
    description: 'A beautiful and spacious loft in the heart of the city. Features high ceilings, large windows, and a modern kitchen. Perfect for urban living.',
    amenities: ['Gym', 'Pool', 'Rooftop Deck', '24/7 Security'],
    agentId: '1',
    data_ai_hint: "modern apartment interior"
  },
  {
    id: '2',
    title: 'Suburban Family Home',
    price: 750000,
    address: '456 Oak Ave, Suburbia, USA',
    bedrooms: 4,
    bathrooms: 3,
    area: 2500,
    image: 'https://placehold.co/600x400.png',
    images: ['https://placehold.co/1200x800.png', 'https://placehold.co/1200x800.png', 'https://placehold.co/1200x800.png'],
    featured: true,
    type: 'House',
    description: 'A charming family home in a quiet suburban neighborhood. Features a large backyard, a two-car garage, and a newly renovated kitchen.',
    amenities: ['Backyard', 'Garage', 'Fireplace', 'Modern Kitchen'],
    agentId: '2',
    data_ai_hint: "suburban house exterior"
  },
  {
    id: '3',
    title: 'Luxury Beachfront Villa',
    price: 3500000,
    address: '789 Ocean Blvd, Beachtown, USA',
    bedrooms: 5,
    bathrooms: 6,
    area: 5000,
    image: 'https://placehold.co/600x400.png',
    images: ['https://placehold.co/1200x800.png', 'https://placehold.co/1200x800.png', 'https://placehold.co/1200x800.png'],
    featured: true,
    type: 'Villa',
    description: 'An exquisite beachfront villa with breathtaking ocean views. Features a private pool, direct beach access, and a home theater.',
    amenities: ['Private Pool', 'Beach Access', 'Home Theater', 'Gourmet Kitchen', 'Ocean View'],
    agentId: '3',
    data_ai_hint: "luxury villa beach"
  },
  {
    id: '4',
    title: 'Cozy Condo with City View',
    price: 550000,
    address: '101 Pine St, Anytown, USA',
    bedrooms: 1,
    bathrooms: 1,
    area: 800,
    image: 'https://placehold.co/600x400.png',
    images: ['https://placehold.co/1200x800.png', 'https://placehold.co/1200x800.png', 'https://placehold.co/1200x800.png'],
    featured: false,
    type: 'Condo',
    description: 'A cozy and modern condo with a stunning view of the city skyline. Perfect for a young professional or couple. Building includes a gym and pool.',
    amenities: ['Gym', 'Pool', 'Concierge', 'City View'],
    agentId: '1',
    data_ai_hint: "modern condo interior"
  },
  {
    id: '5',
    title: 'Spacious House with Garden',
    price: 850000,
    address: '222 Maple Dr, Suburbia, USA',
    bedrooms: 3,
    bathrooms: 2,
    area: 2200,
    image: 'https://placehold.co/600x400.png',
    images: ['https://placehold.co/1200x800.png', 'https://placehold.co/1200x800.png', 'https://placehold.co/1200x800.png'],
    featured: false,
    type: 'House',
    description: 'A spacious house with a beautiful garden and outdoor patio. Ideal for families who love the outdoors. Includes a large living room and a formal dining area.',
    amenities: ['Garden', 'Patio', 'Garage', 'Hardwood Floors'],
    agentId: '2',
    data_ai_hint: "house garden"
  },
  {
    id: '6',
    title: 'Penthouse with Rooftop Terrace',
    price: 2500000,
    address: '333 Sky High Rd, Anytown, USA',
    bedrooms: 3,
    bathrooms: 4,
    area: 3000,
    image: 'https://placehold.co/600x400.png',
    images: ['https://placehold.co/1200x800.png', 'https://placehold.co/1200x800.png', 'https://placehold.co/1200x800.png'],
    featured: true,
    type: 'Apartment',
    description: 'A stunning penthouse apartment with a private rooftop terrace offering 360-degree city views. Luxury finishes throughout.',
    amenities: ['Rooftop Terrace', 'Private Elevator', 'Concierge', ' panoramic views'],
    agentId: '3',
    data_ai_hint: "luxury penthouse interior"
  },
];

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'John & Jane Doe',
    company: 'Happy Homeowners',
    comment: 'RealEstate Explorer helped us find our dream home in just a week! The process was seamless and the agents were incredibly professional. We couldn\'t be happier.',
    image: 'https://placehold.co/100x100.png',
    data_ai_hint: "happy couple"
  },
  {
    id: '2',
    name: 'Peter Jones',
    company: 'First-Time Buyer',
    comment: 'As a first-time buyer, I was nervous about the process. The team at RealEstate Explorer guided me every step of the way. Highly recommended!',
    image: 'https://placehold.co/100x100.png',
    data_ai_hint: "smiling man"
  },
  {
    id: '3',
    name: 'Mary Smith',
    company: 'Property Investor',
    comment: 'I\'ve worked with many real estate companies, but RealEstate Explorer stands out. Their market knowledge and dedication are top-notch. They helped me find a great investment property.',
    image: 'https://placehold.co/100x100.png',
    data_ai_hint: "business woman"
  },
];

export const getProperties = async (): Promise<Property[]> => {
  return properties;
};

export const getFeaturedProperties = async (): Promise<Property[]> => {
  return properties.filter(p => p.featured);
};

export const getPropertyById = async (id: string): Promise<Property | undefined> => {
  return properties.find(p => p.id === id);
};

export const getAgents = async (): Promise<Agent[]> => {
  return agents;
};

export const getAgentById = async (id: string): Promise<Agent | undefined> => {
  return agents.find(a => a.id === id);
};

export const getTestimonials = async (): Promise<Testimonial[]> => {
  return testimonials;
};
