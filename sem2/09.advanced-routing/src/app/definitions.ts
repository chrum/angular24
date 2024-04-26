export interface Product {
  name: string;
  price: number;
}

export interface Category {
  id: number;
  name: string;
  products: Array<Product>;
}
