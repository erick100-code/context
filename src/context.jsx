import { createContext, useState } from "react";

export const Contexto = createContext()

export const ContextProvider = ({children}) => {
    const [data, setData] = useState("zero")
    
    const estadoF = (value) => {
        switch(value) {
            case "ativado":
                setData("estado ativado")
                break
            case "inativado":
                setData("estado inativado")
                break
            case "pendente":
                setData("estado pendente")
                break
        }
    }

    return (
      <Contexto.Provider value={ {data, estadoF} }>
        {children}
      </Contexto.Provider>
    )
}