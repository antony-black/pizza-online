import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categoryId: 0,
  sortType: '',
};

 const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategoryId(state, action){
      console.log('category: >>>>', state, action);
      
      state.categoryId = action.payload;
    },
    setType: (state, action) => {
      console.log('sort: >>>>', state, action);
      
      state.sortType = action.payload;
    },
  },
});

export const { setCategoryId, setType } = filterSlice.actions;

export default filterSlice.reducer;
