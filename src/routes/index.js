import React, { Suspense } from 'react';
import { Home } from '../pages/home';

const Cart = React.lazy(() => import(/* webpackChunkName: "Cart" */ '../pages/cart'));
const FullPizza = React.lazy(() => import(/* webpackChunkName: "FullPizza" */ '../pages/full-pizza'));

export const routes = [
  { path: '', component: Home},
  {
    path: 'cart',
    element: (
      <Suspense fallback={<div>...cart loading</div>}>
        <Cart />
      </Suspense>
    ),
  },
  {
    path: 'pizza/:id',
    element: (
      <Suspense fallback={<div>...loading</div>}>
        <FullPizza />
      </Suspense>
    ),
  },
  { path: '*', component: Home, exact: true },
];
