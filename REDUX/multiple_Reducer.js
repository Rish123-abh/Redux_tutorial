const redux=require('redux');
const reduxlogger=require('redux-logger');
const logger=reduxlogger.createLogger();
const applymiddleware=redux.applyMiddleware;
const createstore = redux.createStore;
const combinereducer=redux.combineReducers;

const ORDER_PIZZA='ORDER_PIZZA';
const ORDER_BURGER='ORDER_BURGER';
//  action creater 
const orderPizza=()=>{
    return{
        type:ORDER_PIZZA,
    }
}

const orderBurger=()=>{
    return {
        type:ORDER_BURGER,
    }
}

const initialStateforPizza={
    pizzabase:100,
}
const intialStateforBurger={
burgerBuns:200,
}

const pizzaReducer=(state=initialStateforPizza,action)=>{
    switch (action.type){
        case ORDER_PIZZA:
            return {
                ...state,
                pizzabase:state.pizzabase-1
            }

         default:
            return state;   
    }

}


const burgerReducer=(state=intialStateforBurger,action)=>{
switch(action.type){
    case ORDER_BURGER:
        return {
            ...state,
            burgerBuns:state.burgerBuns-1,
        }

    default:
        return state;    
}
}

const combinedReducers=combinereducer({
    pizzaReducer,
    burgerReducer
})

const store = createstore(combinedReducers,applymiddleware(logger));

const unsubscribe=store.subscribe(()=>{});

store.dispatch(orderPizza());
store.dispatch(orderBurger());

unsubscribe();
const finalStore=store.getState();
console.log('StoreState',finalStore['pizzaReducer']);

