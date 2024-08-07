import { Product } from 'src/products/product.interface';

export interface OrderItem extends Product {
  quantity: number;
}

export interface Customer {
  name: string;
  email: string;
  phone?: string;
}
export interface CreateOrderDto {
  customer: Customer;
  items: OrderItem[];
}
