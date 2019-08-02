import React from "react";
import { wrapRootElement } from '../../gatsby-browser';

import Header from "./Header/Header";
import Footer from "./Footer/Footer";

export default ({ children }) => (
  <wrapRootElement>
    <Header />
    {children}
    <Footer />
  </wrapRootElement>
);