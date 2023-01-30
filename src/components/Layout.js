import React from "react";
import NavBar from "./NavBar";

const Layout = (props) => {
  return (
    <>
      <NavBar />
      <main className="">{props.children}</main>
    </>
  );
};

export default Layout;
