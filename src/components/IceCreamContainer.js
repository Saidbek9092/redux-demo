import React from "react";
import { connect } from "react-redux";
import { buyIceCream } from "../redux/icecream/icecreamActions";


const icecreamContainer = (props) => {
    return (
        <div>
            <h2>Number of icecreams = {props.numberOfIcecreams}</h2>
            <button onClick={props.buyIcecream}>Buy icecream</button>
        </div>

    )
}


const mapStateToProps = state => {
    return {
        numberOfIcecreams: state.icecream.numberOfIcecreams
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyIcecream: () => dispatch(buyIceCream())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(icecreamContainer)

