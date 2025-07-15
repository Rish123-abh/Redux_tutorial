const redux =require('redux');
const createStore=redux.createStore;

const PIZZA_ORDER="PIZZA_ORDER"

// Action Creater
function orderPizza(){
    return {
        type:PIZZA_ORDER,
        shop_name:"Pizzashop"
    }
}

// Reducer

const initalState={
    pizzabase:100
}

const reducer=(state=initalState,action)=>{
    switch(action.type){
        case PIZZA_ORDER:
            return {
                pizzabase:state.pizzabase-1
            }
        default:
            return state    
    }
}


//STORE 
// 1. Store need to hold data since reducer conatin initalState hence this will be passed 
const store=createStore(reducer);

//2.It contains  getState() function which will give the current state within an applicaton

console.log("storeData",store.getState());

// 3. Registers listeners via subscribers -> this will work only when state is changed 

const unsubscribe=store.subscribe(()=>{
console.log("updated state",store.getState());
})

// 4. Alllows state to be updated via dispatch action 
// store.dispatch({type:PIZZA_ORDER});
store.dispatch(orderPizza());
unsubscribe();

//  after using unsubscribe we dont get to listen to state so updated State console will not work 
// we need to check manually 
store.dispatch(orderPizza());
console.log(store.getState());