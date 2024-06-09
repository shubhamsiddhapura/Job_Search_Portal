import React, { useEffect, useState } from 'react'
import { IoIosSearch } from "react-icons/io";
import { getAllJobs } from '../services/operations/jobsAPI';
import { IoLocationSharp } from "react-icons/io5";
import { MdOutlineDescription } from "react-icons/md";
import { Link } from 'react-router-dom';

const Jobs = () => {


    const [jobs, setjobs] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getAllJobs();
                console.log(data);
                setjobs(data);
            } catch (error) {
                console.log("Error in fetching jobs", error);
            }
        }

        fetchData();
    }, [])


    return (
        <div>

            <div className=' w-8/12 mx-auto'>
                <form className='relative flex justify-center mt-10'>
                    <label>
                        <input
                            type='search'
                            placeholder='Data Analytics'
                            className='lg:w-[700px] lg:h-[75px] rounded-full border-2 border-[#7FAFD3] placeholder:font-jura placeholder:text-[28px] placeholder:pl-10 placeholder:font-medium placeholder:text-[#7FAFD3]' />
                        <IoIosSearch className=' absolute top-2 right-[163px] text-6xl p-3 bg-[#7FAFD3] rounded-full' />
                    </label>
                </form>

                <div className='flex flex-col gap-10 mt-16'>
                    {
                        jobs.map((job) => (
                            <div key={job._id}>

                                <div className='w-full border-2 border-[#7FAFD3] rounded-3xl px-8 py-8 flex flex-col gap-1 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.2)]'>
                                    <h1 className='font-jura font-bold text-4xl'>{job.jobTitle}</h1>
                                    <p className='font-jura font-normal text-2xl tracking-wide'>{job?.employer?.firstName}<span>{job?.employer?.lastName} Co.</span></p>
                                    <p className='font-jura font-normal text-xl flex items-center gap-2'>
                                        <IoLocationSharp />
                                        {job?.location}
                                    </p>
                                    <p className='font-jura font-normal text-xl flex gap-1 items-center'>
                                        <MdOutlineDescription />
                                        {job?.jobDescription.split(" ").slice(0,20).join(" ")}.....
                                    </p>
                                    <p className='font-jura font-normal text-xl'><span className='font-jura font-bold text-xl'>Type : </span>{job?.jobType}</p>

                                    <div className='flex justify-end '>
                                        <Link to={`/jobs/${job._id}`}>
                                            <button className='border-2 border-[#7FAFD3] w-fit text-xl font-jura px-2 py-[5px] rounded-xl bg-[#004E89] text-white'>
                                                Apply now
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>


        </div>
    )
}

export default Jobs
