import "@/styles/globals.css";
import Layout from "@/components/Layout.js";
import { Provider } from "react-redux";
import { store } from "../state/store/store.js";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />{" "}
      </Layout>
    </Provider>
  );
}
