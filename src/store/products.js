import axios from 'axios';

const initialState = {
  //count: 0,
  productList: [],
  activeProduct: '',
  products: [],
};

export default function productReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case 'ACTIVE':
      const products = getProducts(payload.category);
      return { ...state, products: products }
    case 'LOAD_PRODUCTS':
      return {
        //count: payload.count,
        productList: payload.results,
      }
    default:
      return state;
  }
}

export const getProducts = (category) => {
  const products = initialState.productList;
  const response = products.filter(product => product.category === category);
  return response;
}

export const loadProducts = () => (dispatch, getState) => {
  return axios.get('https://api-js401.herokuapp.com/api/v1/products')
    .then(response => {
      dispatch({
        type: 'LOAD_PRODUCTS',
        payload: response.data
      });
    });
}
