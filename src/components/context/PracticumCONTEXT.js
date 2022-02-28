import React, { useCallback, useContext, useMemo, useState } from 'react';

export const PracticumCONTEXT = React.createContext();
export const usePracticumContext = () => useContext( PracticumCONTEXT );

export const PracticumCONTEXTProvider = ( {children} ) => {

    const [ lesson, setLesson ] = useState( 'les' );
    const [ number, setNumber ] = useState( 0 );
    const [ test, setTest ] = useState( 't' )

    const handleClick = () => {
        setNumber( number + 1 )
    }

    const newValue = {lesson, number, setLesson, setNumber, handleClick, test}

    return (
        <PracticumCONTEXT.Provider value={ newValue }>
            { children }
        </PracticumCONTEXT.Provider>
    )
}




