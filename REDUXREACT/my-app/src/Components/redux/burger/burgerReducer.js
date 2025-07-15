import { ORDER_BURGER } from "./burgerType";
const initialState={
    BurgerBuns:100
};
 const burgerReducer=(state=initialState,action)=>{
    switch(action.type){
        case ORDER_BURGER:
            return {
                ...state,
                BurgerBuns:state.BurgerBuns-1
            }
        default:
            return state    
    }
}
export default burgerReducer;
