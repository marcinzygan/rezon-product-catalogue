import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentPage: 1,
};

const paginationSlice = createSlice({
  name: "page",
  initialState,
  reducers: {
    nextPage: (state, data) => {
      if (state.currentPage >= data.payload) {
        return;
      }
      state.currentPage = state.currentPage + 1;
    },
    prevPage: (state) => {
      if (state.currentPage <= 1) {
        return;
      }
      state.currentPage = state.currentPage - 1;
    },
    firstPage: (state) => {
      state.currentPage = 1;
    },
    lastPage: (state, data) => {
      state.currentPage = data.payload;
    },
  },
});
export const { nextPage, prevPage, firstPage, lastPage } =
  paginationSlice.actions;
export default paginationSlice.reducer;
