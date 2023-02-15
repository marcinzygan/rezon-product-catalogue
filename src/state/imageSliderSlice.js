import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentSlide: 0,
  sliderLength: 0,
};

const imageSliderSlice = createSlice({
  name: "slider",
  initialState,
  reducers: {
    openSlider: (state, data) => {
      state.sliderLength = data.payload.slider_images.length;
    },
    closeSlider: (state) => {
      state.sliderLength = 0;
      state.currentSlide = 0;
    },
    nextSlide: (state) => {
      if (state.currentSlide === state.sliderLength - 1) {
        state.currentSlide = 0;
      } else {
        state.currentSlide = state.currentSlide + 1;
      }
    },
    prevSlide: (state) => {
      if (state.currentSlide === 0) {
        state.currentSlide = state.sliderLength - 1;
      } else {
        state.currentSlide = state.currentSlide - 1;
      }
    },
  },
});
export const { closeSlider, openSlider, nextSlide, prevSlide } =
  imageSliderSlice.actions;
export default imageSliderSlice.reducer;
