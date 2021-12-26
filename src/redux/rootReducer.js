import { combineReducers } from "redux";

//? Reducers
import sidebarReducer from "./sidebar/sidebarReducer";
import productsReducer from "./products/productsReducer";
import filterReducer from "./filter/filterReducer";
import singelProductReducer from "./singleProduct/singleProductReducer";
import cartReducer from "./cart/cartReducer";

const rootReducer = combineReducers({
  sidebarState: sidebarReducer,
  productsState: productsReducer,
  filterState: filterReducer,
  singleProductState: singelProductReducer,
  cartState: cartReducer,
});

export default rootReducer;
