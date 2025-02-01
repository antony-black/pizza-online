import { Status } from '../../enums/status';

export interface IPizza {
  id: number;
  title: string;
  sizes: number[];
  types: number[];
  price: number;
  count: number;
}

export interface IPizzaState {
  allPizza: IPizza[];
  status: Status;
}
