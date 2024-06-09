import React from 'react'
import FooterImg from '../../assets/Footer.png'
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { MdSecurity } from "react-icons/md";

const Footer = () => {
    return (
        <div className='bg-[#BFD3E2] pb-12 pt-8'>
            <div className='flex gap-5 w-11/12 mx-auto'>

                <div className='flex justify-evenly w-[70%] border-2 border-[#004E89] rounded-3xl px-10 py-16'>

                    <div className='flex flex-col lg:h-[200px] lg:w-[200px]'>
                        <img src={FooterImg} className='h-[130px] w-[130px]' />
                        <div className='flex gap-3 mt-5'>
                            <RiInstagramFill size={30} />
                            <FaFacebookF size={30} />
                            <FaXTwitter size={30} />
                            <MdSecurity size={30} />
                        </div>
                    </div>

                    <div className='flex gap-10 mt-6'>
                        <div>
                            <ul className=' font-semibold text-xl font-jura flex flex-col gap-3'>
                                <li>About Us</li>
                                <li>Careers</li>
                                <li>Credits</li>
                                <li>Grievances</li>
                            </ul>
                        </div>

                        <div>
                            <ul className=' font-semibold text-xl font-jura flex flex-col gap-3'>
                                <li>Help Center</li>
                                <li>Notices</li>
                                <li>Report Issue</li>
                                <li>Work at KDI</li>
                            </ul>
                        </div>

                        <div>
                            <ul className=' font-semibold text-xl font-jura flex flex-col gap-3'>
                                <li>Privacy Policy</li>
                                <li>Terms & Condition</li>
                                <li>Fruad alert</li>
                                <li>Trust & Safety</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className='border-2 border-[#004E89] rounded-3xl w-[29%] bg-lineargradient flex justify-center items-center'>
                    <form className='flex flex-col gap-5 w-11/12'>
                        <label className=' font-semibold font-jura text-2xl' htmlFor='feedback'>Feedback</label>
                        <textarea name='feedback' rows={5} cols={10} className='w-[90%] mx-auto placeholder:pl-3 placeholder:pt-2 placeholder:font-jura' placeholder='Enter your feedBack'></textarea>

                        <div className='flex justify-end'>
                            <button className='bg-[#BFD3E2] rounded-full border-2 border-[#7FAFD3] text-base px-5 py-1 font-jura'>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Footer
