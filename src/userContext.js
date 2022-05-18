import {
    createContext,
    useContext,
    useState,
} from 'react';

const AuthContext = createContext();

export const useAuthContext = () => useContext( AuthContext );

export const AuthContextProvider = ( {children} ) => {
    const [ count, setCount ] = useState( 1 )

    return <AuthContext.Provider value={ {count, setCount} }>{ children }</AuthContext.Provider>;
};

