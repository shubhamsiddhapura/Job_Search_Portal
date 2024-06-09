import React from 'react'
import { IoMdSearch } from "react-icons/io";
import { homePageData1, homePageData2 } from '../data/homePgaeData';
import Slider1 from '../components/home page/Slider1';
import { IoIosArrowDropright } from "react-icons/io";
import { IoIosArrowDropleft } from "react-icons/io";
import Slider2 from '../components/home page/Slider2';
import { BsArrowRightCircleFill } from "react-icons/bs";
import Footer from '../components/Common/Footer';

const Home = () => {
    return (
        <div>
            <div className='bg-[#fff] flex flex-col gap-1'>
                <div className='flex flex-col items-center mt-16'>
                    <h1 className=' font-jura font-bold text-4xl'>Find Your First <span className=' font-jura text-[#004E89]'>Job</span></h1>
                    <p className=' font-jura text-2xl font-semibold'>You miss <span className='text-[#004E89]'>100% </span>of the shots you don’t take.</p>
                </div>

                <div className='flex mt-10 mb-10'>
                    <form className='mx-auto relative'>
                        <input type='text' className=' border-2 border-[#7FAFD3] w-[900px] py-4 rounded-full text-[26px] drop-shadow-2xl' placeholder='         Job Search                                 |   Enter Location                              |' />
                        <IoMdSearch size={28} className='absolute top-[26px] right-5 font-bold' />
                    </form>
                </div>

                <div className='mx-auto flex-row max-w-[950px] mb-16'>
                    <div className='flex flex-wrap gap-10 justify-center'>
                        {
                            homePageData1.map((item, id) => (
                                <div className={`border-2 font-semibold font-jura border-[#7FAFD3] px-4 py-2 rounded-full text-[24px] ${item.id % 2 === 0 ? "bg-[#004E89] text-white drop-shadow-2xl shadow-[#004E89]" : " bg-transparent"}`} key={id} >
                                    {item.title}
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>

            <div className='bg-lineargradient relative pb-10'>
                <div className='pt-10'>
                    <h1 className=' font-jura font-bold text-4xl text-center'>Top Companies Hiring <span className=' font-jura text-white'>Now</span></h1>
                </div>
                <button className='absolute right-32 top-14 text-[#325168]'><IoIosArrowDropleft size={50} /></button>
                <button className='absolute right-20 top-14 text-[#325168]'><IoIosArrowDropright size={50} /></button>
                <div className='mt-16 ml-8'>
                    <Slider1 />
                </div>

            </div>

            <div className='bg-lineargradient'>
                <h1 className='font-jura text-4xl font-bold pt-10 text-center'>Featured companies <span className=' text-white'>actively</span> hiring</h1>
                <Slider2 />
            </div>

            <div className='bg-[#BFD3E2] flex flex-col pt-12 pl-16 pb-10'>
                <h1 className=' font-jura font-bold text-4xl text-center'>Discover jobs across <span className='text-[#004E89]'>popular</span> roles</h1>
                <div className='flex gap-16 mt-10'>
                    {
                        homePageData2.map((item, id) => (
                            <div key={id} className='border-2 border-[#7FAFD3] px-7 rounded-3xl py-10 flex flex-col gap-5 justify-center items-center shadow-2xl'>
                                <div>
                                    <p className=' font-semibold text-2xl font-jura'>{item.title}</p>
                                    <p className='font-jura font-medium text-xl text-[#00000080]'>{item.jobs}</p>
                                </div>

                                <div>
                                    <button className='border-2 border-[#7FAFD3] p-2 rounded-full'><BsArrowRightCircleFill size={24} /></button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

            <div>
                <Footer/>
            </div>
        </div>
    )
}

export default Home
