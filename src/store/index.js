import {configureStore} from "@reduxjs/toolkit";
import totalReducer from "./totalSlice"

export default configureStore({
  reducer:{
    totalReducer,
  }
})