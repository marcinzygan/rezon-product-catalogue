import React from "react";
import classes from "./productModal.module.css";
import { closeModal } from "@/state/modalSlice";
import { useDispatch, useSelector } from "react-redux";
import { Icon } from "@iconify/react";
import ImageSlider from "../ImageSlider/ImageSlider";
import { closeSlider } from "@/state/imageSliderSlice";
import { useEffect } from "react";
import { useRouter } from "next/router";
const ProductModal = () => {
  const modalData = useSelector((state) => state.modal.modalContent);
  const sliderLength = useSelector((state) => state.slider.sliderLength);

  const dispatch = useDispatch();
  const router = useRouter();

  // FUNCTION TO DISPATCH MULTIPLE ACTIONS
  function closeModalAction() {
    return (dispatch) => {
      // router.back("/");
      dispatch(closeModal());
      dispatch(closeSlider());
    };
  }
  // UseEffect to close modal with browser back button
  useEffect(() => {
    window.onpopstate = () => {
      // router.push("/");
      dispatch(closeModal());
      dispatch(closeSlider());
    };
  }, [router]);
  // FUNCTION TO CHECK ALL STORAGE LEVELS
  function checkQuantity(stock) {
    // check for HighQuantity
    if (
      (stock !== 0 && stock !== null && stock >= modalData.stock_optimal) ||
      (stock !== 0 &&
        stock !== null &&
        stock >= (modalData.stock_optimal * 80) / 100)
    ) {
      return (
        <img
          src="/images/duza_dostepnosc.svg"
          className={classes.dostepnosc}
        ></img>
      );
      // check for MidQuantity
    } else if (
      stock < (modalData.stock_optimal * 80) / 100 &&
      stock >= (modalData.stock_optimal * 50) / 100
    ) {
      return (
        <img
          src="/images/srednia_dostepnosc.svg"
          className={classes.dostepnosc}
        ></img>
      );
      // check for LowQuantity
    } else if (stock < (modalData.stock_optimal * 50) / 100 && stock !== 0) {
      return (
        <img
          src="/images/mala_dostepnosc.svg"
          className={classes.dostepnosc}
        ></img>
      );
      //check for noQuantity
    } else if (stock === 0) {
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
        <div className={classes.modal__info_container}>
          {/* Product Name */}
          <div className={classes.modal__name}>
            {modalData.name}{" "}
            <div className={classes.favorite__icon_container}></div>
          </div>
          {/* Product code */}
          <div className={classes.modal__kod}>
            Kod Produktu:{" "}
            <span className={classes.modal__span}>{modalData.pc_id}</span>
          </div>
          {/* Product price */}
          <div className={classes.cena}>
            Cena brutto:{" "}
            <span className={classes.modal__span}>
              {modalData.price} zł / sztukę
            </span>
          </div>
          {typeof modalData.price === "string" ? (
            ""
          ) : (
            <div className={classes.cena}>
              Cena netto:{" "}
              <span className={classes.modal__span}>
                {(modalData.price / 1.23).toFixed(2)} zł / sztukę
              </span>
            </div>
          )}
          {/* STAN MAGAZYNOWY PRODUKTU  */}
          {modalData.stock >= 0 && (
            <div className={classes.stan__display}>
              {checkQuantity(modalData.stock)}
            </div>
          )}
          {/* PRODUCT TXT */}
          <div className={classes.modal__opis}>
            {modalData.description}
          </div>{" "}
          {/* CHECK IF PRODUCT IS SOLD IN SET */}
          {modalData.compilation && (
            <>
              <div className={classes.modal__opis}>
                <p className={classes.zestaw__opis_span}>
                  Produkt dostępny również w zestawie :
                </p>{" "}
                {modalData.compilation_description}{" "}
                {modalData.compilation_description_2 && (
                  <p>{modalData.opis_zestaw_2}</p>
                )}
                {/* <p className={classes.cena + " " + classes.zestaw_total_cena}>
                  {"Razem :" + " "}
                  <span className={classes.modal__span}>
                    {modalData.compilation_quantityTotal} sztuk.
                  </span>
                </p> */}
                {modalData.compilation && (
                  <div className={classes.cena}>
                    Cena za zestaw:{" "}
                    <span className={classes.modal__span}>
                      {modalData.compilation_price} zł brutto .
                    </span>
                  </div>
                )}
              </div>

              {modalData.stand === true && (
                <>
                  <p className={classes.ekspozytor + " " + classes.modal__opis}>
                    Do zestawu dołączamy stojak / ekspozytor.
                  </p>

                  <div className={classes.zestaw__opis}>
                    <p className={classes.uwaga}>
                      <span className={classes.zestaw__opis_span}>Uwaga:</span>{" "}
                      Stojak Ekspozycyjny - Oddany w odpłatny Depozyt - Kaucję.
                      Na Stojaku mogą znajdować się wyłącznie produkty zakupione
                      w firmie REZON i przeznaczone do sprzedaży na danym
                      stojaku. Zwrot depozytu nastąpi po oddaniu kompletnego
                      stojaka. (Wszystkie elementy składowe). Stojak może
                      posiadać ślady normalnego użytkowania i eksploatacji. CENA
                      : 300 ZŁ BRUTTO
                    </p>
                  </div>
                </>
              )}
            </>
          )}{" "}
          {modalData.catalogue && (
            <div className={classes.forms}>
              Katalog Dostępnych Wzorów{" "}
              <a
                href={modalData.catalogue}
                target="_blank"
                className={classes.form__link}
              >
                TUTAJ
              </a>
            </div>
          )}
          {modalData.form && (
            <div className={classes.forms}>
              Formularz Zamówień Dostępny{" "}
              <a
                href={modalData.formularz}
                target="_blank"
                className={classes.form__link}
              >
                TUTAJ
              </a>
            </div>
          )}
        </div>

        {/* IMAGE SLIDER */}

        <div className={classes.slider__container}>
          {/* IF storage lvl of product === 0 display overlay on image  */}
          {modalData.stock === 0 && (
            <div className={classes.brak__produktu}>BRAK PRODUKTU</div>
          )}
          {/* IF there is any images in data display slider  */}
          {sliderLength > 0 && (
            // display noProduct class if storage lvl === 0
            <div
              className={
                modalData.stock === 0 ? classes.noProduct__overlay : ""
              }
            >
              {" "}
              <ImageSlider images={modalData.images} />
            </div>
          )}

          <div className={classes.modal__wymiary}>
            Wymiary:{" "}
            <span className={classes.modal__span}>{modalData.dimensions}</span>
          </div>
        </div>
      </div>

      {/* TECHNOLOGIE */}
      <div className={classes.technologie__wrapper}>
        <p className={classes.technologie}>technologie:</p>
        <div className={classes.technologie__container}>
          {/* TECHNOLOGIA 1 */}
          {modalData.technology === 1 && (
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
          {modalData.technology === 2 && (
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
          {/* TECHNOLOGIA 2.1 */}
          {modalData.technology === 2.1 && (
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
          {/* TECHNOLOGIA 3 */}
          {modalData.technology === 3 && (
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
          {modalData.technology === 4 && (
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
          {modalData.technology === 5 && (
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
          {modalData.technology === 6 && (
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
          {modalData.technology === 7 && (
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
          {modalData.technology === 8 && (
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
          {modalData.technology === 10 && (
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
          {modalData.technology === 11 && (
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
          {/* TO DO */}
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
          {modalData.custom_shape === true && (
            <img
              className={classes.tech__img}
              src="/images/Technologie/dowolny.webp"
            ></img>
          )}
          {/* CHECK IF PRODUCT GETS STAND (STOJAK , EKSPOZYTOR)*/}
          {modalData.stand === true && (
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
        {/* TO DO */}
        {modalData.stock_additional >= 0 && (
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
