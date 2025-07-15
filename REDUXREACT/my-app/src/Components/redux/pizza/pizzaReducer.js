import { ORDER_PIZZA } from "./pizzaType";
const initialState={
    pizzaBase:1000
}
const pizzaReducer=(state=initialState,action)=>{
    switch(action.type){
        case ORDER_PIZZA:
            return {
                ...state,
                pizzaBase:state.pizzaBase-action.payload
            }
        default: 
        return  state   
    }
}
export default pizzaReducer;