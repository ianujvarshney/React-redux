import { addtoCart } from "../constants"
export const addtoCart = (data) => {
    return {
        type: addtoCart,
        data: data
    }
}