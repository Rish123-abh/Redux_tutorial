import {combineReducers, createStore,applyMiddleware} from 'redux';
import pizzaReducer from './pizza/pizzaReducer';
import burgerReducer  from './burger/burgerReducer';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import { productReducer } from './products/productReducer';
import { thunk } from 'redux-thunk';


// Steps for redux dev tool extension 

// 1. add extension to chrome 
// 2. install redux-devtool-extension in terminal command will be on github 
// 3. use this inside store 

const store =createStore(combineReducers({pizzaReducer,burgerReducer,productReducer}),composeWithDevTools(applyMiddleware(logger,thunk)));
export default store;