import { createSlice } from "@reduxjs/toolkit";

const initialState={
    burgerBuns:100
}

const burgerSlice=createSlice({
    name:'burger',
    initialState,
    reducers:{
        order_burger:(state)=>{
            state.burgerBuns--
        }
    }
})

export  default burgerSlice.reducer;
export const order_burger=burgerSlice.actions.order_burger;