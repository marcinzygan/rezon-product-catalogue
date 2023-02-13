import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isNavOpen: false,
};

const navigationSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    openNav: (state, data) => {
      if (data.payload === false) {
        state.isNavOpen = true;
        const nav = document.querySelector("#nav__list");
        nav.classList.add("nav__open");
      } else if (data.payload === true) {
        state.isNavOpen = false;
        const nav = document.querySelector("#nav__list");
        nav.classList.remove("nav__open");
      }
    },
  },
});

export const { openNav } = navigationSlice.actions;
export default navigationSlice.reducer;
