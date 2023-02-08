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
        <img src="/images/logo4.jpg" className={classes.logo}></img>

        <div onClick={() => dispatch(closeModal())}>
          <Icon icon="ion:close-circle" className={classes.modal__icon} />
        </div>
      </div>
      <div className={classes.company__details_container}>
        <p className={classes.company__name}>Rezon Sp. z o.o</p>
        <div className={classes.adress}>
          <Icon icon="ic:round-location-on" />{" "}
          <p>Adres: ul. Ketlinga 1 , 78-100 Kołobrzeg</p>
        </div>
        <div className={classes.nip}>
          <Icon icon="material-symbols:folder-open" />
          <p>Nip: 6711400398</p>
        </div>
        <div className={classes.phone}>
          <Icon icon="material-symbols:phone-in-talk-watchface-indicator" />
          <p>Telefon: 94 355 14 50</p>
        </div>
      </div>
      {/* PRODUCT INFO */}
      <div className={classes.details__container}>
        <div className={classes.modal__info_container}>
          {/* Product Name */}
          <div className={classes.modal__name}>{modalData.identyfikator}</div>
          {/* Product code */}
          <div className={classes.modal__kod}>
            Kod Produktu:{" "}
            <span className={classes.modal__span}>{modalData.indeks_pc}</span>
          </div>
          {/* Product price */}
          <div className={classes.cena}>
            Cena brutto:{" "}
            <span className={classes.modal__span}>
              {modalData.cena} zł / sztukę
            </span>
          </div>
          <div className={classes.cena}>
            Cena netto:{" "}
            <span className={classes.modal__span}>
              {" "}
              {(modalData.cena - (modalData.cena * 23) / 100).toFixed(1)} zł /
              sztukę
            </span>
          </div>{" "}
          {/* PRODUCT TXT */}
          <div className={classes.modal__opis}>{modalData.opis}</div>{" "}
        </div>

        <img src={modalData.image} className={classes.modal__img}></img>
      </div>

      <p className={classes.modal__wymiary}>
        Wymiary: <span className={classes.modal__span}>00cm x 00cm</span>
      </p>
      {/* Modal Footer */}
      <div className={classes.modal__footer}>
        <p className={classes.technologie}>technologie:</p>
        {modalData.technologie}
      </div>
    </div>
  );
};

export default ProductModal;
