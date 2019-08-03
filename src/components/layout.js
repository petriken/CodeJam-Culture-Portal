import React from "react";
import favicon from '../img/favicon.ico';
import Helmet from 'react-helmet';

import Header from "./Header/Header";
import Footer from "./Footer/Footer";


export default ({ children }) => (
  <>
    <Helmet>
      <link rel="icon" href={favicon} />
    </Helmet>
    <Header />
    {children}
    <Footer />
  </>
);