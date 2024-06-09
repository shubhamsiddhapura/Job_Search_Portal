import React from 'react'
import login from '../assets/loginPage.png'
import LoginForm from '../components/Navbar pages/LoginForm'

const Login = () => {
    return (
        <div className='bg-[#BFD3E2] h-screen py-8'>
            <div className='flex w-9/12 lg:h-[575px] mx-auto rounded-2xl bg-loginlineargradient shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]'>

                <div className='flex justify-center items-center lg:w-[50%]'>
                    <img src={login} />
                </div>

                <div className='flex justify-center items-center w-[50%]'>
                    <LoginForm/>
                </div>

                
            </div>
        </div>
    )
}

export default Login
