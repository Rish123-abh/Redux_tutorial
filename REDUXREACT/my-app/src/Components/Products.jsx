import { useDispatch, useSelector } from "react-redux"
import { fetchProducts } from "./redux";

function Products(){
    const {products,loading}=useSelector((state)=>state.productReducer);
    // const products=useSelector((state)=>state.productReducer.products);
    // const loading=useSelector((state)=>state.productReducer.loading)
    const dispatch=useDispatch();
    if(loading){
        return (
          <div>
          Fetching Data....
          </div>
        )
    }
    return(
        <>
        {
            products.map((p)=>
                <li>{p}</li>
            )
        }
        <button onClick={()=>dispatch(fetchProducts())}>Fetch Products</button>
        </>
    )
}
export default Products