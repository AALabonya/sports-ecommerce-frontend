export interface Product {
  _id: string;
  name: string;
  price: number;
  description: string;
  quantity?: number;
  category: string;
  brand: string;
  image: string;
  rating?: number;
}

export interface ProductsResponse {
  data: Product[];
}
export interface FadeProps {
  children: React.ReactNode;
  left?: boolean;
  right?: boolean;
}
