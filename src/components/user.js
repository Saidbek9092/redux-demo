import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import axios from "axios";

const User = () => {
    const {userId} = useParams()
    const [ data, setData ] = useState( null )
    useEffect( () => {
        axios.get( 'https://jsonplaceholder.typicode.com/users' ).then( res => {
            const singledata = res.data.find( el => el.id === Number(userId) )
            setData(singledata)
        } )
    }, [ ] )
    return (
        <>
            { data && <div>
                <h1>{ data.username }</h1>
                <p>{ data.email }</p>
                <p>{ data.phone }</p>
                <p>{ data.website }</p>
            </div> }

        </>


    )
}

export default User;