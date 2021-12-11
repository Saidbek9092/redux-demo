import React from "react";
import { connect } from "react-redux";
import buyCoffee from "../redux/coffee/cofeeActions";
import { helper } from "./HooksContainer";


const CoffeeContainer = (props) => {

    const data = [4,3,7,6,12,3,4,7,9,0]
    const sendData =(data)=> {
        const b = data.find(el=> el === 4)
        console.log(b)
    }
    return (
        <div>
            <h2>Number of coffee = {props.numberOfCoffee}</h2>
            <button onClick={props.buyCoffee}>Buy coffee</button>
            <button onClick={()=> sendData(data)}>Show data</button>
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

