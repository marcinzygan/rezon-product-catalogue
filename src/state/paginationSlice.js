import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentPage: 1,
};

const paginationSlice = createSlice({
  name: "page",
  initialState,
  reducers: {
    nextPage: (state) => {
      state.currentPage = state.currentPage + 1;
    },
  },
});
export const { nextPage } = paginationSlice.actions;
export default paginationSlice.reducer;
