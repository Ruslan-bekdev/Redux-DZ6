import {createSlice} from "@reduxjs/toolkit";

const totalSlice = createSlice({
  name:'totalSlice',
  initialState:{
    total:0,
  },
  reducers:{
    plusTotal: (state,action) => {
      state.total = action.payload[0] + action.payload[1];
    },
    minusTotal: (state,action) => {
      state.total = action.payload[0] - action.payload[1];
    },
    multiplyTotal: (state,action) => {
      state.total = action.payload[0] * action.payload[1];
    },
    divideTotal: (state,action) => {
      state.total = action.payload[0] / action.payload[1];
    },
  }
});

export const {plusTotal,minusTotal,multiplyTotal,divideTotal} = totalSlice.actions;

export default totalSlice.reducer;