import React from "react";
import classes from "./favoritesModal.module.css";
import { useDispatch, useSelector } from "react-redux";
import { closeFavorites } from "@/state/modalSlice";
import ProductCard from "@/components/productCard/ProductCard";
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
            <button onClick={() => dispatch(closeFavorites())}>
              CLICK HERE
            </button>
            <div className={classes.favorites__container}>
              {modalFavorites.map((item) => (
                <ProductCard key={item.id} {...item} />
              ))}
            </div>
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
