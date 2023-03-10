import React from "react";
import classes from "./productModal.module.css";
import { closeModal } from "@/state/modalSlice";
import { useDispatch, useSelector } from "react-redux";
import { Icon } from "@iconify/react";
import ImageSlider from "../ImageSlider/ImageSlider";
import { closeSlider } from "@/state/imageSliderSlice";

const ProductModal = () => {
  const modalData = useSelector((state) => state.modal.modalContent);
  const sliderLength = useSelector((state) => state.slider.sliderLength);
  const dispatch = useDispatch();

  // FUNCTION TO DISPATCH MULTIPLE ACTIONS
  function closeModalAction() {
    return (dispatch) => {
      dispatch(closeModal());
      dispatch(closeSlider());
    };
  }
  // FUNCTION TO CHECK ALL STORAGE LEVELS
  function checkQuantity(stan_magazynowy) {
    // check for HighQuantity
    if (
      (stan_magazynowy !== 0 &&
        stan_magazynowy !== null &&
        stan_magazynowy >= modalData.stan_optymalny) ||
      (stan_magazynowy !== 0 &&
        stan_magazynowy !== null &&
        stan_magazynowy >= (modalData.stan_optymalny * 80) / 100)
    ) {
      return (
        <img
          src="/images/duza_dostepnosc.svg"
          className={classes.dostepnosc}
        ></img>
      );
      // check for MidQuantity
    } else if (
      stan_magazynowy < (modalData.stan_optymalny * 80) / 100 &&
      stan_magazynowy >= (modalData.stan_optymalny * 50) / 100
    ) {
      return (
        <img
          src="/images/srednia_dostepnosc.svg"
          className={classes.dostepnosc}
        ></img>
      );
      // check for LowQuantity
    } else if (
      stan_magazynowy < (modalData.stan_optymalny * 50) / 100 &&
      stan_magazynowy !== 0
    ) {
      return (
        <img
          src="/images/mala_dostepnosc.svg"
          className={classes.dostepnosc}
        ></img>
      );
      //check for noQuantity
    } else if (stan_magazynowy === 0) {
      return <>BRAK PRODUKTU</>;
    }
  }

  // JSX RETURN
  return (
    <div className={classes.modal} id="modal">
      {/* Modal Header */}
      <div className={classes.modal__header_line}></div>
      <div className={classes.modal__header}>
        <div onClick={() => dispatch(closeModalAction())}>
          <Icon icon="ion:close-circle" className={classes.modal__icon} />
        </div>
      </div>

      <div className={classes.moddal__grid_container}>
        {/* PRODUCT INFO */}

        {/* <div className={classes.details__container}> */}
        <div className={classes.modal__info_container}>
          {/* Product Name */}
          <div className={classes.modal__name}>
            {modalData.identyfikator}{" "}
            <div className={classes.favorite__icon_container}></div>
          </div>
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
        {/* IMAGE SLIDER */}

        <div className={classes.slider__container}>
          {/* IF there is any images in data display slider  */}
          {sliderLength > 0 && <ImageSlider images={modalData.slider_images} />}

          <div className={classes.modal__wymiary}>
            Wymiary:{" "}
            <span className={classes.modal__span}>{modalData.wymiary}</span>
          </div>
        </div>
        {/* </div> */}
        {/* DODATKOWE STANY MAGAZYNOWE  */}
        {/* MAGNES OTWIERACZ BUTELKA*/}
        {/* malibu */}
        {modalData.stan_malibu ? (
          <div>
            {" "}
            <p>Malibu: {modalData.stan_malibu} sztuk</p>{" "}
            {checkQuantity(modalData.stan_malibu)}
          </div>
        ) : null}
        {/* cream*/}
        {modalData.stan_crem ? (
          <div className={classes.stan__display}>
            {" "}
            <p>Cream: {modalData.stan_crem} sztuk</p>{" "}
            {checkQuantity(modalData.stan_crem)}
          </div>
        ) : null}
        {/* wino*/}
        {modalData.stan_wino ? (
          <div className={classes.stan__display}>
            <p>Wino: {modalData.stan_wino} sztuk</p>
            {checkQuantity(modalData.stan_wino)}{" "}
          </div>
        ) : null}
        {/* jw*/}
        {modalData.stan_jw ? (
          <div className={classes.stan__display}>
            {" "}
            <p>Jw: {modalData.stan_jw} sztuk</p>
            {checkQuantity(modalData.stan_jw)}{" "}
          </div>
        ) : null}
        {/* jd*/}
        {modalData.stan_jd >= 0 && (
          <div className={classes.stan__display}>
            <p>Jd: {modalData.stan_jd} sztuk</p>{" "}
            {checkQuantity(modalData.stan_jd)}
          </div>
        )}

        {/* haineken*/}
        {modalData.stan_haineken ? (
          <div className={classes.stan__display}>
            <p>Haineken: {modalData.stan_haineken} sztuk</p>{" "}
            {checkQuantity(modalData.stan_haineken)}
          </div>
        ) : null}
        {/* tyskie*/}
        {modalData.stan_tyskie ? (
          <div className={classes.stan__display}>
            <p>Tyskie: {modalData.stan_tyskie} sztuk</p>{" "}
            {checkQuantity(modalData.stan_tyskie)}
          </div>
        ) : null}
        {/* TECHNOLOGIE */}
        <div className={classes.technologie__wrapper}>
          <p className={classes.technologie}>technologie:</p>
          <div className={classes.technologie__container}>
            {/* TECHNOLOGIA 1 */}
            {modalData.technologie === "1" && (
              <>
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
              </>
            )}
            {/* TECHNOLOGIA 2 */}
            {modalData.technologie === "2" && (
              <>
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
              </>
            )}
            {/* TECHNOLOGIA 3 */}
            {modalData.technologie === "3" && (
              <>
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
              </>
            )}
            {/* TECHNOLOGIA 4 */}
            {modalData.technologie === "4" && (
              <>
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
              </>
            )}
            {/* TECHNOLOGIA 5 */}
            {modalData.technologie === "5" && (
              <>
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
              </>
            )}
            {/* TECHNOLOGIA 6 */}
            {modalData.technologie === "6" && (
              <>
                <img
                  className={classes.tech__img}
                  src="/images/Technologie/laser.webp"
                ></img>
                <img
                  className={classes.tech__img}
                  src="/images/Technologie/grafika.webp"
                ></img>
              </>
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
              <>
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
              </>
            )}
            {/* TECHNOLOGIA 10 */}
            {modalData.technologie === "10" && (
              <>
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
              </>
            )}
            {/* TECHNOLOGIA 11 */}
            {modalData.technologie === "11" && (
              <>
                <img
                  className={classes.tech__img}
                  src="/images/Technologie/cmyk.webp"
                ></img>

                <img
                  className={classes.tech__img}
                  src="/images/Technologie/grafika.webp"
                ></img>
              </>
            )}
            {/* CHECK FOR PLOMIEN PROPERTIES */}
            {modalData.plomien === "1" && (
              <img
                className={classes.tech__img}
                src="/images/Technologie/plomien1.webp"
              ></img>
            )}
            {modalData.plomien === "2" && (
              <img
                className={classes.tech__img}
                src="/images/Technologie/plomien2.webp"
              ></img>
            )}
            {modalData.plomien_regulowany === "1" && (
              <img
                className={classes.tech__img}
                src="/images/Technologie/regulowany1.webp"
              ></img>
            )}
            {modalData.plomien_regulowany === "2" && (
              <img
                className={classes.tech__img}
                src="/images/Technologie/regulowany2.webp"
              ></img>
            )}
            {/* CHECK FOR CUSTOM SIZE*/}
            {modalData.dowolny_ksztalt === true && (
              <img
                className={classes.tech__img}
                src="/images/Technologie/dowolny.webp"
              ></img>
            )}
          </div>
        </div>
      </div>

      {/* Modal Footer */}
      <div className={classes.modal__footer}>
        {" "}
        <div className={classes.details__logo}>
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
            <div className={classes.email}>
              <Icon icon="ic:baseline-email" />
              <p>Email: hurtownia@rezon.eu</p>
            </div>
          </div>
          <div className={classes.modal__logo_container}>
            <img src="/images/logo4.jpg" className={classes.logo}></img>
            <img src="/images/logo3.jpg" className={classes.logo}></img>
            <img src="/images/logo2.jpg" className={classes.logo}></img>
            <img src="/images/logo1.jpg" className={classes.logo}></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
