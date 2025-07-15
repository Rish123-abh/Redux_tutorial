import { useDispatch, useSelector } from "react-redux";
import { orderBurger } from "./redux/burger/burgerAction";

 const Burger=()=>{

    const Burger=useSelector((state)=>state.burgerReducer.BurgerBuns);
    const dispatch=useDispatch();
    return (
        <div>
             <h1>Number of Burgers available-{Burger}</h1>
        <button onClick={()=>dispatch(orderBurger())} >Order Burger</button>
        </div>
    )
}
export default Burger;