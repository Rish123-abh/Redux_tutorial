// Using traditonal way 

// import { orderPizza } from "./redux"
// import { connect } from "react-redux"
// function Pizza(props){
//     console.log(props);
// return (
//     <>
//     <div>
//         <h1>Number of pizza available-{props.pizzaBase}</h1>
//         <button onClick={props.orderPizza}>Order Pizza</button>
//     </div>
//     </>
// )
// }

// //  below will take whole redux state and will provide particular required things  as a prop to component 
// const mapStateToProps=(state)=>{
//     return {
//         pizzaBase:state.pizzaBase
//     }
// }
// const mapDispatchToProps=(dispatch)=>{
//     return {
//        orderPizza:()=> dispatch(orderPizza())
//     }
// }

// export default connect(mapStateToProps,mapDispatchToProps)(Pizza); 


// Using Hooks

import { orderPizza } from "./redux"
import { useState } from "react";
import { useDispatch, useSelector} from "react-redux"
function Pizza(){
    const [pizza,setPizza]=useState(0);
    //  useSelector will take function name selector  function as a n argument  and 
    // this function will take  a redux state as an argument and return the required item  
const pizzaBase=useSelector((state)=>state.pizzaReducer.pizzaBase);

const dispatch=useDispatch();

function handlePizza(){
    dispatch(orderPizza(pizza));
}
return (
    <>
    <div>
        <h1>Number of pizza available-{pizzaBase}</h1>
        <input type='number' placeholder="Enter Number Of Pizza" value={pizza}  onChange={(e)=>setPizza(e.target.value)}/>
        <button onClick={handlePizza} >Order Pizza</button>
    </div>
    </>
)
}


export default Pizza; 
