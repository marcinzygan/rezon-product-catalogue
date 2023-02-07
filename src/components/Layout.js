import React from "react";
import NavBar from "./NavBar/NavBar";

const Layout = (props) => {
  return (
    <>
      <NavBar />
      <main className="app__layout">{props.children}</main>
    </>
  );
};

export default Layout;
