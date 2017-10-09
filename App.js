import React from "react";
import { Provider } from "react-redux";

import { store } from "./src/store/";

import Root from "./src/components/Root/";

const ReduxApp = () => (
  <Provider store={store}>
    <Root />
  </Provider>
);

export default ReduxApp;
