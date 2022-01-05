import { useState } from "react";
export const Test = () => {
    const [Name, setName] = useState("Parent");

    const dataChange = (e) => {
        setName(e);
    }
    return (
        <>
            <h1>{Name}</h1>
            <Child Changedata={(data)=> dataChange(data)} />
        </>
    );
};


export const Child = ({Changedata}) => {
    return (

        <button
            onClick={() => Changedata("Child")}>
            Change</button>

    )
};

