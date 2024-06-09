import React from 'react'
import MNC1 from '../../assets/HomePage Slider1/Microsoft.png'
import MNC3 from '../../assets/HomePage Slider1/mnc-2.png'
import MNC2 from '../../assets/HomePage Slider1/mnc.png'
import FinTech1 from '../../assets/HomePage Slider1/fin.png'
import FinTech2 from '../../assets/HomePage Slider1/fin-2.png'
import FinTech3 from '../../assets/HomePage Slider1/fin-3.png'
import FinTech4 from '../../assets/HomePage Slider1/fin-4.png'
import Edtech1 from '../../assets/HomePage Slider1/ed.png'
import Edtech2 from '../../assets/HomePage Slider1/ed-2.png'
import Edtech3 from '../../assets/HomePage Slider1/ed-3.png'
import Startups1 from '../../assets/HomePage Slider1/st.png'
import Startups2 from '../../assets/HomePage Slider1/st-2.png'
import Startups3 from '../../assets/HomePage Slider1/st-3.png'

const Slider1 = () => {
  return (
    <div className='flex'>
      <div className='flex gap-14 w-[11/12] mx-auto'>
        <div className='w-[315px] h-[315px] border-2 border-[#7FAFD3] rounded-2xl flex flex-col justify-center items-center gap-5'>
          <h1 className=' font-jura text-4xl'>MNCs</h1>
          <div className='flex flex-wrap gap-1 w-[200px] text-center'>
            <img src={MNC1} className='w-[190px]' />
            <img src={MNC2} className='w-[70px]' />
            <img src={MNC3} className='w-[70px]' />
          </div>
        </div>

        <div className='w-[315px] h-[315px] border-2 border-[#7FAFD3] rounded-2xl flex flex-col justify-center items-center gap-5'>
          <h1 className=' font-jura text-4xl'>FinTech</h1>
          <div className='flex flex-wrap gap-1 w-[200px] text-center'>
            <img src={FinTech1} className='w-[80px]' />
            <img src={FinTech2} className='w-[80px]' />
            <img src={FinTech3} className='w-[80px]' />
            <img src={FinTech4} className='w-[80px]' />
          </div>
        </div>

        <div className='w-[315px] h-[315px] border-2 border-[#7FAFD3] rounded-2xl flex flex-col justify-center items-center gap-5'>
          <h1 className=' font-jura text-4xl'>Edtech</h1>
          <div className='flex flex-wrap gap-1 w-[200px] text-center justify-center'>
            <img src={Edtech1} className='w-[80px]' />
            <img src={Edtech2} className='w-[80px]' />
            <img src={Edtech3} className='w-[80px]' />
          </div>
        </div>

        <div className='w-[315px] h-[315px] border-2 border-[#7FAFD3] rounded-2xl flex flex-col justify-center items-center gap-5'>
          <h1 className=' font-jura text-4xl'>Start ups</h1>
          <div className='flex flex-wrap gap-1 w-[200px] text-center justify-center'>
            <img src={Startups1} className='w-[80px]' />
            <img src={Startups2} className='w-[80px]' />
            <img src={Startups3} className='w-[80px]' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Slider1
