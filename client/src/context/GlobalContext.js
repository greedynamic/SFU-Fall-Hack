import React, { createContext } from 'react'

const userId = {
    id: 0,
}

export const Context = createContext(userId)

export const GlobalContext = ({ children }) => {
    return (
        <Context.Provider value={userId}>
            {children}
        </Context.Provider>
    )
}