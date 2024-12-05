import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import Counter from "./components/Counter";
import User from "./components/User";

function App() {
  return (
    <Provider store={store}>
      <div>
        <h1>Redux</h1>
        <Counter />
        <hr />
        <User />
      </div>
    </Provider>
  );
}

export default App;
