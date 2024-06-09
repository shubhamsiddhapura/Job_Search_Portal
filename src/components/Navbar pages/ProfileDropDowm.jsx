import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineCaretDown } from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom';
import { VscDashboard } from 'react-icons/vsc'
import { logout } from '../../services/operations/authAPI';
import {VscSignOut} from 'react-icons/vsc'
import { useState } from 'react';

const ProfileDropDowm = () => {

  const { user } = useSelector((state) => state.profile);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  return (
    <div>
      <button className='relative' onClick={() => setOpen(true)}>
        <div>
          <img
            src={user?.image}
            alt={`profile-${user?.firstName}`}
            className=' aspect-square w-[30px] rounded-full object-cover' />
          <AiOutlineCaretDown className='text-sm absolute top-2 left-8' />
        </div>
        {
          open && (
            <div onClick={(e) => e.stopPropagation()} className='border-2 border-[#004E89] rounded-xl mt-2 absolute flex flex-col'>

              <Link to='/dashboard/my-profile' onClick={() => setOpen(false)} className='flex justify-center items-center border-b-2 border-[#004E89] py-1'>
                <VscDashboard className='text-lg ' />
                Dashboard
              </Link>

              <div
                onClick={() => {
                  dispatch(logout(navigate))
                  setOpen(false);
                }} className='flex justify-center items-center py-1'>
                <VscSignOut className='text-lg' />
                Logout
              </div>
            </div>
          )
        }
      </button>
    </div>
  )
}

export default ProfileDropDowm;
