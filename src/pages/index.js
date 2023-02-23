import Head from "next/head";
import classes from "../styles/index.module.css";
import { useSelector } from "react-redux";

import ProductCard from "@/components/productCard/ProductCard";
import PaginationMenu from "@/components/paginationMenu/PaginationMenu";
import CategoryCard from "@/components/CategoryCard/CategoryCard";
import ProductModal from "@/components/ProductModal/ProductModal";

import FilterMenu from "@/components/filterMenu/FilterMenu";
import SearchBar from "@/components/SearchBar/SearchBar";
import SearchNavigation from "@/components/SearchNavigation/SearchNavigation";

export default function Home() {
  // const pageNumber = useSelector((state) => state.page.currentPage);
  const productCards = useSelector((state) => state.data.productCards);
  const displaySearchProducts = useSelector(
    (state) => state.search.displaySearchProducts
  );
  const isSearchActive = useSelector((state) => state.search.isSearchActive);
  // console.log(productCards);
  //Our search filter function
  // const searchFilter = (data) => {
  //   const dataArray = data.map((product) => {
  //     return product.identyfikator ? product.identyfikator : "";
  //   });
  //   console.log(dataArray);
  //   return dataArray.filter((identyfiaktor) =>
  //     identyfiaktor.includes("otwieracz".toUpperCase())
  //   );
  // };
  // console.log(searchFilter(productCards));
  // //PAGINATION LOGIC
  // // amount of productCards per page
  // const cardsPerPage = 199;
  // // how many cards was shown to current page number
  // const cardsSeen = pageNumber * cardsPerPage;
  // // calculate amount of pages required
  // const numberOfPages = Math.ceil(productCards.length / cardsPerPage);
  // // display function to show only 1 card per page
  // const displayCards = productCards.slice(
  //   cardsSeen - 199,
  //   cardsPerPage - 199 + cardsSeen
  // );

  // DISPLAY ALL PRODUCTS
  const allProducts = productCards.map((card) => {
    if (card.displayCategory === true) {
      return <CategoryCard key={card.id} category={card.category} />;
    } else {
      return <ProductCard key={card.id} {...card} />;
    }
  });

  // DISPLAY FILTER BY SEARCH PRODUCTS
  const searchProducts = displaySearchProducts.map((card) => {
    if (card.displayCategory === true) {
      return <CategoryCard key={card.id} category={card.category} />;
    } else {
      return <ProductCard key={card.id} {...card} />;
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
      </Head>
      <SearchNavigation />
      {/* <div className={classes.filter__menu}>
        <SearchBar />
        <FilterMenu />
      </div> */}
      <div className={classes.cards__container} id="cards">
        {isSearchActive ? searchProducts : allProducts}
        {/* {displaySearchProducts.map((card) => {
          return card.identyfikator && <ProductCard key={card.id} {...card} />;
        })} */}
        {/* {productCards.map((card) => {
          if (card.displayCategory === true) {
            return <CategoryCard key={card.id} category={card.category} />;
          } else {
            return <ProductCard key={card.id} {...card} />;
          }
        })} */}
      </div>

      {/* <PaginationMenu numberOfPages={numberOfPages} /> */}
      <ProductModal />
    </>
  );
}
