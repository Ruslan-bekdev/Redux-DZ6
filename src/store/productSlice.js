import {createSlice} from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: 'productSlice',
  initialState:{
    products:[],
  },
  reducers:{
    addProducts: (state,action) => {
      state.products = [...state.products,action.payload];
    }
  }
});

export const {addProducts} = productSlice.actions;

export default productSlice.reducer;