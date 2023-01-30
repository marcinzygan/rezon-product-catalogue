import Layout from "@/components/Layout.js";
import "@/styles/globals.css";
import { Provider } from "react-redux";
import { store } from "./store/store.js";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />{" "}
      </Layout>
    </Provider>
  );
}
