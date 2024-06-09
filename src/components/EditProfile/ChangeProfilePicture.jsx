import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FiUpload } from "react-icons/fi";
import { updateDispalyPicture } from '../../services/operations/jobSeekerAPI';

const ChangeProfilePicture = () => {

    const { token } = useSelector((state) => state.auth);
    const { user } = useSelector((state) => state.profile);
    const dispatch = useDispatch();

    const [loading, setLoading] = useState(false);
    const [image, setImage] = useState(null);
    const [previewSource, setPreviewSource] = useState(null);

    const fileInputRef = useRef(null);

    const handleFileChange = (e) => {
        const file = e.target.files[0]
        if(file) {
            setImage(file);
            previewFile(file)
        }
    }

    const previewFile = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file)
        reader.onloadend = () => {
            setPreviewSource(reader.result)
        }
    }

    const handleClick = () => {
        fileInputRef.current.click()
    }

    const handleFileUpload = () => {
        try {
            setLoading(true);
            const formData = new FormData();
            formData.append("displayPicture", image)
            dispatch(updateDispalyPicture(token, formData)).then(() => {
                setLoading(false);
            })
        } catch (error) {
            console.log("ERROR MESSAGE.....",error.message)
        }
    }

    useEffect(() => {
        if (image) {
            previewFile(image)
        }
    },[image])



    return (
        <div className='lg:w-10/12 mx-auto mt-10 flex flex-col gap-5'>

            <div className='flex items-center gap-10 border-2 border-[#7FAFD3] rounded-3xl px-10 py-10 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.2)]'>

                <div>
                    <img
                        src={previewSource || user?.image}
                        alt={`profile-${user?.firstName}}`}
                        className=' aspect-square w-[100px] rounded-full object-cover' />
                </div>

                <div className='flex flex-col gap-3'>
                    <p className='font-jura text-xl font-semibold'>Change Profile Picture</p>
                    <div className='flex flex-row gap-3'>
                        <input
                            type='file'
                            ref={fileInputRef}
                            onChange={handleFileChange}
                            className='hidden'
                            accept='image/png,image/gif,image/jpeg' />
                        <button onClick={handleClick}
                            disabled={loading} className='cursor-pointer rounded-md font-jura py-2 px-5 font-semibold bg-[#004E89] text-white border-2 border-[#7FAFD3]'>
                            Select
                        </button>

                        <button className='flex items-center border-2 border-[#004E89] rounded-md bg-[#7FAFD3] font-jura py-2 px-5 font-semibold' disabled={loading}
                        onClick={handleFileUpload}>
                            {
                                !loading ? (
                                    <p className='flex gap-x-2 items-center'>Upload <span><FiUpload className='text-lg text-richblack-900' /></span></p>
                                ) : (
                                    <p className='flex gap-x-2 items-center'>Uploadind <span><FiUpload className='text-lg text-richblack-900' /></span></p>
                                )
                            }
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChangeProfilePicture
