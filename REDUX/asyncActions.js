const redux =require('redux');
const createStore=redux.createStore;
const thunk=require('redux-thunk').thunk;
const axios=require('axios');
const applymiddleware=redux.applyMiddleware;

const FETCH_REQUEST='FETCH_REQUEST';
const FETCH_SUCCESS='FETCH_SUCCESS';
const FETCH_ERROR='FECTH_ERROR';

const initialState={
    loading:false,
    products:[],
    error:false
}



const fetchRequest=()=>{
    return {
        type:FETCH_REQUEST
    }
}
const fetchError=()=>{
    return{
        type:FETCH_ERROR
    }
}
const fetchSuccess=(products)=>{
    return{
        type:FETCH_SUCCESS,
        payload:products
    }
}
const reducer=(state=initialState,action)=>{
switch(action.type){
    case FETCH_REQUEST:
        return {
            ...state,
            loading:true,
        }
    case FETCH_ERROR:
        return {
            ...state,
            loading:false,
            error:true,
        }
        case FETCH_SUCCESS:
        return {
            ...state,
            loading:false,
            products:action.payload,
            error:false,
        }
        
    }
}
// With help of thunk action creater will return function instead of just plain object

const fetchProducts=()=>{
    // Here reduc thunk provides dispatch here 
    return function(dispatch){
        dispatch(fetchRequest());
        axios.get('https://fakestoreapi.com/products').then(res=>{
            const products=res.data.map(products=>{
                return products.title
            });
            dispatch(fetchSuccess(products));
        }).catch(err=>{
            dispatch(fetchError());
            
        })
    }
}

const store=createStore(reducer,applymiddleware(thunk));
store.subscribe(()=>{
    console.log(store.getState());
})


store.dispatch(fetchProducts());

