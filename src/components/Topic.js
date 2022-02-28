import { usePracticumContext } from "./context/PracticumCONTEXT";
import React from "react";


const Topic = () => {
    const {number, handleClick} = usePracticumContext()
    console.log('topic')
    return (
        <>    <h1>{ number }</h1>
            <button onClick={handleClick}>Icrement number</button>
        </>
    )
}

export default Topic