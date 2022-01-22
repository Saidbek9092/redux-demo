import React from "react";
import { Link } from "react-router-dom";


const Nav = () => {
    return (
        <nav>
            <ul style={ {display: "flex", justifyContent: "space-between", margin: 10, background: "grey"} }>
                <Link to="/">Home
                </Link>
                <Link to="/about">
                    About
                </Link>
                <Link to="/shop">
                    Shop
                </Link>
            </ul>

        </nav>
    )
}

export default Nav;