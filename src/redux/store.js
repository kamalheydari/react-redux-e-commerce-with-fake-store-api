import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import thunk from "redux-thunk";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

//? RootReducer
import rootReducer from "./rootReducer";

const persistConfig = {
  key: "fake-store-cart",
  storage,
  blacklist: [
    "sidebarState",
    "productsState",
    "filterState",
    "singleProductState",
  ],
  whitelist: ["cartState"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
export const persistor = persistStore(store);
