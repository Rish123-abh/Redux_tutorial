import { useDispatch, useSelector } from "react-redux"
import { fetchProducts } from "../features/products/productSlice";

function Products(){
    const {error,products}=useSelector((state)=>state.ProductReducer);
    console.log("react",error,products);
    const dispatch=useDispatch();
    if(error){
        return error;
    }
    return(
        <div>
            
            {
                products.map((p)=>
                    <li>{p}</li>
                )
            }
            <button onClick={()=>{
                dispatch(fetchProducts())
            }}>Fetch Products</button>
        </div>
    )
}
export default Products;