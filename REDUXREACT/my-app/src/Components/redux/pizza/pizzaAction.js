import { ORDER_PIZZA } from "./pizzaType"

export const orderPizza=(payload)=>{
    return {
        type:ORDER_PIZZA,
        payload:payload
    }
}