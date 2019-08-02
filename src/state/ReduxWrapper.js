import React from 'react';
import { Provider } from 'react-redux';
import { createStore as reduxCreateStore } from 'redux';
import rootReducer from '.';
import { addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import be from 'react-intl/locale-data/be';
import ru from 'react-intl/locale-data/ru';
import ConnectedIntlProvider from '../ConnectedIntlProvider';

addLocaleData([...en, ...be, ...ru]);

const createStore = () => reduxCreateStore(rootReducer);

export default ({ element }) => (
  <Provider store={createStore()}><ConnectedIntlProvider>{element}</ConnectedIntlProvider></Provider>
);