import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import LOGO from '../../assets/LOGO.png';
import ProfileDropDowm from '../Navbar pages/ProfileDropDowm';
import { ACCOUNT_TYPE } from '../../utils/constants'

const Navbar = () => {

    const { token } = useSelector((state) => state.auth);
    const { user } = useSelector((state) => state.profile);

    return (
        <div className='flex justify-around items-center bg-[#BFD3E2] py-5'>
            <Link to='/'>
                <div>
                    <img src={LOGO} className='h-[30px] w-[230px]' />
                </div>
            </Link>

            <nav className='flex gap-x-7 font-jura font-medium text-2xl'>
                <Link to="/">
                    Home
                </Link>

                {

                    user?.AccountType === ACCOUNT_TYPE.JOBSEEKER ? (
                        <Link to='/jobs'>
                            Jobs
                        </Link>
                    ) : (
                        <Link to='/myjobs'>
                            My Jobs
                        </Link>
                    )

                }

                <Link to='/compines'>
                    Companies
                </Link>

                <Link to='/about'>
                    Services
                </Link>
            </nav>

            <div className='flex gap-x-7 font-jura text-xl font-medium justify-center items-center'>
                {
                    token === null && (
                        <Link to='/login'>
                            <button className='border-2 border-[#7FAFD3] rounded-xl bg-[#BFD3E2] px-4 py-1'>
                                Login
                            </button>
                        </Link>
                    )
                }
                {
                    token === null && (
                        <Link to='/signup'>
                            <button className='border-2 border-[#004E89] rounded-xl bg-[#407AA7] px-4 py-1'>
                                Sign up
                            </button>
                        </Link>
                    )
                }
                {
                    token !== null && <ProfileDropDowm />
                }
            </div>
        </div>
    )
}

export default Navbar
