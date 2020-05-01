import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// items

// redux stuff
// store - stores data, think of state
// reducer - function that is used to update store. Store functionality

// reducer
// takes 2 arguments - state, action
// state - old state/ state before update
// action - what happened/ what update
// return updated or old state

import { createStore } from "redux";
import reducer from "./reducer";
// react-redux - Provider - wraps app , connect - used in components
import { Provider } from "react-redux";
// initial store

// store
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function App() {
  // cart setup

  return (
    <Provider store={store}>
      <Navbar />
      <CartContainer />
    </Provider>
  );
}

export default App;
