import {  createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';
const initialState={
    loading:false,
    products:[],
    error:""
}

const fetchProducts=createAsyncThunk('product/fetchProducts',()=>{
    return axios.get('https://fakestoreapi.com/products').then(
        (res)=>{
            const products=res.data.map((p)=>p.title);
            console.log(products);
            return products;
        }
    )
})

const productSlice=createSlice({
    name:'product',
    initialState,
    extraReducers:(builder)=>{
            builder.addCase(fetchProducts.pending,(state)=>{
                state.loading=true
            }),
            builder.addCase(fetchProducts.fulfilled,(state,action)=>{
                state.loading=false,
                state.products=action.payload
            })
            builder.addCase(fetchProducts.rejected,(state,action)=>{
                state.loading=false,
                state.error=action.error.message
            })
    }
})

export default productSlice.reducer;
export {fetchProducts};