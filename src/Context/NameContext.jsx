import React, {useState, createContext, useEffect} from "react";

export const NameContext = createContext();

export const NameProvider = ({children}) => {
    const [name, setName] = useState('')

    useEffect(() => {
        if(name) {
            localStorage.setItem('savedName', name)
        }
    }, [name])

    useEffect(() => {
        const storedName = localStorage.getItem('savedName') 

        if(storedName) {
            setName(storedName)
        }
    })

    return (
        <NameContext.Provider value={{name, setName}}>
            {children}
        </NameContext.Provider>
    )
}