import { createSlice } from "@reduxjs/toolkit";

const initialState={
    pizzaBase:1000,
}
const pizzaSlice=createSlice(
    {
        name:"pizza",
        initialState,
        reducers:{
            order_pizza:(state)=>{
                state.pizzaBase--;
            }
        }
    }
)
console.log(pizzaSlice);
export default pizzaSlice.reducer;
export const pizzaAction=pizzaSlice.actions.order_pizza;