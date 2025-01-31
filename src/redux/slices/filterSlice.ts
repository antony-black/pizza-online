import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { IFilterState } from '../../@types/filter';

const initialState: IFilterState = {
  searchValue: '',
  categoryId: 0,
  sortType: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategoryId(state, action: PayloadAction<number>) {
      state.categoryId = action.payload;
    },

    setType: (state, action: PayloadAction<string>) => {
      state.sortType = action.payload;
    },

    setFilters(state, action: PayloadAction<{ sortType: string; categoryId: number }>) {
      state.sortType = action.payload.sortType;
      state.categoryId = Number(action.payload.categoryId);
    },

    setSearch(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
  },
});

export const selectFilter = (state: RootState) => state.filter;

export const { setCategoryId, setType, setFilters, setSearch } = filterSlice.actions;

export default filterSlice.reducer;
