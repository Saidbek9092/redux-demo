import { BUY_COFFEE } from "./coffeeTypes";

const initialState = {
    numberOfCoffee: 10
}
const coffeeReducer = (state = initialState, action) => {
    switch (action.type) {

        case BUY_COFFEE: return {
            ...state, numberOfCoffee: state.numberOfCoffee - 1
        }
        default: return state
    }
}


export default coffeeReducer