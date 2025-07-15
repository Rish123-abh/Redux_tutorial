import { useSelector,useDispatch } from "react-redux"
import { order_burger } from "../features/burger/burgerSlice";
function Burger(){
    const burgerbuns=useSelector((state)=>state.burgerReducer.burgerBuns);
    const dispatch=useDispatch();
    return(
        <div>
            <h1>No of burger-{burgerbuns}</h1>
            <button onClick={()=>{dispatch(order_burger())}}>Order Burger</button>
        </div>
    )
}
export default Burger;