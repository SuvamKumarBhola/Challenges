import React, { createContext, useReducer, useContext } from 'react';
import { cartReducer, initialState } from './cartReducer';

const StoreContext = createContext();
export const StoreProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, initialState);

    return (
        <StoreContext.Provider value={{ state, dispatch }}>
            {children}
        </StoreContext.Provider>
    );
};

export const useStore = () => useContext(StoreContext);