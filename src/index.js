import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { PersistGate } from "redux-persist/integration/react";

//? Styles
import "./index.css";

//? Redux
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store";

/*? fonts */
import '@fontsource/poppins'

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,

  document.getElementById("root")
);
