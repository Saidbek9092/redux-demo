import React from "react";
import { connect } from "react-redux";
import { buyCake } from "../../redux/cake/cakeActions";
import { buyIceCream } from "../../redux/icecream/icecreamActions";

const ItemContainer = (props) => {
    return (
        <div>
            <h2>Item is - {props.item}</h2>
            <button onClick={props.buyItem}>Buy item</button>
        </div>
    )
}
const mapStateToProps = (state, ownProps) => {
    const itemState = ownProps.cake ? state.cake.numberOfCakes : state.icecream.numberOfIcecreams;
    return {
        item: itemState
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    const dispatchFunction = ownProps.cake ? () => dispatch(buyCake()) :
        () => dispatch(buyIceCream())

    return {buyItem: dispatchFunction}
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer)