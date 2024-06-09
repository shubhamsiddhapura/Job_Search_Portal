import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { getJobPost } from '../../services/operations/jobsAPI';
import { IoLocationSharp } from 'react-icons/io5'
import { Link, useNavigate} from 'react-router-dom';

const JobPost = () => {

  const navigate = useNavigate();

  const { token } = useSelector((state) => state.auth);

  const [jobposts, setJobPosts] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const data = await getJobPost(token);
      console.log("Data...", data)
      setJobPosts(data)
    }

    fetchData();
  }, [])

  console.log(jobposts);
  return (
    <div >
      <div className='lg:w-8/12 mx-auto mt-10'>
        {
          jobposts.map((job, index) => (
            <div key={index}>

              <div className='flex flex-col gap-1 border-2 border-[#7FAFD3] rounded-3xl px-5 py-5 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.2)] mt-10'>
                <h1 className='font-jura font-bold text-4xl'>{job.jobTitle}</h1>
                <p className='font-jura font-normal text-2xl'>{job.employer.firstName} {job.employer.lastName}</p>
                <p className='font-jura font-normal text-xl'>{job?.jobType}</p>
                <div className='flex items-center gap-2'>
                  <IoLocationSharp size={24} />
                  <p className='font-jura font-normal text-2xl'>{job.location}</p>
                </div>

                <div className='flex justify-end'>
                  <button className='border-2 border-[#004E89] py-1 px-3 rounded-2xl bg-[#7FAFD3] font-jura font-medium'
                  onClick={() => navigate(`/myjobs/editjob/${job._id}`)}>
                    Edit Job
                  </button>
                </div>

                <hr className=' border-[#7FAFD3] border-2 my-2' />

                
                <div className=' flex justify-end items-center gap-5'>
                  <p className='font-jura'>Applicants : <span className='font-bold'>{job.jobApplications.length}</span></p>

                  <Link to={`/my-jobs/${job?._id}`}>
                    <button className='border-2 border-[#004E89] py-1 px-3 rounded-2xl bg-[#7FAFD3] font-jura font-medium'
                    >View Applications</button>
                  </Link>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default JobPost
