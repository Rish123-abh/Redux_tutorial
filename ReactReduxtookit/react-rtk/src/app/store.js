import { configureStore } from "@reduxjs/toolkit";
import pizzaReducer from '../features/pizza/pizzaSlice';
import burgerReducer from "../features/burger/burgerSlice";
import ProductReducer from "../features/products/productSlice";
const store=configureStore({
    reducer:{
        pizzaReducer,
        burgerReducer,
        ProductReducer
    }
})
export default store ;