import classes from "./productCard.module.css";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "@/state/modalSlice";
const ProductCard = (card) => {
  const dispatch = useDispatch();

  // const modalContentChange = (data) => {
  //   setModalContent([data]);
  //   setIsModalOpen(true);
  // };
  // const openModal = function () {
  //   console.log(card);
  // };

  return (
    <>
      <div className={classes.card} onClick={() => dispatch(openModal(card))}>
        <div className={classes.card__header}>
          <div className={classes.card__name}>{card.identyfikator}</div>
          <img className={classes.img} src={card.image} />
          {/* <div className={classes.cena}>
            Cena <span className={classes.cena__span}>{card.cena} zł</span>
          </div> */}
        </div>
        <div className={classes.card__details}>
          Kod Produktu:{" "}
          <span className={classes.card__details_span}>{card.indeks_pc}</span>
        </div>
        <div className={classes.card__details}>
          Wymiary:{" "}
          <span className={classes.card__details_span}>05 cm x 1cm x 2cm</span>
        </div>
        {/* <div className={classes.opis}>{card.opis}</div> */}
        {/* <div className={classes.technologie}>Technologie</div> */}
        {/* <div>{card.id}</div> */}
      </div>
    </>
  );
};

export default ProductCard;
