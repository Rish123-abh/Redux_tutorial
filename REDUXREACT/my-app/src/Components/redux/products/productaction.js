import { FETCH_SUCCESS ,FETCH_ERROR,FETCH_REQUEST} from "./productType";
import axios from 'axios';
export const fetchError=()=>{
    return{
      type:FETCH_ERROR 
    }
};
export const fetchrequest=(error)=>{
    return{
         type:FETCH_REQUEST,
         payload:error
    }
};
export const fetchSuccess=(data)=>{
    return{
        type:FETCH_SUCCESS,
        payload:data
    }
};


export const fetchProducts=()=>(dispatch)=>{
    dispatch(fetchrequest())
    axios.get('https://fakestoreapi.com/products').then(
        (res)=>{
            const products=res.data.map((products)=>products.title);
            dispatch(fetchSuccess(products));
        }
    ).catch((err)=>dispatch(fetchError()));
}