import React, { useState } from "react";
import { connect } from "react-redux";
import {buyCake} from "../../redux/cake/cakeActions";
import './cake.scss'

const CakeContainer = (props) => {

    const [number, setNumber] = useState();
    return (
        <div>
            <h2 className="backColor">Number of cakes = {props.numOfCakes}</h2>
            <input type="text" onChange={(e) => setNumber(e.target.value)}/>
            <button onClick={()=> props.buyCake(number)}>Buy cake</button>
        </div>
    )
}


const mapStateToProps = state => {
    return {
        numOfCakes: state.cake.numberOfCakes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyCake: (number) => dispatch(buyCake(number)) // buyCake is action
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer)

