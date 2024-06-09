import React, { useState } from 'react'
import { login } from '../../services/operations/authAPI'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';

const LoginForm = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })

    const { email, password } = formData

    const handleOnChange = (e) => {
        setFormData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value,
        }))
    }

    const hnadleOnSubmit = (e) => {
        e.preventDefault()
        dispatch(login(email, password, navigate))
    }


    return (
        <div className='w-full'>
            <form onSubmit={hnadleOnSubmit} className='flex flex-col gap-y-8'>
                <label className='flex flex-col gap-y-2'>
                    <p className='font-jura font-semibold text-xl'>Email Address<sup className='text-red-400'>*</sup></p>
                    <input
                        required
                        type='text'
                        name='email'
                        value={email}
                        onChange={handleOnChange}
                        placeholder='Enter the email address'
                        className='border-2 border-[#13317E] placeholder:font-jura placeholder:text-base px-2 py-3 rounded-2xl w-[90%]' />
                </label>

                <label className='flex flex-col gap-y-2'>
                    <p className='font-jura font-semibold text-xl'>Password<sup className='text-red-400'>*</sup></p>
                    <input
                        required
                        type='password'
                        name='password'
                        value={password}
                        onChange={handleOnChange}
                        placeholder='Enter the password'
                        className='border-2 border-[#13317E] placeholder:font-jura placeholder:text-base px-2 py-3 rounded-2xl w-[90%]' />
                </label>

                <button className='font-jura text-2xl py-2 px-5 rounded-2xl mx-auto border-2 border-[#407AA7] bg-[#BFD3E2]'>
                    Login Now
                </button>

            </form>
        </div>
    )
}

export default LoginForm
