import { createSlice } from "@reduxjs/toolkit";
import { productsData } from "../data/productsData.js";

const initialState = {
  searchInput: { search: "" },
  originalSearchProducts: productsData,
  searchDataProducts: productsData,
  displaySearchProducts: [],
  isSearchActive: false,
};

const productSearchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchInput: (state, data) => {
      // console.log(data.payload);

      const { name, value } = data.payload;

      state.searchInput = { ...state.searchInput, [name]: value };
      // console.log(state.searchInput);
    },
    clearInput: (state, data) => {
      state.searchInput.search = "";
    },
    setIsSearchActive: (state, data) => {
      state.isSearchActive = false;
    },
    filterSearch: (state, data) => {
      // console.log(searchData);

      function filterByValue(array, string) {
        state.isSearchActive = true;
        state.searchDataProducts = state.originalSearchProducts;
        return array.filter((object) => {
          return Object.keys(object).some((key) => {
            if (typeof object[key] === "string")
              return object[key].toLowerCase().includes(string.toLowerCase());
          });
        });
      }
      const displaySearch = filterByValue(
        state.searchDataProducts,
        state.searchInput.search
      );
      // console.log(displaySearch);
      state.displaySearchProducts = displaySearch;
    },
  },
});

export const { setSearchInput, clearInput, filterSearch, setIsSearchActive } =
  productSearchSlice.actions;
export default productSearchSlice.reducer;
