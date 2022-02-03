import React, { useContext, useState } from 'react';

export const PracticumCONTEXT = React.createContext();
export const usePracticumContext = () => useContext( PracticumCONTEXT );

export const PracticumCONTEXTProvider = ( {children} ) => {

    const [ lesson, setLesson ] = useState( '' );
    const [ topic, setTopic ] = useState( '' );

    const handleClick = (data) => {
        setTopic(data)
    }

    return (
        <PracticumCONTEXT.Provider value={ {lesson, topic, setLesson, setTopic, handleClick} }>
            { children }
        </PracticumCONTEXT.Provider>
    )
}




