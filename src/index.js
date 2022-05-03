import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ReduxContext from "./contexts/ReduxContext";
// import { addTodo, completeTodo, showAll, showComplete } from "./redux/actions";
import store from "./redux/store";

// store.subscribe(() => {
//   console.log(store.getState());
// });

// // console.log(store);
// store.dispatch(addTodo("coding"));
// store.dispatch(completeTodo(0));
// store.dispatch(showComplete(0));
// store.dispatch(showAll(0));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ReduxContext.Provider value={store}>
      <App />
    </ReduxContext.Provider>
  </React.StrictMode>
);
