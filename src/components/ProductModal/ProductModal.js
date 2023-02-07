import React from "react";
import classes from "./productModal.module.css";
import { closeModal } from "@/state/modalSlice";
import { useDispatch, useSelector } from "react-redux";
import { Icon } from "@iconify/react";
const ProductModal = () => {
  const modalData = useSelector((state) => state.modal.modalContent);
  console.log(modalData);
  const dispatch = useDispatch();
  return (
    <div className={classes.modal} id="modal">
      {/* Modal Header */}
      <div className={classes.modal__header_line}></div>
      <div className={classes.modal__header}>
        <img src="/images/logo.png" className={classes.logo}></img>
        <div onClick={() => dispatch(closeModal())}>
          <Icon icon="ion:close-circle" className={classes.modal__icon} />
        </div>
      </div>

      <div className={classes.details__container}>
        {" "}
        <div className={classes.modal__name}>{modalData.identyfikator}</div>
        <div className={classes.modal__kod}>
          Kod Produktu: {modalData.indeks_pc}
        </div>
        <div className={classes.cena}>
          Cena brutto: {modalData.cena} zł / sztukę{" "}
        </div>
        <div className={classes.cena}>
          Cena netto:{" "}
          {(modalData.cena - (modalData.cena * 23) / 100).toFixed(1)} zł /
          sztukę{" "}
        </div>
        <div>{modalData.opis}</div>
      </div>
      <img src={modalData.image} className={classes.modal__img}></img>
      <p>Wymiary: 12cm x 4cm</p>
      {/* Modal Footer */}
      <div className={classes.modal__footer}>TECHNOLOGIE</div>
    </div>
  );
};

export default ProductModal;
