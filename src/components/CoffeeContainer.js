import React from "react";
import { connect } from "react-redux";
import buyCoffee from "../redux/coffee/cofeeActions";


const CoffeeContainer = (props) => {
    return (
        <div>
            <h2>Number of coffee = {props.numberOfCoffee}</h2>
            <button onClick={props.buyCoffee}>Buy coffee</button>
        </div>
    )
}


const mapStateToProps = state => {
    return {
        numberOfCoffee: state.coffee.numberOfCoffee
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyCoffee: () => dispatch(buyCoffee())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CoffeeContainer)

