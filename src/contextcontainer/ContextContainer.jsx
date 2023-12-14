import { createContext, useState } from 'react'

export const containerProvider = createContext("Default value")

function ContextContainer({children}) {
    const [ path, setPath ] = useState("");
    const [taskarray, setTaskarray] = useState([{"title":"Learn Php", "description":"Learn laravel and Vuejs along with PHP", "due_date":"11-28-2023", "priority":"High", "type_of_task":"Home"}]);
    const providerValue = {
        path: path,
        setPath: setPath,
        taskarray: taskarray,
        setTaskarray: setTaskarray
    }
  return (
    <containerProvider.Provider value={providerValue}>
        {children}
    </containerProvider.Provider>
    
  )
}

export default ContextContainer