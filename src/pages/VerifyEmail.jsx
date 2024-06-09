import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import OtpInput from 'react-otp-input'
import { useNavigate } from 'react-router-dom'
import { signup } from '../services/operations/authAPI'
import { BiArrowBack } from 'react-icons/bi'
import {RxCountdownTimer} from 'react-icons/rx'
import { Link } from 'react-router-dom'
import { sendOtp } from '../services/operations/authAPI';

const VerifyEmail = () => {

    const { loading, signupData } = useSelector((state) => state.auth);


    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [otp, setOtp] = useState("")

    // useEffect(() => {
    //     if (!signupData) {
    //         navigate("/signup")
    //     }
    // })

    const handleOnSubmit = (e) => {
        e.preventDefault()

        console.log(signupData)

            const {
                AccountType,
                firstName,
                lastName,
                email,
                password,
                confirmPassword,
                location
            } = signupData

            console.log(otp);
    
          dispatch(signup(AccountType,firstName,lastName,email,password,confirmPassword,location,otp,navigate))
        
    }

    return (
        <div className='grid min-h-[calc(100vh-3.5rem)] place-items-center'>
            {
                loading ? (<div className='spinner'></div>) :
                    (
                        <div className='max-w-[500px] p-4 lg:p-8'>
                            <h1 className=' font-jura font-semibold text-[1.875rem] leading-[2.375rem]'>
                                Verify Email
                            </h1>

                            <p className='my-4 text-[1.125rem] leading-[1.625rem] font-jura'>
                                A verification code has been sent to you. Enter the code below.
                            </p>

                            <form onSubmit={handleOnSubmit}>
                                <OtpInput
                                    value={otp}
                                    onChange={setOtp}
                                    numInputs={6}
                                    renderSeparator={<span>-</span>}
                                    renderInput={(props) => (<input {...props}
                                        placeholder='-'
                                        style={{ boxShadow: "inset 0px-1px 0px rgba(255,255,255,0.18)" }}
                                        className='w-[48px] lg:w-[60px] border-0 rounded-[0.5rem] aspect-square text-center focus:border-0 focus:outline-2 focus:outline-[#004E89]'
                                    />)} />

                                <button type='submit'
                                    className='w-full py-[12px] px-[12px] rounded-[8px] mt-6 font-medium font-jura bg-[#BFD3E2]'>
                                    Verify Email
                                </button>

                            </form>

                            <div>
                                <div className='mt-6 flex items-center justify-between'>
                                    <Link to="/login">
                                        <p className='flex items-center gap-x-2 font-jura'>
                                            <BiArrowBack />Back to Login</p>
                                    </Link>
                                </div>

                                <button onClick={() => dispatch(sendOtp(signupData.email, navigate))}
                                    className='flex items-center text-blue-100 gap-x-2'>
                                    <RxCountdownTimer />
                                    Resend it
                                </button>
                            </div>
                        </div>
                    )
            }
        </div>
    )
}

export default VerifyEmail
