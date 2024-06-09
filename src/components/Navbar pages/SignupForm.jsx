import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Tab from './Tab';
import { ACCOUNT_TYPE } from '../../utils/constants';
import { setSignupData } from '../../slices/authSlice';
import { sendOtp } from '../../services/operations/authAPI';
import { toast } from 'react-hot-toast';

const SignupForm = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [AccountType, setAccountType] = useState(ACCOUNT_TYPE.JOBSEEKER);

    const [formData, setFormData] = useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        confirmPassword:"",
        location:"",
    })

    const {firstName:firstName,
            lastName:lastName,
            email:email,
            password:password,
            confirmPassword:confirmPassword,
            location:location} = formData

    const handleOnChange = (e) => {
        setFormData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value,
        }))
    }

    const handleOnSubmit = (e) => {
        e.preventDefault()

        if(password !== confirmPassword) {
            toast.error("Password Do not match")
        }
        const signupData = {
            ...formData,
            AccountType,
        }

        console.log(signupData);

        dispatch(setSignupData(signupData))

        dispatch(sendOtp(formData.email, navigate))

        setFormData({
            firstName:"",
            lastName:"",
            email:"",
            password:"",
            confirmPassword:"",
            location:"",
        })

        setAccountType(ACCOUNT_TYPE.JOBSEEKER)
    }

    const tabData = [
        {
            id:1,
            tabName:"Job Seeker",
            type:ACCOUNT_TYPE.JOBSEEKER
        },
        {
            id:2,
            tabName:"Employer",
            type:ACCOUNT_TYPE.EMPLOYER
        }
    ]

  return (
    <div>
        <Tab tabData={tabData} field={AccountType} setField={setAccountType}></Tab>
        <form onSubmit={handleOnSubmit} className='flex flex-col gap-3'>

            <div className='flex justify-between w-full'>
                <label>
                    <p className=' font-jura font-semibold text-xl'>First Name<sup className='text-red-400'>*</sup></p>
                    <input
                        required
                        type='text'
                        name='firstName'
                        value={firstName}
                        onChange={handleOnChange}
                        placeholder='Enter first name'
                        className='border-2 border-[#13317E] placeholder:font-jura placeholder:text-base px-2 py-2 rounded-2xl w-[90%]' 
                        />
                </label>
                
                <label>
                    <p className=' font-jura font-semibold text-xl'>Last Name<sup className='text-red-400'>*</sup></p>
                    <input
                        required
                        type='text'
                        name='lastName'
                        value={lastName}
                        onChange={handleOnChange}
                        placeholder='Enter last name'
                        className='border-2 border-[#13317E] placeholder:font-jura placeholder:text-base px-2 py-2 rounded-2xl w-[90%]' 
                        />
                </label>
            </div>

            <label className='flex flex-col gap-y-2'>
                    <p className='font-jura font-semibold text-xl'>Email Address<sup className='text-red-400'>*</sup></p>
                    <input
                        required
                        type='text'
                        name='email'
                        value={email}
                        onChange={handleOnChange}
                        placeholder='Enter the email address'
                        className='border-2 border-[#13317E] placeholder:font-jura placeholder:text-base px-2 py-2 rounded-2xl w-full' />
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
                        className='border-2 border-[#13317E] placeholder:font-jura placeholder:text-base px-2 py-2 rounded-2xl w-full' />
                </label>

                <label className='flex flex-col gap-y-2'>
                    <p className='font-jura font-semibold text-xl'>Password<sup className='text-red-400'>*</sup></p>
                    <input
                        required
                        type='password'
                        name='confirmPassword'
                        value={confirmPassword}
                        onChange={handleOnChange}
                        placeholder='Enter the confirm password'
                        className='border-2 border-[#13317E] placeholder:font-jura placeholder:text-base px-2 py-2 rounded-2xl w-full' />
                </label>

                <label>
                    <p className=' font-jura font-semibold text-xl'>Location<sup className='text-red-400'>*</sup></p>
                    <input
                        required
                        type='text'
                        name='location'
                        value={location}
                        onChange={handleOnChange}
                        placeholder='Enter first name'
                        className='border-2 border-[#13317E] placeholder:font-jura placeholder:text-base px-2 py-2 rounded-2xl w-full' 
                        />
                </label>

                <button type='submit' className='font-jura text-2xl py-2 px-5 rounded-2xl mx-auto border-2 border-[#407AA7] bg-[#BFD3E2]'>
                    Register Now
                </button>
        </form>
    </div>
  )
}

export default SignupForm
