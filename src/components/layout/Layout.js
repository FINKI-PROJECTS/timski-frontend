import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

const Layout = ({ children }) => (
  <React.Fragment>
    <Header />
    <main>{children}</main>
    <Footer />
  </React.Fragment>
);

export default Layout;
