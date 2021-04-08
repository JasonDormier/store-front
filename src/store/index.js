import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import categoriesReducer from './categories.js';
import productReducer from './products.js';
import cartReducer from './cart.js';
import thunk from 'redux-thunk';

const reducers = combineReducers({
  categories: categoriesReducer,
  products: productReducer,
  cart: cartReducer,
})

const store = () => {
  return createStore(reducers, composeWithDevTools(applyMiddleware(thunk))); // we pass our reducer(s), and middlewares.
}

export default store;
