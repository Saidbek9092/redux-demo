import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCake} from "../redux/cake/cakeActions";

const HooksContainer = () => {
    const numOfCakes = useSelector(state => state.cake.numberOfCakes)
    const dispatch = useDispatch()
    return (
        <div>
            {/*<button onClick={()=> dispatch(addCake())}>Add cake</button>*/}
            <h2>Hooks: Number of cakes: {numOfCakes}</h2>
            <button onClick={()=> dispatch(buyCake())}>Buy cake</button>
        </div>
    )
}


export default HooksContainer