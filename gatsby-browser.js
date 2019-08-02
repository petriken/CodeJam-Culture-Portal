// import React from 'react';
// import { Provider } from 'react-redux';
// import { addLocaleData } from 'react-intl';
// import en from 'react-intl/locale-data/en';
// import be from 'react-intl/locale-data/be';
// import ru from 'react-intl/locale-data/ru';
// import ConnectedIntlProvider from './src/ConnectedIntlProvider';

// import store from './src/store/store';

// addLocaleData([...en, ...be, ...ru]);

// export const wrapRootElement = ({ element }) => {
//   return (
//     <Provider store={store}><ConnectedIntlProvider>{element}</ConnectedIntlProvider></Provider>
//   );
// }
export { default as wrapRootElement } from './src/state/ReduxWrapper';