import "@/styles/globals.css";
import Layout from "@/components/Layout.js";
import { Provider } from "react-redux";
import { store } from "../state/store/store.js";
import { useEffect } from "react";
import { addListener } from "@reduxjs/toolkit";

export default function App({ Component, pageProps }) {
  // EVENT LISTNER FOR BACK TO TOP ARROW
  useEffect(() => {
    globalThis.addEventListener("scroll", function addListner() {
      const scrollPosition = window.pageYOffset;
      // select arrow element
      const arrow = document.querySelector("#arrow");

      if (scrollPosition > 500) {
        arrow.classList.add("show__arrow");
      } else {
        arrow.classList.remove("show__arrow");
      }
    });

    return () => globalThis.removeEventListener("scroll", addListener);
  }, [globalThis]);
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />{" "}
      </Layout>
    </Provider>
  );
}
