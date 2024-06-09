import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form'
import { updateEmployer } from '../../services/operations/EmployerAPI';

const EditEmployer = () => {

    const { user } = useSelector((state) => state.profile);
    const { token } = useSelector((state) => state.auth);
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const submitProfileForm = async (data) => {
        try {
            dispatch(updateEmployer(token, data))
        } catch (error) {
            console.log("ERROR MESSAGE....", error.message);
        }
    }

    return (
        <div className='lg:w-10/12 mx-auto mt-10 flex flex-col gap-5'>

            <div className='flex flex-col gap-10 border-2 border-[#7FAFD3] rounded-3xl px-10 py-10 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.2)]'>

                <div className='font-jura text-2xl font-semibold'>
                    Profile Information
                </div>

                <div>
                    <form className='flex flex-col gap-y-8' onSubmit={handleSubmit(submitProfileForm)}>

                        <div className='flex justify-evenly'>
                            <div>
                                <div className='flex flex-col gap-y-2'>
                                    <label htmlFor='firstName' className='font-jura font-bold'>
                                        First Name
                                    </label>
                                    <input
                                        type='text'
                                        name='firstName'
                                        id='firstName'
                                        placeholder='Enter first name'
                                        {...register("firstName", { required: true })}
                                        defaultValue={user?.firstName}
                                        className=' bg-[#F3F3F3] font-jura font-bold w-[500px] px-5 py-3 ml-5 border-[1px] border-black rounded-lg  placeholder:font-jura placeholder:font-bold'
                                    />
                                    {
                                        errors.firstName && (
                                            <span>
                                                Please enter the firstname
                                            </span>
                                        )
                                    }
                                </div>
                            </div>

                            <div>
                                <div className='flex flex-col gap-y-2'>
                                    <label htmlFor='lastName' className='font-jura font-bold'>
                                        Last Name
                                    </label>
                                    <input
                                        type='text'
                                        name='lastName'
                                        id='firstName'
                                        placeholder='Enter first name'
                                        {...register("lastName", { required: true })}
                                        defaultValue={user?.lastName}
                                        className=' bg-[#F3F3F3] font-jura font-bold w-[500px] px-5 py-3 ml-5 border-[1px] border-black rounded-lg  placeholder:font-jura placeholder:font-bold'
                                    />
                                    {
                                        errors.lastName && (
                                            <span>
                                                Please enter the lastname
                                            </span>
                                        )
                                    }
                                </div>

                            </div>
                        </div>


                        <div className='flex justify-evenly'>
                            <div>
                                <div className='flex flex-col gap-y-2'>
                                    <label htmlFor='about' className='font-jura font-bold'>
                                        About
                                    </label>
                                    <input
                                        type='text'
                                        name='about'
                                        id='about'
                                        placeholder='Enter Bio Details'
                                        {...register("about", { required: true })}
                                        defaultValue={user?.employer?.about}
                                        className=' bg-[#F3F3F3] font-jura font-bold w-[500px] px-5 py-3 ml-5 border-[1px] border-black rounded-lg  placeholder:font-jura placeholder:font-bold'
                                    />
                                    {
                                        errors.about && (
                                            <span>
                                                Please enter your about
                                            </span>
                                        )
                                    }
                                </div>
                            </div>

                            <div>
                                <div className='flex flex-col gap-y-2'>
                                    <label htmlFor='lastName' className='font-jura font-bold'>
                                        Contact Number
                                    </label>
                                    <input
                                        type='tel'
                                        name='contactNumber'
                                        id='contactNumber'
                                        placeholder='Enter your Contact Number'
                                        {...register("contactNumber", {
                                            required: { value: true, message: "please enter Your Contact Number." },
                                            maxLength: { value: 12, message: "Invalid Contact Number" },
                                            minLength: { value: 10, message: "Invalid Contact Number" }
                                        })}
                                        defaultValue={user?.employer?.contactNumber}
                                        className=' bg-[#F3F3F3] font-jura font-bold w-[500px] px-5 py-3 ml-5 border-[1px] border-black rounded-lg  placeholder:font-jura placeholder:font-bold'
                                    />
                                    {
                                        errors.contactNumber && (
                                            <span>
                                                Please enter the Contact Number
                                            </span>
                                        )
                                    }
                                </div>

                            </div>
                        </div>

                        <div className='flex justify-center'>
                            <div>
                                <div className='flex flex-col gap-y-2'>
                                    <label htmlFor='about' className='font-jura font-bold'>
                                        Location
                                    </label>
                                    <input
                                        type='text'
                                        name='location'
                                        id='location'
                                        placeholder='Enter your location'
                                        {...register("location", { required: true })}
                                        defaultValue={user?.employer?.location}
                                        className=' bg-[#F3F3F3] font-jura font-bold w-[500px] px-5 py-3 ml-5 border-[1px] border-black rounded-lg  placeholder:font-jura placeholder:font-bold'
                                    />
                                    {
                                        errors.location && (
                                            <span>
                                                Please enter your location
                                            </span>
                                        )
                                    }
                                </div>
                            </div>
                        </div>

                        <div className='flex gap-x-4 justify-end mr-10'>
                            <button className='flex items-center border-2 border-[#004E89] rounded-md bg-[#7FAFD3] font-jura py-2 px-5 font-semibold'
                            onClick={() => navigate('/dashboard/my-profile')}>
                                Cancel
                            </button>

                            <button className='cursor-pointer rounded-md font-jura py-2 px-5 font-semibold bg-[#004E89] text-white border-2 border-[#7FAFD3]' 
                            type='submit'>
                                save
                            </button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default EditEmployer
