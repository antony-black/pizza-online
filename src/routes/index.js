import { Cart } from '../pages/cart';
import FullPizza from '../pages/full-pizza';
import { Home } from '../pages/home';

export const routes = [
  { path: '', component: Home, exact: true },
  { path: 'cart', component: Cart, exact: true },
  { path: 'pizza/:id', component: FullPizza, exact: true },
  { path: '*', component: Home, exact: true },
];
