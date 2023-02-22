import classes from "./productCard.module.css";
import React from "react";
import { Icon } from "@iconify/react";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "@/state/modalSlice";
import { openSlider } from "@/state/imageSliderSlice";
import Image from "next/image";
const ProductCard = (card) => {
  const dispatch = useDispatch();

  // FUNCTION TO DISPATCH MULTIPLE ACTIONS

  function openModalAction(card) {
    return (dispatch) => {
      dispatch(openModal(card));
      dispatch(openSlider(card));
    };
  }
  return (
    <>
      {/* Send modal data to modalSlice */}
      <div className={classes.card}>
        <div
          className={classes.card__header}
          onClick={() => dispatch(openModalAction(card))}
        >
          <div className={classes.img__wrapper}>
            {card.nowosc === true && (
              <img
                fill
                className={classes.nowosc}
                src="/images/nowosc.png"
                alt={card.identyfikator}
              />
            )}
            <Image
              fill
              className={classes.img}
              src={card.image}
              alt={card.identyfikator}
              sizes="(max-width: 768px) 200vw,
              (max-width: 1200px) 50vw,
              33vw"
            />
          </div>

          <div className={classes.image__overlay}>
            <p className={classes.overlay__read_more}>Czytaj Więcej: </p>
            <Icon
              icon="ph:magnifying-glass-bold"
              className={classes.overlay__icon}
            />
          </div>
        </div>
        <div className={classes.card__details}>
          <div className={classes.card__name}>{card.identyfikator}</div>
        </div>

        <div
          className={`${classes.card__details} ${classes.card__details_light}`}
        >
          <div>
            Kod:{" "}
            <span className={classes.card__details_span}>{card.indeks_pc}</span>
          </div>
          <span className={classes.card__details_wymiary}>{card.wymiary}</span>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
