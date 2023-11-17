import { createContext } from 'react'

export const containerProvider = createContext("Default value")

function ContextContainer({children}) {

    const hello = "Hello";
    const providerValue = {
        hello: hello
    }
  return (
    <containerProvider.Provider value={providerValue}>
        {children}
    </containerProvider.Provider>
    
  )
}

export default ContextContainer