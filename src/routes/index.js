import { Cart } from '../pages/cart';
import { Home } from '../pages/home';

export const routes = [
  { path: '/', component: Home, exact: true },
  { path: '/cart', component: Cart, exact: true },
  { path: '*', component: Home, exact: true },
];
