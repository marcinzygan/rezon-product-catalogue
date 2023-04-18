import React from "react";
import classes from "./favoritesModal.module.css";
import { Icon } from "@iconify/react";
import { useDispatch, useSelector } from "react-redux";
import { closeFavorites } from "@/state/modalSlice";
import FavoritesCard from "@/components/FavoritesCard/FavoritesCard";
import PageHeading from "../PageHeading/PageHeading";
import { setIsSSR } from "@/state/productsDataSlice";
const FavoritesModal = () => {
  const modalFavorites = useSelector((state) => state.data.favoriteProducts);
  const isSSR = useSelector((state) => state.data.isSSR);
  const dispatch = useDispatch();
  // SET isSSR to false to avoid Hydration Error
  React.useEffect(() => {
    dispatch(setIsSSR());
  }, []);
  console.log(modalFavorites);
  {
    return (
      <div className={classes.modal} id="favorites">
        {!isSSR && (
          <main>
            <Icon
              className={classes.icon}
              icon="line-md:menu-to-close-alt-transition"
              onClick={() => dispatch(closeFavorites())}
            />
            <PageHeading
              heading={"Twoje Ulubione Produkty."}
              subHeading={"przeglądaj i zarządzaj swoją listą"}
            />

            <div className={classes.favorites__container}>
              {modalFavorites.map((item) => (
                <FavoritesCard key={item.id} {...item} />
              ))}
            </div>
            <Icon
              icon="ic:round-arrow-back-ios-new"
              className={classes.icon__back}
              onClick={() => dispatch(closeFavorites())}
            />
          </main>
        )}
      </div>
    );
  }
};

export default FavoritesModal;
