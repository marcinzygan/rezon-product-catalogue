import React from "react";
import classes from "./imageSlider.module.css";
import { useDispatch, useSelector } from "react-redux";
import { Icon } from "@iconify/react";
import { nextSlide, prevSlide, moveToSlide } from "@/state/imageSliderSlice";

const ImageSlider = (props) => {
  const dispatch = useDispatch();
  const currentSlide = useSelector((state) => state.slider.currentSlide);
  const sliderLength = useSelector((state) => state.slider.sliderLength);

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
            <img src={image} className={classes.slider__img} alt={""}></img>
          )}
        </div>
      );
    });
    return (
      <div className={classes.slider}>
        <div className={classes.slider__main}>
          <Icon
            icon="ic:round-keyboard-arrow-left"
            className={classes.slider__icon}
            onClick={() => dispatch(prevSlide())}
          />
          {allImages}
          <Icon
            icon="ic:round-keyboard-arrow-right"
            className={classes.slider__icon}
            onClick={() => dispatch(nextSlide())}
          />{" "}
        </div>
        <div>{minImages}</div>
      </div>
    );
  } else {
    return <></>;
  }
};

export default ImageSlider;
