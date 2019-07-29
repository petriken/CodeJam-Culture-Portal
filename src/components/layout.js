import React from "react";
import { Provider } from 'react-redux';
import store from '../store/store';

import Header from "./Header/Header";
import Footer from "./Footer/Footer";

export default ({ children }) => (
  <><Provider store={store}>
    <Header />
    {children}
    <Footer />
  </Provider>
  </>
);