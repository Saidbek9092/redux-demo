import { usePracticumContext } from "./context/PracticumCONTEXT";
import React, { useEffect, useState } from "react";

const Lesson = () => {
    const {test, number} = usePracticumContext()
    useEffect(()=> {
        console.log('useeffect')
    }, [number])

    return (
        <div>
            <h1>Lesson</h1>
        </div>

    )
}

export default Lesson