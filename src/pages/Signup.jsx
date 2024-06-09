import React from 'react'
import SignupForm from '../components/Navbar pages/SignupForm'
import SIGNUP from '../assets/SIGNUP.png'

const Signup = () => {
    return (
        <div className='bg-[#BFD3E2] h-screen py-8'>

            <div className='bg-loginlineargradient lg:h-[700px] flex w-9/12 mx-auto rounded-2xl shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]'>

                <div className='flex justify-center items-center lg:w-[50%]'>
                    <img src={SIGNUP} className='h-[75%]'/>
                </div>

                <div className='flex justify-center items-center w-[50%]'>
                    <SignupForm/>
                </div>
            </div>
        </div>
    )
}

export default Signup
