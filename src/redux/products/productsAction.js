import {
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_ERROR,
  GET_PRODUCTS_SUCCESS,
} from "../../utils/actions";

const getProductsBegin = () => ({ type: GET_PRODUCTS_BEGIN });

const getProductsSuccess = (products) => ({
  type: GET_PRODUCTS_SUCCESS,
  payload: products,
});

const getProductsError = () => ({ type: GET_PRODUCTS_ERROR });

export const fetchProducts = () => {
  return async (dispatch) => {
    dispatch(getProductsBegin());
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const products = await response.json();
      dispatch(getProductsSuccess(products));
    } catch (error) {
      dispatch(getProductsError());
    }
  };
};
