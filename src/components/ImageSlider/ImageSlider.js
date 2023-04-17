import React from "react";
import classes from "./imageSlider.module.css";
import { useDispatch, useSelector } from "react-redux";
import { Icon } from "@iconify/react";
import {
  nextSlide,
  prevSlide,
  moveToSlide,
  nextMiniSlide,
  prevMiniSlide,
  setNumOfMiniImagesSeen,
} from "@/state/imageSliderSlice";

const ImageSlider = (props) => {
  const dispatch = useDispatch();
  const currentSlide = useSelector((state) => state.slider.currentSlide);
  const sliderLength = useSelector((state) => state.slider.sliderLength);
  const miniSliderPage = useSelector((state) => state.slider.miniSliderPage);

  //   CHECK IF THERE IS ANY IMAGES FOR SLIDER
  if (sliderLength > 0) {
    // MINI IMAGES
    const minImages = props.images.map((image, index) => {
      return (
        <img
          key={index}
          src={image}
          onClick={() => dispatch(moveToSlide(index))}
          className={
            index === currentSlide
              ? `${classes.minImage__active} ${classes.minImage}`
              : classes.minImage
          }
        ></img>
      );
    });
    // LOGIC TO DISPLAY 4 MINI IMAGES ONLY

    const miniImagesPerPage = 4;
    const miniImagesSeen = miniSliderPage * miniImagesPerPage;

    // console.log("miniimagesseen ", miniImagesSeen);
    const numberOfMiniPages = Math.ceil(minImages.length / miniImagesPerPage);
    console.log(numberOfMiniPages, "number of mini pages");
    // console.log(minImages.length, "mini images lenght");
    // console.log("numOFpAGES", numberOfMiniPages);
    const displayMiniImages = minImages.slice(
      miniImagesSeen - 4,
      miniImagesPerPage - 4 + miniImagesSeen
    );

    // FUNCTION TO DISPATCH TWO ACTIONS
    function nextPageAction(data) {
      return (dispatch) => {
        dispatch(nextSlide());
        dispatch(nextMiniSlide(data));
      };
    }
    function prevPageAction(data) {
      return (dispatch) => {
        dispatch(prevSlide());
        dispatch(prevMiniSlide(data));
        dispatch(setNumOfMiniImagesSeen(miniImagesSeen));
      };
    }
    // MAIN SLIDER IMAGE
    const allImages = props.images.map((image, index) => {
      return (
        <div
          className={
            index === currentSlide
              ? `${classes.slide__active}`
              : `${classes.slide}`
          }
          key={index}
        >
          {index === currentSlide && (
            <img src={image} className={classes.slide__active} alt={""}></img>
          )}
        </div>
      );
    });
    // DISPLAY SLIDER
    if (sliderLength == 1) {
      return <div className={classes.slider__main}>{allImages}</div>;
    } else {
      return (
        <div className={classes.slider}>
          <div className={classes.slider__main}>
            <Icon
              icon="ic:round-keyboard-arrow-left"
              className={classes.slider__icon}
              onClick={() => dispatch(prevPageAction(miniImagesSeen))}
            />

            {allImages}
            <Icon
              icon="ic:round-keyboard-arrow-right"
              className={classes.slider__icon}
              onClick={() => dispatch(nextPageAction(miniImagesSeen))}
            />
          </div>
          <div className={classes.minSliderContainer}>
            {" "}
            {displayMiniImages}{" "}
          </div>
        </div>
      );
    }
  }
};

export default ImageSlider;
