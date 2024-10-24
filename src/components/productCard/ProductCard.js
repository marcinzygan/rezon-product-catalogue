import classes from "./productCard.module.css";
import React from "react";
import { Icon } from "@iconify/react";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "@/state/modalSlice";
import { openSlider, setNumOfMiniImagesSeen } from "@/state/imageSliderSlice";
import Image from "next/image";

import {
  addToFavorites,
  removeFromFavorites,
  setFavId,
  removeFavId,
} from "@/state/productsDataSlice";

const ProductCard = (card) => {
  const dispatch = useDispatch();
  const miniSliderPage = useSelector((state) => state.slider.miniSliderPage);
  const miniImagesPerPage = useSelector(
    (state) => state.slider.miniImagesPerPage
  );
  // State for id's of Favorite items
  const favId = useSelector((state) => state.data.favId);

  // FUNCTION TO DISPATCH MULTIPLE ACTIONS
  function openModalAction(card) {
    return (dispatch) => {
      history.pushState({ page: 1 }, "main", "/");
      dispatch(openModal(card));
      dispatch(openSlider(card));
      dispatch(setNumOfMiniImagesSeen(miniSliderPage * miniImagesPerPage));
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
      (card.stock !== 0 &&
        card.stock !== null &&
        card.stock >= card.stock_optimal) ||
      (card.stock !== 0 &&
        card.stock !== null &&
        card.stock >= (card.stock_optimal * 80) / 100)
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
      return <div className={classes.dostepnosc}></div>;
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
      {card.active && (
        <>
          {/* Send modal data to modalSlice */}
          <div className={classes.card}>
            <div
              className={classes.card__header}
              onClick={() => dispatch(openModalAction(card))}
            >
              {/* STORAGE LEVELS */} {/* PRODUKT NOWOSC */}
              {card.new === true && (
                <img
                  className={classes.nowosc}
                  src="/images/nowosc.png"
                  alt={card.name}
                />
              )}
              {/* PRODUKT STAN MAGAZYNOWY */}
              {/* brak danych */}
              {noQuantity()}
              {/* produkt dostepny . >= od stan_optymalny  lub wiekszy od 80% stanu optymalnego*/}
              {highQuantity()}
              {/* Srednia dostepnosc produktu. stan_magazynowy  < 80% && >= 50%  stan_optymalny   */}
              {midQuantity()}
              {/* Mala dostepnosc produktu. stan_magazynowy  < 50% stan_optymalny  */}
              {lowQuantity()}
              <div
                className={
                  card.stock === 0
                    ? classes.img__wrapper + " " + classes.brak__produktu_img
                    : classes.img__wrapper
                }
              >
                {!card.imageCover ? (
                  <Image
                    fill
                    className={classes.img}
                    src={"/images/brak_zdjecia.jpg"}
                    alt={card.name}
                    sizes="(max-width: 768px) 200vw,
            (max-width: 1200px) 50vw,
            33vw"
                  />
                ) : (
                  <Image
                    fill
                    className={classes.img}
                    src={card.imageCover}
                    alt={card.name}
                    sizes="(max-width: 768px) 200vw,
          (max-width: 1200px) 50vw,
          33vw"
                  />
                )}
                {/* <Image
              fill
              className={classes.img}
              src={card.image}
              alt={card.identyfikator}
              sizes="(max-width: 768px) 200vw,
              (max-width: 1200px) 50vw,
              33vw"
            /> */}
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
                Kod:{" "}
                <span className={classes.card__details_span}>
                  {card.pc_id}{" "}
                </span>
              </div>
              <span className={classes.card__details_wymiary}>
                {card.dimensions}
              </span>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ProductCard;
