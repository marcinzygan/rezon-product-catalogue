import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { productsData } from "../data/productsData.js";

const initialState = {
  searchInput: { search: "" },
  originalSearchProducts: [],
  searchDataProducts: [],
  displaySearchProducts: [],
  isSearchActive: false,
};
export const fetchSearchData = createAsyncThunk(
  "serch/fetchProductsData",
  async () => {
    const response = await fetch(
      "https://rezon-api.vercel.app/api/v1/products"
    );
    const jsonData = await response.json();
    return jsonData;
  }
);
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
    clearInput: (state) => {
      state.searchInput.search = "";
    },
    setIsSearchActive: (state) => {
      state.isSearchActive = false;
    },
    filterSearch: (state) => {
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
  extraReducers: (builder) => {
    builder
      .addCase(fetchSearchData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchSearchData.fulfilled, (state, action) => {
        state.originalSearchProducts = action.payload.data.products;
        state.searchDataProducts = action.payload.data.products;
      })
      .addCase(fetchSearchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setSearchInput, clearInput, filterSearch, setIsSearchActive } =
  productSearchSlice.actions;
export default productSearchSlice.reducer;
