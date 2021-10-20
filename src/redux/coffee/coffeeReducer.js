import { BUY_COFFEE } from "./coffeeTypes";
import { BUY_ICECREAM } from "../icecream/icecreamTypes";

const initialState = {
    numberOfCoffee: 20
}

const coffeeReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_ICECREAM: return {
            ...state, numberOfCoffee: state.numberOfCoffee - 1
        }
        default: return state
    }

}


export default coffeeReducer