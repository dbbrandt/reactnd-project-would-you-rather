import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import reducer from "./reducers";
import middleware from "./middleware";
import App from './components/App';

const store = configureStore({
  reducer,
  middleware
});

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root'));
