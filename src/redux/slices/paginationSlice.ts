import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { IPaginationState } from '../../@types/pagination';

const initialState: IPaginationState = {
  currentPage: 1,
};

const paginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    setPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
  },
});

export const selectPagination = (state: RootState) => state.pagination;

export const { setPage } = paginationSlice.actions;

export default paginationSlice.reducer;
