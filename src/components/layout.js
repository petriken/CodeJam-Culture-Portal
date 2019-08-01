import React from "react";
import { addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import be from 'react-intl/locale-data/be';
import ru from 'react-intl/locale-data/ru';
import ConnectedIntlProvider from '../ConnectedIntlProvider';

import Header from "./Header/Header";
import Footer from "./Footer/Footer";

addLocaleData([...en, ...be, ...ru]);

export default ({ children }) => (
  <ConnectedIntlProvider>
    <>
      <Header />
      {children}
      <Footer />
    </>
  </ConnectedIntlProvider>
);