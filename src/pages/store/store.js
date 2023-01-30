import { configureStore } from "@reduxjs/toolkit";
import paginationReducer from "@/state/paginationSlice";
import productsDataReducer from "@/state/productsDataSlice";
export const store = configureStore({
  reducer: {
    page: paginationReducer,
    data: productsDataReducer,
  },
});
