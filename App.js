import React from "react";
import { Provider } from "react-redux";

import { store } from "./src/store/";

import Root from "./src/components/Root/";
// import "./ReactotronConfig";

const ReduxApp = () => (
  <Provider store={store}>
    <Root />
  </Provider>
);

export default ReduxApp;
