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
      return (
        <img
          src="/images/brak_dostepnosci.svg"
          className={classes.dostepnosc}
        ></img>
      );
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
              {(modalData.cena / 1.23).toFixed(2)} zł / sztukę
            </span>
          </div>
          {/* STAN MAGAZYNOWY PRODUKTU  */}
          {modalData.stan_magazynowy >= 0 && (
            <div className={classes.stan__display}>
              {checkQuantity(modalData.stan_magazynowy)}
            </div>
          )}
          {/* PRODUCT TXT */}
          <div className={classes.modal__opis}>{modalData.opis}</div>{" "}
          {/* CHECK IF PRODUCT IS SOLD IN SET */}
          {modalData.zestaw && (
            <>
              <div className={classes.modal__opis}>
                <p className={classes.zestaw__opis_span}>
                  Produkt dostępny również w zestawie :
                </p>{" "}
                {modalData.opis_zestaw}{" "}
                {modalData.opis_zestaw_2 && <p>{modalData.opis_zestaw_2}</p>}
                <p className={classes.cena + " " + classes.zestaw_total_cena}>
                  {"Razem :" + " "}
                  <span className={classes.modal__span}>
                    {modalData.zestaw_total} sztuki.
                  </span>
                </p>
                {modalData.zestaw && (
                  <div className={classes.cena}>
                    Cena za zestaw:{" "}
                    <span className={classes.modal__span}>
                      {modalData.cena_zestaw} zł brutto .
                    </span>
                  </div>
                )}
                <p className={classes.ekspozytor}>
                  Do zestawu dołączamy stojak / ekspozytor.
                </p>
              </div>
              <div className={classes.zestaw__opis}>
                <p className={classes.uwaga}>
                  <span className={classes.zestaw__opis_span}>Uwaga:</span>{" "}
                  Stojaki i ekspozytory które udostępnia firma Rezon wraz ze
                  sprzedawanym towarem, są własnością sprzedawcy. W przypadku
                  umieszczenia na firmowym stojaku innego towaru niż zakupiony w
                  firmie Rezon, stojak należy zwrócić do sprzedawcy, lub
                  zapłacić jego równowartość w wysokości 500 zł netto, a także
                  za każdy haczyk 1,5 zł netto.
                </p>
              </div>
            </>
          )}
        </div>
        {/* IMAGE SLIDER */}

        <div className={classes.slider__container}>
          {/* IF storage lvl of product === 0 display overlay on image  */}
          {modalData.stan_magazynowy === 0 && (
            <div className={classes.brak__produktu}>BRAK PRODUKTU</div>
          )}
          {/* IF there is any images in data display slider  */}
          {sliderLength > 0 && (
            // display noProduct class if storage lvl === 0
            <div
              className={
                modalData.stan_magazynowy === 0
                  ? classes.noProduct__overlay
                  : ""
              }
            >
              {" "}
              <ImageSlider images={modalData.slider_images} />
            </div>
          )}

          <div className={classes.modal__wymiary}>
            Wymiary:{" "}
            <span className={classes.modal__span}>{modalData.wymiary}</span>
          </div>
        </div>
      </div>

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
          {/* CHECK IF PRODUCT IS SOLD IN SET (ZESTAW)*/}
          {modalData.zestaw === true && (
            <img
              className={classes.tech__img}
              src="/images/Technologie/zestaw.webp"
            ></img>
          )}
        </div>
      </div>
      <div className={classes.dodatkowyStan__container}>
        {/* DODATKOWE STANY MAGAZYNOWE  */}
        {/* MAGNES OTWIERACZ BUTELKA*/}
        {/* malibu */}
        {modalData.stan_malibu >= 0 && (
          <div className={classes.stan__display}>
            <img
              src="/images/Otwieracze/MAGNES_OTWIERACZ_BUTELKA/rum_biały.jpg"
              className={classes.stan__img}
            ></img>
            {checkQuantity(modalData.stan_malibu)}
          </div>
        )}
        {/* cream*/}
        {modalData.stan_crem >= 0 && (
          <div className={classes.stan__display}>
            <img
              src="/images/Otwieracze/MAGNES_OTWIERACZ_BUTELKA/advocat_mire.jpg"
              className={classes.stan__img}
            ></img>
            {checkQuantity(modalData.stan_crem)}
          </div>
        )}
        {/* wino*/}
        {modalData.stan_wino >= 0 && (
          <div className={classes.stan__display}>
            <img
              src="/images/Otwieracze/MAGNES_OTWIERACZ_BUTELKA/wino.jpg"
              className={classes.stan__img}
            ></img>
            {checkQuantity(modalData.stan_wino)}
          </div>
        )}
        {/* jw*/}
        {modalData.stan_jw >= 0 && (
          <div className={classes.stan__display}>
            <img
              src="/images/Otwieracze/MAGNES_OTWIERACZ_BUTELKA/whiskey_retro.jpg"
              className={classes.stan__img}
            ></img>
            {checkQuantity(modalData.stan_jw)}{" "}
          </div>
        )}
        {/* jd*/}
        {modalData.stan_jd >= 0 && (
          <div className={classes.stan__display}>
            <img
              src="/images/Otwieracze/MAGNES_OTWIERACZ_BUTELKA/whiskey_gold.jpg"
              className={classes.stan__img}
            ></img>
            {checkQuantity(modalData.stan_jd)}
          </div>
        )}

        {/* haineken*/}
        {modalData.stan_haineken >= 0 && (
          <div className={classes.stan__display}>
            <img
              src="/images/Otwieracze/MAGNES_OTWIERACZ_BUTELKA/piwo_zielone.jpg"
              className={classes.stan__img}
            ></img>
            {checkQuantity(modalData.stan_haineken)}
          </div>
        )}
        {/* tyskie*/}
        {modalData.stan_tyskie >= 0 && (
          <div className={classes.stan__display}>
            <img
              src="/images/Otwieracze/MAGNES_OTWIERACZ_BUTELKA/piwo_brazowe.jpg"
              className={classes.stan__img}
            ></img>{" "}
            {checkQuantity(modalData.stan_tyskie)}
          </div>
        )}
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
