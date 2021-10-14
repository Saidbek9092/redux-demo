import {BUY_CAKE, ADD_CAKE} from "./cakeTypes";

//Action creator
export const buyCake = (number = 1) => {
    return {
        type: BUY_CAKE,
        payload: number //5
    }
}

export const addCake = (number = 1) => {
    return {
        type: ADD_CAKE,
        payload: number //5
    }
}





