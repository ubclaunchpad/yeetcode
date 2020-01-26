import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from "redux";
import logger from 'redux-logger'
import createSocketIoMiddleware from 'redux-socket.io';
import io from 'socket.io-client';

let socket = io('http://127.0.0.1:8080');
let socketIoMiddleware = createSocketIoMiddleware(socket, "socket/");

import rootReducer from "../reducers";

const middlewares = [thunk, logger, socketIoMiddleware];
const store = createStore(
  rootReducer,
  applyMiddleware(...middlewares)
);

export default store;