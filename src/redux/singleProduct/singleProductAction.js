import {
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
} from "./actions";

const getSingelProductBegin = () => ({ type: GET_SINGLE_PRODUCT_BEGIN });

const getSingelProductSuccess = (payload) => ({
  type: GET_SINGLE_PRODUCT_SUCCESS,
  payload,
});

const getSingelProductError = () => ({ type: GET_SINGLE_PRODUCT_ERROR });

export const fetchSingleProduct = (params) => {
  return async (dispatch) => {
    dispatch(getSingelProductBegin());
    try {
      const resopnse = await fetch(
        `https://fakestoreapi.com/products/${params}`
      );
      const singleProduct = await resopnse.json();
      dispatch(getSingelProductSuccess(singleProduct));
    } catch (error) {
      dispatch(getSingelProductError());
    }
  };
};
