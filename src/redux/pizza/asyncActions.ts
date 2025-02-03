import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { IPizza } from '../pizza/types';

type TFetchPizza = Record<string, string>;
// <IPizza[], { url: string }>

export const fetchPizza = createAsyncThunk<IPizza[], TFetchPizza>(
  'pizza/fetchPizzaStatus',
  async ({ url }) => {
    const { data } = await axios.get<IPizza[]>(url);

    // return data as IPizza[];
    return data;
  },
);
