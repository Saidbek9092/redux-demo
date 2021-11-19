import React, { useEffect, useState } from "react";
import axios from "axios";
import User from "./user";
import { Link } from "react-router-dom";

const Shop = () => {
    const [ users, setUsers ] = useState( null )

    useEffect( () => {
        axios.get( 'https://jsonplaceholder.typicode.com/users' ).then( res => {
            setUsers( res.data )
        } )
    },[] )

    return (
        <>
            {users && users.map((el)=>  <Link to={`shop/${el.id}`}>
                <h1>{el.name}</h1>
            </Link>)}
        </>
    )
}
export default Shop


