import { createStore, combineReducers } from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';
import categoriesReducer from './categories.js';
import productReducer from './products.js';
import cartReducer from './cart.js';

const reducers = combineReducers({
  categories: categoriesReducer,
  products: productReducer,
  cart: cartReducer,
})

const store = () => {
  return createStore(reducers, composeWithDevTools()); // we pass our reducer(s), and middlewares.
}

export default store;
