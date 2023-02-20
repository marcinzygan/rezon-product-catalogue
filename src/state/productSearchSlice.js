import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchInput: { search: "" },
};

const productSearchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchInput: (state, data) => {
      console.log(data.payload);

      const { name, value } = data.payload;

      state.searchInput = { ...state.searchInput, [name]: value };
      console.log(state.searchInput);
    },
    clearInput: (state, data) => {
      state.searchInput.search = "";
    },
  },
});

export const { setSearchInput, clearInput } = productSearchSlice.actions;
export default productSearchSlice.reducer;
