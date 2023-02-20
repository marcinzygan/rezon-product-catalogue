import { configureStore } from "@reduxjs/toolkit";
import paginationReducer from "@/state/paginationSlice";
import productsDataReducer from "@/state/productsDataSlice";
import modalReducer from "@/state/modalSlice";
import navigationReducer from "../navigationSlice";
import imageSliderReducer from "../imageSliderSlice";
import productSearchReducer from "../productSearchSlice";
export const store = configureStore({
  reducer: {
    page: paginationReducer,
    data: productsDataReducer,
    modal: modalReducer,
    nav: navigationReducer,
    slider: imageSliderReducer,
    search: productSearchReducer,
  },
});
