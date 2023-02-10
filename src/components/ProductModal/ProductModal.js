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
              {(modalData.cena / 1.23).toFixed(2)} zł / sztukę
            </span>
          </div>{" "}
          {/* PRODUCT TXT */}
          <div className={classes.modal__opis}>{modalData.opis}</div>{" "}
        </div>

        <img src={modalData.image} className={classes.modal__img}></img>
      </div>

      <p className={classes.modal__wymiary}>
        Wymiary:{" "}
        <span className={classes.modal__span}>{modalData.wymiary}</span>
      </p>
      {/* Modal Footer */}
      <div className={classes.modal__footer}>
        <p className={classes.technologie}>technologie:</p>
        {/* TECHNOLOGIA 1 */}
        {modalData.technologie === "1" && (
          <div className={classes.technologie__container}>
            <img
              className={classes.tech__img}
              src="/images/Technologie/cmyk.webp"
            ></img>
            <img
              className={classes.tech__img}
              src="/images/Technologie/uv.webp"
            ></img>
            <img
              className={classes.tech__img}
              src="/images/Technologie/grafika.webp"
            ></img>
          </div>
        )}
        {/* TECHNOLOGIA 2 */}
        {modalData.technologie === "2" && (
          <div className={classes.technologie__container}>
            <img
              className={classes.tech__img}
              src="/images/Technologie/cmyk.webp"
            ></img>
            <img
              className={classes.tech__img}
              src="/images/Technologie/zywica.webp"
            ></img>
            <img
              className={classes.tech__img}
              src="/images/Technologie/grafika.webp"
            ></img>
          </div>
        )}
        {/* TECHNOLOGIA 3 */}
        {modalData.technologie === "3" && (
          <div className={classes.technologie__container}>
            <img
              className={classes.tech__img}
              src="/images/Technologie/laser.webp"
            ></img>
            <img
              className={classes.tech__img}
              src="/images/Technologie/zamowienia.webp"
            ></img>
            <img
              className={classes.tech__img}
              src="/images/Technologie/grafika.webp"
            ></img>
          </div>
        )}
        {/* TECHNOLOGIA 4 */}
        {modalData.technologie === "4" && (
          <div className={classes.technologie__container}>
            <img
              className={classes.tech__img}
              src="/images/Technologie/cmyk.webp"
            ></img>
            <img
              className={classes.tech__img}
              src="/images/Technologie/prasa.webp"
            ></img>
            <img
              className={classes.tech__img}
              src="/images/Technologie/grafika.webp"
            ></img>
          </div>
        )}
        {/* TECHNOLOGIA 5 */}
        {modalData.technologie === "5" && (
          <div className={classes.technologie__container}>
            <img
              className={classes.tech__img}
              src="/images/Technologie/cmyk.webp"
            ></img>
            <img
              className={classes.tech__img}
              src="/images/Technologie/uv.webp"
            ></img>
            <img
              className={classes.tech__img}
              src="/images/Technologie/laser.webp"
            ></img>
            <img
              className={classes.tech__img}
              src="/images/Technologie/grafika.webp"
            ></img>
          </div>
        )}
        {/* TECHNOLOGIA 6 */}
        {modalData.technologie === "6" && (
          <div className={classes.technologie__container}>
            <img
              className={classes.tech__img}
              src="/images/Technologie/laser.webp"
            ></img>
            <img
              className={classes.tech__img}
              src="/images/Technologie/grafika.webp"
            ></img>
          </div>
        )}
        {/* TECHNOLOGIA 7  */}
        {modalData.technologie === "7" && (
          <div className={classes.technologie__container}>
            <img
              className={classes.tech__img}
              src="/images/Technologie/cmyk.webp"
            ></img>
            <img
              className={classes.tech__img}
              src="/images/Technologie/prasa.webp"
            ></img>
            <img
              className={classes.tech__img}
              src="/images/Technologie/rozmiary.webp"
            ></img>
            <img
              className={classes.tech__img}
              src="/images/Technologie/grafika.webp"
            ></img>
          </div>
        )}
        {/* TECHNOLOGIA 8 */}
        {modalData.technologie === "8" && (
          <div className={classes.technologie__container}>
            <img
              className={classes.tech__img}
              src="/images/Technologie/cmyk.webp"
            ></img>
            <img
              className={classes.tech__img}
              src="/images/Technologie/prasa.webp"
            ></img>
            <img
              className={classes.tech__img}
              src="/images/Technologie/rozmiary.webp"
            ></img>
            <img
              className={classes.tech__img}
              src="/images/Technologie/grafika.webp"
            ></img>
          </div>
        )}
        {/* TECHNOLOGIA 10 */}
        {modalData.technologie === "10" && (
          <div className={classes.technologie__container}>
            <img
              className={classes.tech__img}
              src="/images/Technologie/cmyk.webp"
            ></img>
            <img
              className={classes.tech__img}
              src="/images/Technologie/kartonik.webp"
            ></img>
            <img
              className={classes.tech__img}
              src="/images/Technologie/grafika.webp"
            ></img>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductModal;
