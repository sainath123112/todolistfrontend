import {useContext, useEffect} from 'react'
import { containerProvider } from '../../contextcontainer/ContextContainer'
import WelcomeRight from "../../assets/homeimages/welcome-right.png"
import WelcomeLeft from "../../assets/homeimages/welcome-left.png"
import { Link } from 'react-router-dom'

function Home() {

    const {setPath} = useContext(containerProvider)
    useEffect(()=>{
      setPath(window.location.pathname)
    },[])
  return (
    <div className='flex w-[100vw] items-end h-[100vh] px-[200px] justify-between pt-[200px]'>
      <div>
        <img src={WelcomeLeft} alt='Todo app left image' className='h-[500px]'></img>
      </div>
      <div className='flex flex-col h-[400px] items-center w-[500px] justify-start self-center'>
        <h1 className='text-[54px] text-center font-bold tracking-widest text-[#03045E] bg-[#90E0EF] rounded-md px-[32px]'>Do-It</h1>
        <h3 className='text-[32px] text-[#0096C7]'>Organize Your Day, Simplify Your Life</h3>
        <p className='text-[20px] mt-[20px] text-justify text-[#00B4D8] '>
          Welcome to Do-It, your ultimate solution for staying organized and on top of your daily tasks. 
          Whether you're planning your workday, managing household chores, or keeping track of personal projects, 
          our app makes it easier than ever.
        </p>
        <Link to={"/login"} className='mt-[30px] text-[20px] tracking-wider bg-[#0077B6] text-white px-[16px] py-[8px] rounded-md hover:bg-[rgb(0, 119, 182, 600)]'>Get Started</Link>
      </div>
      <div>
        <img src={WelcomeRight} alt='Todo app right image' className='h-[500px]'></img>
      </div>
    </div>
  )
}

export default Home