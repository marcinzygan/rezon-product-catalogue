import { createSlice } from "@reduxjs/toolkit";
import { productsData } from "../data/productsData.js";

const initialState = {
  originalData: productsData,
  productCards: productsData,
};

const productsDataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    filterProducts: (state, data) => {
      if (data.payload === "wszystkie") {
        state.productCards = productsData;
      } else {
        state.productCards = state.originalData;
        const filteredProducts = state.productCards.filter(
          (card) => card.category === data.payload
        );
        state.productCards = [...filteredProducts];
      }
    },
  },
});
export const { filterProducts } = productsDataSlice.actions;
export default productsDataSlice.reducer;
