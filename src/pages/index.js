import Head from "next/head";
import classes from "../styles/index.module.css";
import { useSelector } from "react-redux";

import ProductCard from "@/components/productCard/ProductCard";
import PaginationMenu from "@/components/paginationMenu/PaginationMenu";
import CategoryCard from "@/components/CategoryCard/CategoryCard";
import ProductModal from "@/components/ProductModal/ProductModal";
import Footer from "@/components/Footer/Footer";
import { useEffect } from "react";

export default function Home() {
  const pageNumber = useSelector((state) => state.page.currentPage);
  const productCards = useSelector((state) => state.data.productCards);

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

  useEffect(() => {
    if (document.readyState === "complete") {
      window.addEventListener("scroll", function () {
        const scrollPosition = window.pageYOffset;
        console.log(scrollPosition);
        const arrow = document.querySelector("#arrow");
        console.log(arrow);
        if (scrollPosition > 500) {
          arrow.classList.add("show__arrow");
        } else {
          arrow.classList.remove("show__arrow");
        }
      });
    } else {
      // return () => document.removeEventListener("scroll", handler);
    }
  }, []);
  return (
    <>
      <Head>
        <title>Rezon.eu Katalog</title>
        <meta name="description" content="Katalog Online Rezon.eu" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={classes.cards__container} id="cards">
        {productCards.map((card) => {
          if (card.displayCategory === true) {
            return <CategoryCard key={card.id} category={card.category} />;
          } else {
            return <ProductCard key={card.id} {...card} />;
          }
        })}
      </div>

      {/* <PaginationMenu numberOfPages={numberOfPages} /> */}
      <ProductModal />
      <Footer />
    </>
  );
}
