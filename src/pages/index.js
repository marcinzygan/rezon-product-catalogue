import React from "react";
import Head from "next/head";
import classes from "../styles/index.module.css";
import { useSelector, useDispatch } from "react-redux";
import ProductCard from "@/components/productCard/ProductCard";
import CategoryCard from "@/components/CategoryCard/CategoryCard";
import ProductModal from "@/components/ProductModal/ProductModal";
import SearchNavigation from "@/components/SearchNavigation/SearchNavigation";
import { setData, fetchUserData } from "@/state/productsDataSlice";
import { fetchProductsData } from "@/state/productSearchSlice";
import FavoritesModal from "@/components/FavoritesModal/FavoritesModal";

export default function Home() {
  const dispatch = useDispatch();

  // USE EFFECT TO FETCH LOCAL STORAGE
  if (typeof window !== "undefined") {
    React.useEffect(() => {
      try {
        const favorites = JSON.parse(localStorage.getItem("Favorites")) || [];
        // console.log(favorites);
        dispatch(setFavProducts(favorites));
      } catch (e) {}
    }, [dispatch]);
  }
  // SET LOCAL STORAGE WHEN ITEM IS ADDED TO FAV
  const favoriteProducts = useSelector((state) => state.data.favoriteProducts);

  if (typeof window !== "undefined") {
    React.useEffect(() => {
      localStorage.setItem("Favorites", JSON.stringify(favoriteProducts));
    }, [favoriteProducts]);
  }
  if (typeof window !== "undefined") {
    React.useEffect(() => {
      dispatch(setData());
      dispatch(fetchUserData());
      dispatch(fetchProductsData());
    }, [dispatch]);
  }

  //
  const productCards = useSelector((state) => state.data.productCards);
  const displaySearchProducts = useSelector(
    (state) => state.search.displaySearchProducts
  );
  const isSearchActive = useSelector((state) => state.search.isSearchActive);

  // DISPLAY ALL PRODUCTS
  const allProducts = productCards.map((card) => {
    if (card.displayCategory === true) {
      return <CategoryCard key={card._id} category={card.category} />;
    } else {
      return <ProductCard key={card._id} {...card} />;
    }
  });

  // DISPLAY FILTER BY SEARCH PRODUCTS
  const searchProducts = displaySearchProducts.map((card) => {
    if (card.displayCategory === true) {
      return <CategoryCard key={card._id} category={card.category} />;
    } else {
      return <ProductCard key={card._id} {...card} />;
    }
  });

  //  RETURN JSX
  return (
    <>
      <Head>
        <title>Rezon.eu Katalog</title>
        <meta name="description" content="Katalog Online Rezon.eu" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="google-site-verification"
          content="ZS0520bmJbQk1Qtmx8tQ-4dFDOi3SMZtSmTiGZBK2a8"
        />
      </Head>
      <SearchNavigation />

      <main className={classes.cards__container} id="cards">
        {isSearchActive ? searchProducts : allProducts}
      </main>

      {/* <PaginationMenu numberOfPages={numberOfPages} /> */}

      <ProductModal />
      <FavoritesModal />
    </>
  );
}
