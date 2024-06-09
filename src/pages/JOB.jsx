import React, { useEffect, useState } from 'react'
import { getOneJobDetails } from '../services/operations/jobsAPI';
import { IoLocationSharp } from "react-icons/io5";
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { applyJob } from '../services/operations/jobsAPI';
import { setApply } from '../slices/jobSlice';
import toast from 'react-hot-toast';

const JOB = () => {

    const { jobId } = useParams();
    const {token} = useSelector((state) => state.auth);
    // const {user} = useSelector((state) => state.profile);

    // console.log(userId);
    // console.log(jobId);

    const dispatch = useDispatch()

    const {apply} = useSelector((state) => state.job); 
    const [loading, setLoading] = useState(false);
    const [job, setJob] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getOneJobDetails(jobId);
                console.log("Data .........", data);
                setJob(data);
            } catch (error) {
                console.log("Error in fetching JOB", error)
                setJob(null);
            }
        }

        fetchData();
    }, [jobId])

    // console.log(job.jobTitle)

    if (!job) {
        return <div>Loading....</div>
    }

    const jobApply = async() => {
        setLoading(true);
        const result = await applyJob(jobId,token);
        if(result) {
            dispatch(setApply(result))
        }
    }

    return (
        <div>

            <div className='lg:w-8/12 mx-auto mt-10'>
                <div className='flex flex-col gap-1 border-2 border-[#7FAFD3] rounded-3xl px-5 py-5 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.2)]'>
                    <h1 className='font-jura font-bold text-4xl'>{job.jobTitle}</h1>
                    <p className='font-jura font-normal text-2xl'>{job.employer.firstName} {job.employer.lastName}</p>
                    <p className='font-jura font-normal text-xl'>{job?.jobType}</p>
                    <div className='flex items-center gap-2'>
                        <IoLocationSharp size={24} />
                        <p className='font-jura font-normal text-2xl'>{job.location}</p>
                    </div>

                    <hr className=' border-[#7FAFD3] border-2 my-2' />
                    <div className=' flex justify-end items-center gap-5'>
                        <p className='font-jura'>Applicants : <span className='font-bold'>{job.jobApplications.length}</span></p>
                        <button className='border-2 border-[#004E89] py-1 px-3 rounded-2xl bg-[#7FAFD3] font-jura font-medium'
                        onClick={jobApply}>Apply Now</button>
                    </div>
                </div>

                <div className='shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.2)] flex flex-col gap-1 border-2 border-[#7FAFD3] rounded-3xl px-5 py-5 mt-10'>
                    <h1 className='font-jura font-bold text-4xl tracking-widest'>Job Description</h1>
                    <p className='px-5 py-2 font-jura text-2xl font-medium'>{job?.jobDescription}</p>

                    <p className='font-jura font-bold text-2xl'>Role : <span className=' font-medium'>{job?.jobTitle}</span></p>
                    <p className='font-jura font-bold text-2xl'>Employement Type : <span className=' font-medium'>{job?.jobType}</span></p>
                </div>

                {
                    job?.employer?.employer?.about ? (
                        <div className='shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.2)] flex flex-col gap-1 border-2 border-[#7FAFD3] rounded-3xl px-5 py-5 mt-10'>
                    <h1 className='font-jura font-bold text-4xl tracking-widest'>About Company</h1>
                    <p>{job?.employer?.employer?.about}</p>
                </div>
                    ) : (
                        <div></div>
                    )
                }
            </div>
        </div>
    )
}

export default JOB
