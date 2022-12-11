import {configureStore} from "@reduxjs/toolkit";
import titleReducer from "./titleSlice";
import productReducer from "./productSlice";
import totalReducer from "./totalSlice"

export default configureStore({
  reducer:{
    titleReducer,
    productReducer,
    totalReducer,
  }
})