import produce from "immer";
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

const singelProductReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case GET_SINGLE_PRODUCT_BEGIN:
        draft.single_product_loading = true;
        break;

      case GET_SINGLE_PRODUCT_SUCCESS:
        draft.single_product_loading = false;
        draft.single_product = action.payload;
        break;

      case GET_SINGLE_PRODUCT_ERROR:
        draft.single_product_loading = false;
        draft.single_product_error = true;
        break;

      default:
        return draft;
    }
  });



export default singelProductReducer;
