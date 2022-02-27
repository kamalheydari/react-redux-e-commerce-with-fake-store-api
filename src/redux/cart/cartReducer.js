import produce from "immer";
import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM,
  CLEAR_CART,
  COUNT_CART_TOTALS,
  CHECKOUT,
} from "./actions";

const initialState = {
  cart: [],
  total_price: 0,
  total_items: 0,
  isCheckout: false,
};

const cartReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    let tempItem;

    switch (action.type) {
      case ADD_TO_CART:
        const { product, amount } = action.payload;
        tempItem = draft.cart.find((item) => item.id === product.id);
        if (tempItem) {
          draft.cart[tempItem].amount += amount;
        } else {
          const { id, title, image, price } = product;
          draft.cart.push({ id, title, price, image, amount });
          draft.isCheckout = false;
        }
        break;

      case TOGGLE_CART_ITEM:
        const { id, value } = action.payload;
        tempItem = draft.cart.find((item) => item.id === id);

        if (value === "inc") {
          let newAmount = tempItem.amount + 1;
          tempItem.amount = newAmount;
        }
        if (value === "dec") {
          let newAmount = tempItem.amount - 1;
          if (newAmount < 1) {
            newAmount = 1;
          }
          tempItem.amount = newAmount;
        }
        break;

      case REMOVE_CART_ITEM:
        const index = draft.cart.findIndex(
          (item) => item.id === action.payload
        );
        if (index !== -1) {
          draft.cart.splice(index, 1);
        }
        break;

      case CLEAR_CART:
        draft.cart = [];
        break;

      case COUNT_CART_TOTALS:
        const { total_items, total_price } = draft.cart.reduce(
          (total, cartItem) => {
            const { amount, price } = cartItem;
            total.total_items += amount;
            total.total_price += price * amount;

            return total;
          },
          {
            total_price: 0,
            total_items: 0,
          }
        );
        draft.total_items = total_items;
        draft.total_price = total_price;
        break;

      case CHECKOUT:
        draft.total_price = 0;
        draft.total_items = 0;
        draft.isCheckout = true;
        draft.cart = [];
        break;

      default:
        break;
    }
  });

export default cartReducer;
