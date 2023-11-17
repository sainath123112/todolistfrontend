import {useContext} from 'react'
import { containerProvider } from '../../contextcontainer/ContextContainer'

function Home() {

    const {hello} = useContext(containerProvider)
  return (
    <div>
        {hello}
    </div>
  )
}

export default Home