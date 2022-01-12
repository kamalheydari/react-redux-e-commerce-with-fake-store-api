import {
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_ERROR,
  GET_PRODUCTS_SUCCESS,
} from "./actions";

const initialState = {
  products_loading: false,
  products_error: false,
  products: [],
  popular_products: [],
};

const productsReducer = (state = initialState, action) => {
  let { type, payload } = action;

  if (type === GET_PRODUCTS_BEGIN) {
    return { ...state, products_loading: true };
  }

  if (type === GET_PRODUCTS_SUCCESS) {
    const popular_products = payload.filter(
      (product) => product.rating.rate >= 4.5
    );

    return {
      ...state,
      products_loading: false,
      products: payload,
      popular_products,
    };
  }

  if (type === GET_PRODUCTS_ERROR) {
    return { ...state, products_loading: false, products_error: true };
  }

  return state;
};

export default productsReducer;
