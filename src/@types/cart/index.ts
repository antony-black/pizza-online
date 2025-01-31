export interface ICartPizza {
  id: number;
  title: string;
  size: number;
  type: string;
  price: number;
  count: number;
};

export interface ICartState {
  allCartPizza: ICartPizza[];
  totalPrice: number;
};
