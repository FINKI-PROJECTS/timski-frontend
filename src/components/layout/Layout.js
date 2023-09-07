import React from "react";
import Header from "./Header/Header";

const Layout = ({ children }) => (
  <React.Fragment>
    <Header />
    <main>{children}</main>
  </React.Fragment>
);

export default Layout;
