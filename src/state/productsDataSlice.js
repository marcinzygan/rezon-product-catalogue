import { createSlice } from "@reduxjs/toolkit";
import { productsData } from "../data/productsData.js";

const initialState = {
  originalData: productsData,
  productCards: productsData,
  numberOfFavorites: 0,
  favId: [],
  isSSR: true,
  favoriteProducts:
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("Favorites")) || []
      : [],
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
      state.favoriteProducts = data.payload;
    },
    // ADD FAVORITES ACTION
    addToFavorites: (state, data) => {
      //Add Product to Favorites State
      const currentProduct = state.productCards.find(
        (card) => card.id === data.payload
      );
      const newProduct = { ...currentProduct, isFav: true };

      state.favoriteProducts.push(newProduct);
      //update number of favorite items
      state.numberOfFavorites = state.favoriteProducts.length;
    },
    // REMOVE FAVORITES ACTION
    removeFromFavorites: (state, data) => {
      const newFavList = state.favoriteProducts.filter(
        (item) => item.id !== data.payload
      );
      state.favoriteProducts = newFavList;
      //update number of favorite items
      state.numberOfFavorites = state.favoriteProducts.length;
    },
    //REMOVE FAVORITE ITEM ID ACTION
    removeFavId: (state, data) => {
      const index = state.favId.indexOf(data.payload);
      state.favId.splice(index, 1);
    },
    // SET FAVORITES ITEM ID ACTION
    setFavId: (state, data) => {
      state.favId.push(data.payload);
    },
    //SET DATA ON APP LOAD
    setData: (state, data) => {
      // Update isFav property on productCards

      //Check if there is any Favourites products and update the isFav to true
      const findFavState = state.originalData.map((item) =>
        state.favoriteProducts.find((card) => card.id === item.id)
          ? { ...item, isFav: true }
          : item
      );
      // console.log(findFavState);
      state.productCards = findFavState;
      // SET FAV IDS ON LAOD
      const favId = state.favoriteProducts.map((product) => {
        return product.id;
      });
      state.favId = favId;
      //set Num of Favorites
      state.numberOfFavorites = state.favoriteProducts.length;
    },
    setIsSSR: (state, data) => {
      state.isSSR = false;
    },
  },
});
export const {
  filterProducts,
  addToFavorites,
  removeFromFavorites,
  setFavProducts,
  setData,
  setFavId,
  removeFavId,
  setIsSSR,
} = productsDataSlice.actions;
export default productsDataSlice.reducer;
