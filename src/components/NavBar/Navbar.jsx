import React from 'react'

function Navbar() {
  return (
    <div className='navbar flex flex-row w-[100vw] bg-[#0077B6] text-white py-[10px] px-[50px] justify-between items-center'>
        <div className='text-[44px] ml-[200px] tracking-wider cursor-pointer'>Todo App</div>
        <div className='mr-[100px] text-[24px] tracking-wider cursor-pointer'>Login / Register</div>
    </div>
  )
}

export default Navbar