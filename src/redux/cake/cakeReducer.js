import { BUY_CAKE} from "./cakeTypes";

const initialState = {
    numberOfCakes: 25,
}


const cakeReducer = (state=initialState, action) => {
    switch (action.type) {
        case BUY_CAKE : return {
            ...state, numberOfCakes: state.numberOfCakes - action.payload //5
        }
        default: return state
    }
}

export default cakeReducer

