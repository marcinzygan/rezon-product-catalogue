import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentSlide: 0,
  sliderLength: 0,
  miniSliderPage: 1,
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
    nextSlide: (state, data) => {
      if (state.currentSlide === state.sliderLength - 1) {
        state.currentSlide = 0;
      } else {
        state.currentSlide = state.currentSlide + 1;
      }
    },
    prevSlide: (state, data) => {
      if (state.currentSlide === 0) {
        state.currentSlide = state.sliderLength - 1;
      } else {
        state.currentSlide = state.currentSlide - 1;
      }
    },
    moveToSlide: (state, data) => {
      state.currentSlide = data.payload;
    },
    nextMiniSlide: (state, data) => {
      console.log(data.payload);
      if (state.currentSlide === data.payload) {
        state.miniSliderPage = state.miniSliderPage + 1;
      }
      if (state.currentSlide === 0) {
        state.miniSliderPage = 1;
      }
    },
    prevMiniSlide: (state, data) => {
      if (state.currentSlide === state.sliderLength - 1) {
        state.miniSliderPage = data.payload;
      }
      if (state.currentSlide + 1 === data.payload - 3) {
        state.miniSliderPage = state.miniSliderPage - 1;
      }
    },
  },
});
export const {
  closeSlider,
  openSlider,
  nextSlide,
  prevSlide,
  moveToSlide,
  nextMiniSlide,
  prevMiniSlide,
} = imageSliderSlice.actions;
export default imageSliderSlice.reducer;
