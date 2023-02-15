import React from "react";
import classes from "./imageSlider.module.css";
import { useDispatch, useSelector } from "react-redux";
import { Icon } from "@iconify/react";
import { nextSlide, prevSlide } from "@/state/imageSliderSlice";

const ImageSlider = (props) => {
  const dispatch = useDispatch();
  const currentSlide = useSelector((state) => state.slider.currentSlide);
  const sliderLength = useSelector((state) => state.slider.sliderLength);

  //   CHECK IF THERE IS ANY IMAGES FOR SLIDER
  if (sliderLength > 0) {
    const allImages = props.images.map((image, index) => {
      return (
        <div
          className={index === currentSlide ? "slide__active" : "slide"}
          key={index}
        >
          {index === currentSlide && (
            <img src={image} className="slider__img" alt={""}></img>
          )}
        </div>
      );
    });
    return (
      <>
        {allImages}
        <button onClick={() => dispatch(nextSlide())}>+</button>
        <button onClick={() => dispatch(prevSlide())}>-</button>
      </>
    );
  } else {
    return <></>;
  }
};

export default ImageSlider;
