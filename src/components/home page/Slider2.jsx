import React from 'react'
import JP from '../../assets/Home page Slider 2/jb-1.png'
import AIRTEL from '../../assets/Home page Slider 2/jb-2.png'
import Cognizant from '../../assets/Home page Slider 2/jb-3.png'
import HITACHI from '../../assets/Home page Slider 2/jb-4.png'

const Slider2 = () => {
    return (
        <div className='flex'>

            <div className='w-[11/12] py-12 mx-auto flex gap-16'>
                <div className='w-[315px] h-[315px] border-2 border-[#7FAFD3] rounded-2xl flex flex-col justify-center items-center gap-5'>
                    <img src={JP} className='w-[160px] text-center'/>
                    <p className='font-jura font-semibold text-2xl max-w-[230px] text-center'>J.P. Morgan chase Bank</p>
                    <p className=' font-medium text-xl font-jura text-center'>4.5K+ Reviews</p>
                    <button className='text-2xl font-jura bg-[#BFD3E2] border-2 border-[#004E89] px-2 py-1 rounded-xl'>View Jobs</button>
                </div>

                <div className='w-[315px] h-[315px] border-2 border-[#7FAFD3] rounded-2xl flex flex-col justify-center items-center gap-8'>
                    <img src={AIRTEL} className='w-[160px] text-center'/>
                    <p className='font-jura font-semibold text-2xl max-w-[230px] text-center'>Airtel</p>
                    <p className=' font-medium text-xl font-jura text-center'>5.1K+ Reviews</p>
                    <button className='text-2xl font-jura bg-[#BFD3E2] border-2 border-[#004E89] px-2 py-1 rounded-xl'>View Jobs</button>
                </div>

                <div className='w-[315px] h-[315px] border-2 border-[#7FAFD3] rounded-2xl flex flex-col justify-center items-center gap-7'>
                    <img src={Cognizant} className='w-[160px] text-center'/>
                    <p className='font-jura font-semibold text-2xl max-w-[230px] text-center'>Cognizant</p>
                    <p className=' font-medium text-xl font-jura text-center'>4.2K+ Reviews</p>
                    <button className='text-2xl font-jura bg-[#BFD3E2] border-2 border-[#004E89] px-2 py-1 rounded-xl'>View Jobs</button>
                </div>

                <div className='w-[315px] h-[315px] border-2 border-[#7FAFD3] rounded-2xl flex flex-col justify-center items-center gap-5'>
                    <img src={HITACHI} className='w-[160px] text-center'/>
                    <p className='font-jura font-semibold text-2xl max-w-[230px] text-center'>Hitachi Energy</p>
                    <p className=' font-medium text-xl font-jura text-center'>5K+ Reviews</p>
                    <button className='text-2xl font-jura bg-[#BFD3E2] border-2 border-[#004E89] px-2 py-1 rounded-xl'>View Jobs</button>
                </div>

                     
            </div>
        </div>
    )
}

export default Slider2
