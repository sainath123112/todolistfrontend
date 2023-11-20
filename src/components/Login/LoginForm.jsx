import React, { useState } from 'react'

function LoginForm({setRegisterActive}) {
  return (
    <div className='w-[500px]'>
        <form className='flex flex-col justify-center items-center h-[400px]'>
            <input type='text' placeholder='Email' className='text-[24px] tracking-wider px-[12px] rounded-md py-[6px] w-[350px]  bg-[#CAF0F8] mb-[30px]'></input>
            <input type='text' placeholder='Password' className='text-[24px] tracking-wider px-[12px] rounded-md py-[6px] w-[350px] bg-[#CAF0F8]'></input>
            <div className='w-[350px] mt-[16px]'>Don't have account yet? <span onClick={()=> setRegisterActive(true)} className='cursor-pointer text-[#0096C7]'>Register</span></div>

            <input type='submit' className='bg-[#0096C7] text-[24px] text-white px-[16px] cursor-pointer py-[4px] rounded-md mt-[50px]' value="Login"></input>
        </form>
    </div>
  )
}

export default LoginForm