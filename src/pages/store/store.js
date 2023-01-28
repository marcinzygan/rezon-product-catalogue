import { configureStore } from "@reduxjs/toolkit";
import paginationReducer from "@/state/paginationSlice";
export const store = configureStore({
  reducer: {
    page: paginationReducer,
  },
});
