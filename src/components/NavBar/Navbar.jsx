import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { containerProvider } from '../../contextcontainer/ContextContainer'

function Navbar() {
  const {path} = useContext(containerProvider)
  return (
    <div className='navbar fixed flex flex-row w-[100vw] bg-[#0077B6] text-white py-[10px] px-[50px] justify-between items-center'>
        <Link to={"/"} className='text-[44px] ml-[200px] tracking-wider cursor-pointer'>Do-It App</Link>
       {path==="/" && <Link to={"/login"} className='mr-[100px] text-[24px] tracking-wider cursor-pointer'>Login / Register</Link>}
    </div>
  )
}

export default Navbar