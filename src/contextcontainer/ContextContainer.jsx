import { createContext, useState } from 'react'

export const containerProvider = createContext("Default value")

function ContextContainer({children}) {
    const [ path, setPath ] = useState("");
    const providerValue = {
        path: path,
        setPath: setPath
    }
  return (
    <containerProvider.Provider value={providerValue}>
        {children}
    </containerProvider.Provider>
    
  )
}

export default ContextContainer