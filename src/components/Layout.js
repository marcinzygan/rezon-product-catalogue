import React from "react";
import NavBar from "./NavBar/NavBar";
import Footer from "./Footer/Footer";
const Layout = (props) => {
  return (
    <>
      <NavBar />
      <div className="app__layout">{props.children}</div>
      <Footer />
    </>
  );
};

export default Layout;
