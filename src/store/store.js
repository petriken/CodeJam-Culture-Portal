import { createStore } from 'redux';

const initialState = {
  term: '',
  city: '',
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
    default:
      return state;
  }
}

const store = createStore(appState);

export default store;
