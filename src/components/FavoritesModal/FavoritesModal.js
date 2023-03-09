import React from "react";
import classes from "./favoritesModal.module.css";
import { Icon } from "@iconify/react";
import { useDispatch, useSelector } from "react-redux";
import { closeFavorites } from "@/state/modalSlice";
import ProductCard from "@/components/productCard/ProductCard";
import PageHeading from "../PageHeading/PageHeading";
const FavoritesModal = () => {
  const modalFavorites = useSelector((state) => state.data.favoriteProducts);

  const dispatch = useDispatch();
  const [isSSR, setIsSSR] = React.useState(true);

  React.useEffect(() => {
    setIsSSR(false);
  }, []);

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
            {/* <h1 className={classes.h1}>Twoje Ulubione Produkty.</h1> */}

            <div className={classes.favorites__container}>
              {modalFavorites.map((item) => (
                <ProductCard key={item.id} {...item} />
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
    // !isSSR && (
    //   <>
    //     <div className={classes.modal} id="favorites">
    //       <button onClick={() => dispatch(closeFavorites())}>CLICK HERE</button>

    //       {modalFavorites.map((item) => (
    //         <div key={item.id}>{item.identyfikator}</div>
    //       ))}
    //     </div>
    //   </>
    // );
  }
};

export default FavoritesModal;
