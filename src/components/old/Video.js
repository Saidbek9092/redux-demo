import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Video = () => {
    const [count, setCount] = useState(0);

    const logCount = () => {
        console.log(count);
    };

    useEffect(() => {
        logCount();
    }, [logCount]);

    return <div>{count}</div>;
}

export default Video