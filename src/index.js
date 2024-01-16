import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles/index.scss";

// Redux
import { Provider } from "react-redux";
import rootReducer from './reducers'
import { configureStore } from "@reduxjs/toolkit";
import { getPost } from "./actions/post.action";
import { getUsers } from "./actions/user.action"

const store = configureStore({
    reducer: rootReducer,
    devTools: true, // A passer en false lors de la prod 
})

store.dispatch(getPost());
store.dispatch(getUsers())

ReactDOM.render(
<Provider store={store}>
<App />
</Provider>,
 document.getElementById("root"));

