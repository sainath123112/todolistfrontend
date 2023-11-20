import React from 'react'

function RegisterForm({setRegisterActive}) {
  return (
    <div className='w-[500px]'>
        <form className='flex flex-col justify-center items-center h-[458px] w-[500px]'>
            <div className='flex flex-row gap-[10px]'>
                <input type='text' placeholder='Firstname' className='text-[24px] tracking-wider px-[12px] rounded-md py-[6px] w-[170px]  bg-[#CAF0F8] mb-[20px]'></input>
                <input type='text' placeholder='Lastname' className='text-[24px] tracking-wider px-[12px] rounded-md py-[6px] w-[170px]  bg-[#CAF0F8] mb-[20px]'></input>
            </div>
            <input type='text' placeholder='Email' className='text-[24px] tracking-wider px-[12px] rounded-md py-[6px] w-[350px]  bg-[#CAF0F8] mb-[20px]'></input>
            <input type='text' placeholder='Password' className='text-[24px] tracking-wider px-[12px] rounded-md py-[6px] w-[350px]  bg-[#CAF0F8] mb-[20px]'></input>
            <input type='text' placeholder='Confirm Password' className='text-[24px] tracking-wider px-[12px] rounded-md py-[6px] w-[350px] bg-[#CAF0F8]'></input>
            <div className='w-[350px] mt-[8px]'>Already have account? <span onClick={()=>setRegisterActive(false)} className='cursor-pointer text-[#0096C7]'>Login</span></div>

            <input type='submit' className='bg-[#0096C7] text-[24px] text-white px-[16px] cursor-pointer py-[4px] rounded-md mt-[20px]' value="Register"></input>
        </form>
    </div>
  )
}

export default RegisterForm