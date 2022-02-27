import produce from "immer";

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

const productsReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case GET_PRODUCTS_BEGIN:
        draft.products_loading = true;
        break;

      case GET_PRODUCTS_SUCCESS:
        const popular_products = action.payload.filter(
          (product) => product.rating.rate >= 4.5
        );
        draft.products_loading = false;
        draft.products = action.payload;
        draft.popular_products = popular_products;
        break;

      case GET_PRODUCTS_ERROR:
        draft.products_error = true;
        draft.products_loading = false;
        break;

      default:
        return draft;
    }
  });

export default productsReducer;
