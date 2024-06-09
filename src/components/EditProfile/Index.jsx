import React from 'react'
import ChangeProfilePicture from './ChangeProfilePicture'
import {ACCOUNT_TYPE} from '../../utils/constants'
import EditJobSeeker from './EditJobSeeker'
import EditEmployer from './EditEmployer'
import { useSelector } from 'react-redux'

const EditProfile = () => {

    const {user} = useSelector((state) => state.profile)

    return (
        <div>

            <div className='flex justify-center mt-10 text-4xl font-jura font-bold'>
                Edit Profile
            </div>

            <ChangeProfilePicture/>

            {
                user?.AccountType === ACCOUNT_TYPE.JOBSEEKER ? (
                    <EditJobSeeker/>
                ) : (
                    <EditEmployer/>
                )
            }

        </div>
    )
}

export default EditProfile
