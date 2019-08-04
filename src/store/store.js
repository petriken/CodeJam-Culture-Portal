import { createStore } from 'redux';
import messages from '../translations';

const initialState = {
  term: '',
  city: '',
  locales: {
    lang: typeof localStorage !== 'undefined' && localStorage.getItem('gatsby-intl-language') ?
      localStorage.getItem('gatsby-intl-language') : 'ru',
    messages: typeof localStorage !== 'undefined' && localStorage.getItem('gatsby-intl-language') ?
      messages[localStorage.getItem('gatsby-intl-language')] : messages['ru'],
  },
  person: typeof localStorage !== 'undefined' && localStorage.getItem('person') ?
    +localStorage.getItem('person') : 1,
};

function appState(state = initialState, action) {
  switch (action.type) {
    case 'term':
      return Object.assign({}, state, {
        term: action.value,
      });
    case 'city':
      return Object.assign({}, state, {
        city: action.value,
      });
    case 'locales':
      return Object.assign({}, state, {
        locales: action.value,
      });
    case 'person':
      return Object.assign({}, state, {
        person: action.value,
      });
    default:
      return state;
  }
}

const store = createStore(appState);

export default store;
