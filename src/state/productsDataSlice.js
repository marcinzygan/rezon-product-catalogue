import { createSlice } from "@reduxjs/toolkit";
import { productsData } from "../data/productsData.js";

const initialState = {
  originalData: productsData,
  productCards: productsData,
  // favoriteProducts: JSON.parse(localStorage.getItem("Favorites")) || [],
};

const productsDataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    // FILTER PRODUCTS BY CATEGORY
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
    // LOCAL STORAGE AND FAV LIST
    setFavProducts: (state, data) => {
      console.log(data.payload);
      state.favoriteProducts = data.payload;
    },
    addToFavorites: (state, data) => {
      //Add Product to Favorites State
      const currentProduct = state.productCards.find(
        (card) => card.id === data.payload
      );
      const newProduct = { ...currentProduct, isFav: true };
      console.log(newProduct);
      state.favoriteProducts.push(newProduct);

      // Update isFav property on OriginalData
    },
  },
});
export const { filterProducts, addToFavorites, setFavProducts } =
  productsDataSlice.actions;
export default productsDataSlice.reducer;
