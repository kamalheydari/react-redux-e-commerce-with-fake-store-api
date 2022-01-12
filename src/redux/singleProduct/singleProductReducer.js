import {
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
} from "./actions";

const initialState = {
  products_loading: false,
  products_error: false,
  products: [],
  popular_products: [],
  single_product_loading: false,
  single_product_error: false,
  single_product: {},
};

const singelProductReducer = (state = initialState, action) => {
  let { type, payload } = action;

  if (type === GET_SINGLE_PRODUCT_BEGIN) {
    return { ...state, single_product_loading: true };
  }

  if (type === GET_SINGLE_PRODUCT_SUCCESS) {
    return {
      ...state,
      single_product_loading: false,
      single_product: payload,
    };
  }

  if (type === GET_SINGLE_PRODUCT_ERROR) {
    return {
      ...state,
      single_product_loading: false,
      single_product_error: true,
    };
  }

  return state;
};

export default singelProductReducer;
