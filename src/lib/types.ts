export interface Property {
  _id: string;
  title: string;
  price: number;
  address: string;
  bedrooms: number;
  bathrooms: number;
  area: number; // in sqft
  mainImage: string;
  gallery: string[];
  isFeatured: boolean;
  propertyType: string;
  description: string;
  amenities: string[];
  agentId: string;
  data_ai_hint?: string;
}

export type IProperty = {
  _id: string;
  address: string;
  isFeatured: boolean;
  agent: {
    _id: string;
    name: string;
    profilePhoto: null | {
      asset: {
        url: string;
      };
    };
    title: string;
  };
  area: number;
  bathrooms: number;
  bedrooms: number;
  mainImage: {
    asset: {
      url: string;
    };
  };
  price: number;
  propertyType: {
    title: string;
  };
  title: string;
};

export type ISingleProperty = {
  _id: string;
  title: string;
  price: number;
  address: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  description: string;
  isFeatured: boolean;
  amenities: string[];

  propertyType: {
    _id: string;
    title: string;
  };

  agent: {
    _id: string;
    name: string;
    title: string;
    email: string;
    phoneNumber: string;
    numberOfProperties: number;
    profilePhoto: {
      asset: {
        _id: string;
        url: string;
        metadata: {
          lqip?: string;
          dimensions: {
            width: number;
            height: number;
          };
        };
      };
    } | null;
  } | null;

  mainImage: {
    asset: {
      _id: string;
      url: string;
      metadata: {
        lqip?: string;
        dimensions: {
          width: number;
          height: number;
        };
      };
    };
    alt?: string;
  };

  gallery?: {
    asset: {
      _id: string;
      url: string;
      metadata: {
        lqip?: string;
        dimensions: {
          width: number;
          height: number;
        };
      };
    };
    alt?: string;
  }[];
};

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

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: 'User' | 'Admin';
  lastLogin: string;
  status: 'Active' | 'Suspended' | 'Banned';
}
