import { configureStore } from "@reduxjs/toolkit";
import paginationReducer from "@/state/paginationSlice";
import productsDataReducer from "@/state/productsDataSlice";
import modalReducer from "@/state/modalSlice";
import navigationReducer from "../navigationSlice";
export const store = configureStore({
  reducer: {
    page: paginationReducer,
    data: productsDataReducer,
    modal: modalReducer,
    nav: navigationReducer,
  },
});
