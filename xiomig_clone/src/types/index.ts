export interface Department {
  id: number;
  image: string;
  title: string;
  slug: string;
  description: string;
  order: number;
}

export interface ApiError {
  message: string;
  status?: number;
}

export interface ServiceCategory {
  id: number;
  title: string;
  slug: string;
  description: string;
  order: number;
  items: {
    id: number;
    title: string;
    description: string;
    order: number;
    active: boolean;
  }[];
}
