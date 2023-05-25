import React from "react";
import NavBar from "./NavBar/NavBar";
import Footer from "./Footer/Footer";
const Layout = (props) => {
  return (
    <>
      <NavBar />
      <div>{props.children}</div>
      {/* <div className="info">Aktualizacja danych. Przepraszamy!</div> */}
      <Footer />
    </>
  );
};

export default Layout;
