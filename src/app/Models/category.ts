export interface ICategory {
  _id: string; 
  name: string;
  description: string;
  products: {
    product_id: string; 
  }[];
}