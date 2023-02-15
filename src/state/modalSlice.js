import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isModalOpen: false,
  modalContent: [],
  scrollPosition: 0,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, data) => {
      //Set state for current scroll position
      const scrollPosition = document.body.getBoundingClientRect().top;
      state.scrollPosition = Math.abs(scrollPosition);
      // Open modal add CSS classes
      if ((state.isModalOpen = true)) {
        document.querySelector("body").classList.add("hidden");
        document.querySelector("#cards").classList.add("hide__cards");
        document.querySelector("#modal").classList.add("modal__open");
      }
      state.isModalOpen = true;
      state.modalContent = data.payload;
      // set slider length after opening modal

      if (data.payload.slider_images) {
        state.sliderLength = data.payload.slider_images.length;
        console.log(data.payload.slider_images.length);
      } else {
        return;
      }
      // state.sliderLength = data.payload.slider_images.length;
    },
    closeModal: (state, data) => {
      document.querySelector("body").classList.remove("hidden");
      document.querySelector("#cards").classList.remove("hide__cards");
      document.querySelector("#modal").classList.remove("modal__open");
      state.isModalOpen = false;
      state.modalContent = [];
      // Move back to same position scrolled.
      window.scrollTo(0, state.scrollPosition);
    },
  },
});

export default modalSlice.reducer;

export const { openModal, closeModal } = modalSlice.actions;
