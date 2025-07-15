import { FETCH_ERROR, FETCH_REQUEST, FETCH_SUCCESS } from "./productType"

const initialState={
    loading:false,
    products:[],
    error:false
}

export const productReducer=(state=initialState,action)=>{
    switch(action.type){
        case FETCH_ERROR:
            return{
                ...state,
                loading:false,
                error:true
            }
        case FETCH_REQUEST:
            return {
                ...state,
                loading:true,
                error:false
            } 
        case FETCH_SUCCESS:
            return{
                ...state,
                loading:false,
                error:false,
                products:action.payload
            }   
        default:
            return state;        
    }
}