import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM,
  CLEAR_CART,
  COUNT_CART_TOTALS,
  CHECKOUT,
} from "./actions";

export const countCartTotals = () => ({ type: COUNT_CART_TOTALS });

export const addToCart = (product, amount) => ({
  type: ADD_TO_CART,
  payload: { product, amount },
});

export const toggleAmount = (id, value) => ({
  type: TOGGLE_CART_ITEM,
  payload: { id, value },
});

export const removeItem = (id) => ({ type: REMOVE_CART_ITEM, payload: id });

export const clearCart = () => ({ type: CLEAR_CART });

export const checkout = () => ({ type: CHECKOUT });
