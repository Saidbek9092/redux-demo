import useToggle from "./useToggle";
import { useState } from "react";

export default function ToogleComponent() {
    // const [ value, toggleValue ] = useToggle( false )
    const [toggle, setToggle] = useState(false)

    return (
        <div>
            <div>{ toggle.toString()}</div>
            <button onClick={ () => setToggle( true ) }>Make True</button>
            <button onClick={ () => setToggle( false ) }>Make False</button>
            <button onClick={ () => setToggle(!toggle) }>Toggle</button>
        </div>
    )
}

