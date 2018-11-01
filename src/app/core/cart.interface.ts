export interface ICart {
  cart: ICartItems[];
  total: number;
}
export interface ICartItems {
  id: number;
  name: string;
  price: number;
  quantity: number;
}
