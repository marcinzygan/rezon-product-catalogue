import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentSlide: 0,
  sliderLength: 0,
  miniSliderPage: 1,
  miniImagesSeen: 0,
  miniImagesPerPage: 4,
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
    setNumOfMiniImagesSeen: (state, data) => {
      state.miniImagesSeen = data.payload;
    },
    nextMiniSlide: (state, data) => {
      // console.log(data.payload);
      if (state.currentSlide === data.payload) {
        state.miniSliderPage = state.miniSliderPage + 1;
      }
      if (state.currentSlide === 0) {
        state.miniSliderPage = 1;
      }
    },
    prevMiniSlide: (state, data) => {
      const numberOfMiniPages = Math.ceil(
        state.sliderLength / state.miniImagesPerPage
      );
      // console.log(numberOfMiniPages, "number of mini pages");
      if (state.currentSlide === state.sliderLength - 1) {
        state.miniSliderPage = numberOfMiniPages;
      }
      // if (state.currentSlide === data.payload) {
      //   state.miniSliderPage = state.miniSliderPage - 1;
      // }
      if (state.currentSlide === 3) {
        state.miniSliderPage = 1;
      }
      // console.log(data.payload, "miniImagesSeen");
      // console.log(state.currentSlide, "current slide");
      // console.log(state.sliderLength, "slider lenght");
      // console.log(state.miniSliderPage, "miniSlider  page");
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
  setNumOfMiniImagesSeen,
} = imageSliderSlice.actions;
export default imageSliderSlice.reducer;
