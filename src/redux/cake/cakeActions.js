import {BUY_CAKE} from "./cakeTypes";

//Action creator
export const buyCake = (number = 1) => {
    return {
        type: BUY_CAKE,
        payload: number //5
    }
}




