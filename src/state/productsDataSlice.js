import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  originalData: [],
  productCards: [],
  numberOfFavorites: 0,
  favId: [],
  isSSR: true,
  favoriteProducts:
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("Favorites")) || []
      : [],
};

export const fetchData = createAsyncThunk("data/fetchData", async () => {
  const response = await fetch("https://rezon-api.vercel.app/api/v1/products");
  const jsonData = await response.json();
  return jsonData;
});

const productsDataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    // FILTER PRODUCTS BY CATEGORY
    filterProducts: (state, data) => {
      if (data.payload === "wszystkie") {
        state.productCards = state.originalData;
      } else if (data.payload === "zestawy") {
        state.productCards = state.originalData;
        const filteredProducts = state.productCards.filter(
          (card) => card.zestaw === true
        );
        state.productCards = [...filteredProducts];
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
        (card) => card._id === data.payload
      );
      const newProduct = { ...currentProduct, isFav: true };

      state.favoriteProducts.push(newProduct);
      //update number of favorite items
      state.numberOfFavorites = state.favoriteProducts.length;
    },
    // REMOVE FAVORITES ACTION
    removeFromFavorites: (state, data) => {
      const newFavList = state.favoriteProducts.filter(
        (item) => item._id !== data.payload
      );
      console.log(data.payload);
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
    setFavoritesData: (state) => {
      //Check if there is any Favourites products and update the isFav to true
      const findFavState = state.originalData.map((item) =>
        state.favoriteProducts.find((card) => card._id === item._id)
          ? { ...item, isFav: true }
          : item
      );
      // console.log(findFavState);
      state.productCards = findFavState;
      // SET FAV IDS ON LAOD
      const favId = state.favoriteProducts.map((product) => {
        return product._id;
      });
      state.favId = favId;
      //set Num of Favorites
      state.numberOfFavorites = state.favoriteProducts.length;
    },

    setIsSSR: (state) => {
      state.isSSR = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.originalData = action.payload.data.products;
        state.productCards = action.payload.data.products;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});
export const {
  filterProducts,
  addToFavorites,
  removeFromFavorites,
  setFavProducts,
  setFavoritesData,
  setFavId,
  removeFavId,
  setIsSSR,
} = productsDataSlice.actions;
export default productsDataSlice.reducer;
