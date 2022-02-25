import React, { useState, useCallback } from "react";
import ChildComponent from "./ChildComponent";

const arr = [1, 5, 9, 5, 55, 24, 53, 12, 456, 4556];

const ParentComponent = () => {
    const [localState, setLocalState] = useState(0);
    const [childComponentState, setChildComponentState] = useState(0);

    const memoizedCallback = useCallback(
        (state) => incrementChildState(state),
        []
    );

    const increment = () => setLocalState(localState + 1);
    const incrementChildState = (number) => setChildComponentState(number);
    const getLargestNumber = () => {
        console.log("from getLargestFunction");
        return Math.max(...arr);
    };

    return (
        <div>
            <ChildComponent
                number={childComponentState}
                setNumber={memoizedCallback}
            />
            <h1>Parent component: {localState}</h1>
            <button onClick={increment}>Up</button>
            <h2>{getLargestNumber()}</h2>
        </div>
    );
};

export default ParentComponent;