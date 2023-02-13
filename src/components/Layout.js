import React from "react";
import NavBar from "./NavBar/NavBar";
import Footer from "./Footer/Footer";
const Layout = (props) => {
  return (
    <>
      <NavBar />
      <main className="app__layout">{props.children}</main>
      <Footer />
    </>
  );
};

export default Layout;
