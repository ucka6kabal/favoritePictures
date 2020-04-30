import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, combineReducers } from 'redux';
import addToFavorites from './albums/addToFavorites';
import favoriteReducer from './albums/favoriteReducer';
import { Provider } from 'react-redux';

const reduceres = combineReducers({addToFavorites});

function saveToLocalStorage(state) {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state',serializedState);
  }
  catch(e) {
    console.log(e);
  }
}

function loadFromLocalStorage() {
  try {
    const serializedState = localStorage.getItem('state');
    if(serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  }
  catch(e) {
    console.log(e);
    return undefined;
  }
}

const favoriteLoader = loadFromLocalStorage();

const store = createStore(
  reduceres,
  favoriteLoader,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => saveToLocalStorage(store.getState()));
store.dispatch(favoriteReducer());

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
  document.getElementById('root')
);
