import React from "react";
import ReactDOM from "react-dom";
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';


import "./index.css";
import App from "./App";
import { reducer } from './reducers';

const store = createStore(reducer, applyMiddleware(thunk, logger))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));
