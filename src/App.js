import { useEffect, useState } from "react";

import './App.css';
import axios from "axios";

const App = () => {
    const [ users, setUsers ] = useState( [] )
    const [showAll, setShowAll] = useState(false)
    useEffect( () => {
        try {
            const fetchData = async () => {
                await axios.get( 'https://jsonplaceholder.typicode.com/users' ).then( ( {data} ) => setUsers( data ) )
            }
            fetchData()
        } catch (er) {
            console.log( er )
        }
    }, [] )

    const handleOpenAll = () => {
        setShowAll(!showAll)
    }

    return (
        <div>
            <button onClick={handleOpenAll}>Open All</button>
            { users.map( user => (
                <div>
                    <Data user={ user } showAll={showAll}/>
                    <Data user={ user } showAll={showAll}/>
                </div>
            ) ) }
        </div>
    );
}


export default App;

const Data = ( {user, showAll} ) => {
    const [ show, setShow ] = useState( showAll )

    useEffect(()=> {
        setShow(showAll)
    }, [showAll])

    const handleClick = () => {
        setShow(!show)
    }
    return (
        <>
            <button style={ {background: "green"} }
                    onClick={handleClick}>{ user.name } { user.username }</button>
            { show ? <div>
                <p>{ user.email }</p>
                <p>{ user.phone }</p>
                <p>{ user.website }</p>
            </div> : null } </>

    )
}

