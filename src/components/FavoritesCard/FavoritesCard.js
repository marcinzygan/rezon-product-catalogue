import classes from "./favoritesCard.module.css";
import React from "react";
import { Icon } from "@iconify/react";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "@/state/modalSlice";
import { openSlider } from "@/state/imageSliderSlice";

import Image from "next/image";
import {
  addToFavorites,
  removeFromFavorites,
  setFavId,
  removeFavId,
} from "@/state/productsDataSlice";
const ProductCard = (card) => {
  const dispatch = useDispatch();
  // State for id's of Favorite items
  const favId = useSelector((state) => state.data.favId);

  // FUNCTION TO DISPATCH MULTIPLE ACTIONS
  function openModalAction(card) {
    return (dispatch) => {
      dispatch(openModal(card));
      dispatch(openSlider(card));
    };
  }
  // add favorites action
  function addFavAction(card) {
    return (dispatch) => {
      dispatch(setFavId(card._id));
      dispatch(addToFavorites(card._id));
    };
  }
  // remove favorites action
  function removeFavAction(card) {
    return (dispatch) => {
      dispatch(removeFavId(card._id));
      dispatch(removeFromFavorites(card._id));
    };
  }
  //function for High storage levels
  function highQuantity() {
    if (
      card.stock >= card.stock_optimal ||
      card.stock >= (card.stock_optimal * 80) / 100
    ) {
      return (
        <img
          src="/images/duza_dostepnosc.svg"
          className={classes.dostepnosc}
        ></img>
      );
    }
    return null;
  }
  // function for Mid storage levels
  function midQuantity() {
    if (
      card.stock < (card.stock_optimal * 80) / 100 &&
      card.stock >= (card.stock_optimal * 50) / 100
    ) {
      return (
        <img
          src="/images/srednia_dostepnosc.svg"
          className={classes.dostepnosc}
        ></img>
      );
    }
    return null;
  }
  function noQuantity() {
    if (card.stock === null) {
      return <></>;
    }
  }
  // function for low storage levels
  function lowQuantity() {
    if (card.stock === 0) {
      return (
        <div className={classes.dostepnosc}>
          <div className={classes.brak__produktu}>BRAK PRODUKTU</div>
        </div>
      );
    } else if (card.stock < (card.stock_optimal * 50) / 100) {
      return (
        <img
          src="/images/mala_dostepnosc.svg"
          className={classes.dostepnosc}
        ></img>
      );
    }
    return null;
  }

  // JSX RETURN
  return (
    <>
      {/* Send modal data to modalSlice */}
      <div className={classes.card}>
        <div
          className={classes.card__header}
          onClick={() => dispatch(openModalAction(card))}
        >
          {/* STORAGE LEVELS */} {/* PRODUKT NOWOSC */}
          {card.nowosc === true && (
            <img
              className={classes.nowosc}
              src="/images/nowosc.png"
              alt={card.identyfikator}
            />
          )}
          {/* PRODUKT STAN MAGAZYNOWY */}
          {/* brak danych */}
          {noQuantity()}
          {/* produkt dostepny . >= od stock_optimal  lub wiekszy od 80% stanu optymalnego*/}
          {highQuantity()}
          {/* Srednia dostepnosc produktu. stock  < 80% && >= 50%  stock_optimal   */}
          {midQuantity()}
          {/* Mala dostepnosc produktu. stock  < 50% stock_optimal  */}
          {lowQuantity()}
          <div
            className={
              card.stock === 0
                ? classes.img__wrapper + " " + classes.brak__produktu_img
                : classes.img__wrapper
            }
          >
            <Image
              fill
              className={classes.img}
              src={card.imageCover}
              alt={card.name}
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
          <div className={classes.card__name}>{card.name}</div>

          {!favId.includes(card._id) ? (
            <Icon
              icon="fa6-solid:heart-circle-plus"
              className={classes.icon}
              onClick={() => dispatch(addFavAction(card))}
            />
          ) : (
            <Icon
              icon="fa:heart"
              className={classes.icon + " " + classes.icon__remove}
              onClick={() => dispatch(removeFavAction(card))}
            />
          )}
        </div>

        <div
          className={`${classes.card__details} ${classes.card__details_light}`}
        >
          <div>
            <span className={classes.card__details_span}> Kod: </span>
            {card.pc_id}{" "}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
