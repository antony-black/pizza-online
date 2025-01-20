import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categoryId: 0,
  sortType: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategoryId(state, action) {
      console.log('category: >>>>', state, action);
      state.categoryId = action.payload;
    },
    setType: (state, action) => {
      console.log('sort: >>>>', state, action);
      state.sortType = action.payload;
    },
    setFilters(state, action) {
      console.log('setFilters/action: >>>>', state, action);
      state.sortType = action.payload.sortType;
      console.log('setFilters/sortType: >>>>', action.payload.sortType);
      state.categoryId = Number(action.payload.categoryId);
      console.log('setFilters/categoryId: >>>>', Number(action.payload.categoryId));
    },
  },
});

export const { setCategoryId, setType, setFilters } = filterSlice.actions;

export default filterSlice.reducer;
