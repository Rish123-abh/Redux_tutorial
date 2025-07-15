import { useSelector,useDispatch } from "react-redux"
import { pizzaAction } from "../features/pizza/pizzaSlice";
function Pizza(){
    const pizzabase=useSelector((state)=>state.pizzaReducer.pizzaBase);
    const dispatch=useDispatch();
    return(
        <div>
            <h1>No of Pizza-{pizzabase}</h1>
            <button onClick={()=>{dispatch(pizzaAction())}}>Order Pizza</button>
        </div>
    )
}
export default Pizza;