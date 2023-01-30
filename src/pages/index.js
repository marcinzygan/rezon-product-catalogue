import Head from "next/head";

import { useDispatch, useSelector } from "react-redux";
import { nextPage } from "@/state/paginationSlice";
import ProductCard from "@/components/productCard/ProductCard";

export default function Home() {
  const dispatch = useDispatch();
  const pageNumber = useSelector((state) => state.page.currentPage);
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div>HELLO</div>
        <button onClick={() => dispatch(nextPage())}>+</button>
        <p>{pageNumber}</p>
        <ProductCard />
      </main>
    </>
  );
}
