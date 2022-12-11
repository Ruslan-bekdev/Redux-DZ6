import {createSlice} from "@reduxjs/toolkit";

const titleSlice = createSlice({
  name: 'titleSlice',
  initialState:{
    title: 'old title',
  },
  reducers:{
    changeTitle: (state,action) => {
      state.title = 'new title'
    },
    clearTitle: (state,action) => {
      state.title = ''
    },
    titleWithParams: (state,action) => {
      state.title = action.payload
    }
  }
})

export const {changeTitle,clearTitle,titleWithParams} = titleSlice.actions;

export default titleSlice.reducer;