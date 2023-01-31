import Head from "next/head";
import classes from "../styles/index.module.css";
import { useDispatch, useSelector } from "react-redux";

import ProductCard from "@/components/productCard/ProductCard";

export default function Home() {
  const dispatch = useDispatch();
  const pageNumber = useSelector((state) => state.page.currentPage);
  const productCards = useSelector((state) => state.data.productCards);

  //PAGINATION LOGIC
  // amount of productCards per page
  const cardsPerPage = 2;
  // how many cards was shown to current page number
  const cardsSeen = pageNumber * cardsPerPage;
  console.log(cardsSeen);
  // calculate amount of pages required
  const numberOfPages = Math.ceil(productCards.length / cardsPerPage);
  // display function to show only 2 cards per page
  const displayCards = productCards.slice(
    cardsSeen - 2,
    cardsPerPage - 2 + cardsSeen
  );

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className={classes.cards__container}>
          {displayCards.map((card) => (
            <ProductCard key={card.id} {...card} />
          ))}
        </div>
      </main>
    </>
  );
}
