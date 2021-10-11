import React from "react";
import { connect } from "react-redux";
import {buyCake} from "../redux/cake/cakeActions";

const cakeContainer = (props) => {
    return (
        <div>
            <h2>Number of cakes = {props.numOfCakes}</h2>
            <button onClick={props.buyCake}>Buy cake</button>
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
        buyCake: () => dispatch(buyCake()) // buyCake is action
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(cakeContainer)

