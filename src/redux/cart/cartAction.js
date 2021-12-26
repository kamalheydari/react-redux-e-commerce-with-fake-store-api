import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM,
  CLEAR_CART,
  COUNT_CART_TOTALS,
  CHECKOUT,
} from "../../utils/actions";

const countCartTotals = () => {
  return { type: COUNT_CART_TOTALS };
};

const addToCart = (product, amount) => {
  return { type: ADD_TO_CART, payload: { product, amount } };
};

const toggleAmount = (id, value) => {
  return { type: TOGGLE_CART_ITEM, payload: { id, value } };
};

const removeItem = (id) => {
  return { type: REMOVE_CART_ITEM, payload: id };
};

const clearCart = () => {
  return { type: CLEAR_CART };
};

const checkout = () => {
  return { type: CHECKOUT };
};

export {
  addToCart,
  toggleAmount,
  removeItem,
  clearCart,
  checkout,
  countCartTotals,
};
