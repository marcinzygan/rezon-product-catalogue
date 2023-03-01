import { createSlice } from "@reduxjs/toolkit";
import { productsData } from "../data/productsData.js";
import React from "react";
const initialState = {
  originalData: productsData,
  productCards: productsData,

  //   typeof window !== "undefined" && localStorage.getItem("Favorites")
  //     ? JSON.parse(localStorage.getItem("Favorites"))
  //     : [],
  // favoriteProducts:
  //   typeof window !== "undefined"
  //     ? JSON.parse(localStorage.getItem("Favorites")) || {}
  //     : [],
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
      // console.log(data.payload);
      state.favoriteProducts = data.payload;
    },
    addToFavorites: (state, data) => {
      //Add Product to Favorites State
      const currentProduct = state.productCards.find(
        (card) => card.id === data.payload
      );
      const newProduct = { ...currentProduct, isFav: true };
      // console.log(newProduct);
      state.favoriteProducts.push(newProduct);
    },
    removeFromFavorites: (state, data) => {
      const newFavList = state.favoriteProducts.filter(
        (item) => item.id !== data.payload
      );
      state.favoriteProducts = newFavList;
    },
    // setData: (state, data) => {
    //   // Update isFav property on productCards

    //   //Check if there is any Favourites products and update the isFav to true
    //   const findFavState = state.originalData.map((item) =>
    //     state.favoriteProducts.find((card) => card.id === item.id)
    //       ? { ...item, isFav: true }
    //       : item
    //   );
    //   // console.log(findFavState);
    //   state.productCards = findFavState;
    // },
  },
});
export const {
  filterProducts,
  addToFavorites,
  removeFromFavorites,
  setFavProducts,
  setData,
} = productsDataSlice.actions;
export default productsDataSlice.reducer;
