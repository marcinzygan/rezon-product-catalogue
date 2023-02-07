import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isModalOpen: false,
  modalContent: [],
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, data) => {
      if ((state.isModalOpen = true)) {
        document.querySelector("#cards").classList.add("hide__cards");
        document.querySelector("#modal").classList.add("modal__open");
      }
      state.isModalOpen = true;
      state.modalContent = data.payload;
    },
    closeModal: (state, data) => {
      document.querySelector("#cards").classList.remove("hide__cards");
      document.querySelector("#modal").classList.remove("modal__open");
      state.isModalOpen = false;
      state.modalContent = [];
    },
  },
});

export default modalSlice.reducer;

export const { openModal, closeModal } = modalSlice.actions;
