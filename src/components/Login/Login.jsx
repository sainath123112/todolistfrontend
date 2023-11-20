import "./Login.css"
import React, { useEffect, useState, useContext } from 'react'
import { containerProvider } from '../../contextcontainer/ContextContainer'
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

function Login() {
const {setPath, path} = useContext(containerProvider);
const [registerActive, setRegisterActive] = useState(false)


    useEffect(()=>{
        setPath(window.location.pathname)

    },[])

    function handleRegisterClick()
    {
        setRegisterActive(true)
    }
    function handleLoginClick()
    {
        setRegisterActive(false)
    }
  return (
    <div className='flex justify-center items-center w-[100vw] h-[100vh]'>
        <div className='bg-white rounded-md shadow-md w-[500px] h-[500px] overflow-hidden mt-[100px]'>
            <div className='flex'>
                <h1 onClick={handleLoginClick} className={`login-button ${registerActive === true ? "after:translate-x-[100%]" : "after:translate-x-[0%]"} text-[#0077B6] text-[28px] cursor-pointer font-bold tracking-wider px-[50px] py-[12px] w-[50%] text-center`}>Login</h1>
                <h1 onClick={handleRegisterClick} className='register-button text-[#0077B6] text-[28px] cursor-pointer px-[50px] font-bold tracking-wider py-[12px] w-[50%] text-center'>Register</h1>
            </div>
            <div className={`login-register-body flex w-[1000px] ${registerActive === true && "translate-x-[-500px]"}`}>
               <LoginForm setRegisterActive = {setRegisterActive}></LoginForm>
                <RegisterForm setRegisterActive = {setRegisterActive}></RegisterForm>
            </div>
        </div>
    </div>
  )
}

export default Login