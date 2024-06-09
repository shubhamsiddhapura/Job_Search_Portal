import React from 'react'
import { useSelector } from 'react-redux';
import { CiEdit } from "react-icons/ci";
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaRegCalendarMinus } from "react-icons/fa";
import { MdOutlineSettingsPhone } from "react-icons/md";
import { FaBookReader } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';

const MyProfile = () => {

    const { user } = useSelector((state) => state.profile);

    const navigate = useNavigate();

    // if (authLoading || profileLoading) {
    //     return (
    //         <div>Loading...</div>
    //     )
    // }

    console.log(user);
    return (
        <div>
            {
                user?.AccountType === "Job Seeker" ? (
                    <div className='lg:w-10/12 mx-auto mt-10 flex flex-col gap-5'>
                        <div className='flex gap-10 border-2 border-[#7FAFD3] rounded-3xl px-10 py-10 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.2)]'>
                            <div>
                                <img src={user?.image} alt={`profile-${user?.firstName}`}
                                    className=' aspect-square w-[200px] rounded-full object-cover' />
                            </div>

                            <div className='flex flex-col gap-5 w-[65%] ml-10'>
                                <div className='flex items-center gap-3'>
                                    <h1 className=' font-jura font-bold text-4xl'>{user?.firstName} {user?.lastName}</h1>
                                    <button onClick={() => navigate('/dashboard/edit-profile')}>
                                        <CiEdit size={30} />
                                    </button>
                                </div>



                                <div className='flex justify-between'>
                                    <div className='flex items-center gap-5'>
                                        <MdEmail size={24} />
                                        <p className='font-jura font-normal text-2xl'>{user?.email}</p>
                                    </div>

                                    {user?.jobSeeker?.contactNumber ? (
                                        <div className='flex items-center gap-5'>
                                            <MdOutlineSettingsPhone size={24} />
                                            <p className='font-jura font-normal text-2xl'>{user?.jobSeeker?.contactNumber}</p>
                                        </div>)
                                        :
                                        (<button onClick={() => navigate('/dashboard/edit-profile')}>
                                            <div className='flex items-center gap-5'>
                                                <MdOutlineSettingsPhone size={24} />
                                                <p className='font-jura font-normal text-2xl'>Add Contact Number</p>
                                            </div>
                                        </button>)}
                                </div>

                                <div className='flex justify-between'>
                                    <div className='flex items-center gap-5'>
                                        <FaRegCalendarMinus size={24} />
                                        <p className='font-jura font-normal text-2xl'>{user?.jobSeeker?.experiance} Years</p>
                                    </div>

                                    {user?.jobSeeker?.degree ? (
                                        <div className='flex items-center gap-5'>
                                            <FaBookReader size={24} />
                                            <p className='font-jura font-normal text-2xl'>{user?.jobSeeker?.degree}</p>
                                        </div>
                                    )
                                        :
                                        (<button onClick={() => navigate('/dashboard/edit-profile')}>
                                            <div className='flex items-center gap-5'>
                                                <FaBookReader size={24} />
                                                <p className='font-jura font-normal text-2xl'>Add your Degree</p>
                                            </div>
                                        </button>)}
                                </div>

                                <div className='flex items-center gap-5'>
                                    <IoLocationSharp size={24} />
                                    <p className='font-jura font-normal text-2xl'>{user?.jobSeeker?.location}</p>
                                </div>
                            </div>

                        </div>
                    </div>
                )

                    :

                    (<div className='lg:w-10/12 mx-auto mt-10 flex flex-col gap-5'>
                        <div className='flex gap-10 border-2 border-[#7FAFD3] rounded-3xl px-10 py-10 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.2)]'>
                            <div>
                                <img src={user?.image} alt={`profile-${user?.firstName}`}
                                    className=' aspect-square w-[200px] rounded-full object-cover' />
                            </div>

                            <div className='flex flex-col gap-5 w-[65%] ml-10'>
                                <div className='flex items-center gap-3'>
                                    <h1 className=' font-jura font-bold text-4xl'>{user?.firstName} {user?.lastName}</h1>
                                    <button onClick={() => navigate('/dashboard/edit-profile')}>
                                        <CiEdit size={30} />
                                    </button>
                                </div>



                                <div className='flex justify-between'>
                                    <div className='flex items-center gap-5'>
                                        <MdEmail size={24} />
                                        <p className='font-jura font-normal text-2xl'>{user?.email}</p>
                                    </div>

                                    {user?.employer?.contactNumber ? (
                                        <div className='flex items-center gap-5'>
                                            <MdOutlineSettingsPhone size={24} />
                                            <p className='font-jura font-normal text-2xl'>{user?.employer?.contactNumber}</p>
                                        </div>)
                                        :
                                        (<button onClick={() => navigate('/dashboard/edit-profile')}>
                                            <div className='flex items-center gap-5'>
                                                <MdOutlineSettingsPhone size={24} />
                                                <p className='font-jura font-normal text-2xl'>Add Contact Number</p>
                                            </div>
                                        </button>)}
                                </div>

                                <div className='flex justify-between'>
                                    <div className='flex items-center gap-5'>
                                        <FaRegCalendarMinus size={24} />
                                        <p className='font-jura font-normal text-2xl'>{user?.employer?.experiance} Years</p>
                                    </div>

                                    {user?.jobSeeker?.degree ? (
                                        <div className='flex items-center gap-5'>
                                            <FaBookReader size={24} />
                                            <p className='font-jura font-normal text-2xl'>{user?.employer?.degree}</p>
                                        </div>
                                    )
                                        :
                                        (<button onClick={() => navigate('/dashboard/edit-profile')}>
                                            <div className='flex items-center gap-5'>
                                                <FaBookReader size={24} />
                                                <p className='font-jura font-normal text-2xl'>Add your Degree</p>
                                            </div>
                                        </button>)}
                                </div>

                                <div className='flex items-center gap-5'>
                                    <IoLocationSharp size={24} />
                                    <p className='font-jura font-normal text-2xl'>{user?.employer?.location}</p>
                                </div>

                                {/* <hr className='border-[#7FAFD3] border-2 my-2'/> */}

                                <Link to={'/create-job'} className=' flex justify-end'>
                                    <button className='font-jura font-bold text-2xl text-[#13317E]'>
                                        + Create job
                                    </button>
                                </Link>

                            </div>

                        </div>
                    </div>


                    )
            }
        </div>
    )
}

export default MyProfile
