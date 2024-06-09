import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { fetchJobCategories } from '../services/operations/jobsAPI'
import { useDispatch, useSelector } from 'react-redux'
import { editJobDetails } from '../services/operations/jobsAPI'
import { addJob } from '../services/operations/jobsAPI'
import toast from 'react-hot-toast'
import { setJob } from '../slices/jobSlice'

const CreateJob = ({text}) => {
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors }
  } = useForm()

  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const { job, editJob } = useSelector((state) => state.job);

  const [loading, setLoading] = useState(false);
  const [jobCategories, setjobCategories] = useState([])


  useEffect(() => {
    const getCategories = async () => {
      setLoading(true);
      const categories = await fetchJobCategories();
      if (categories.length > 0) {
        setjobCategories(categories)
      }
      setLoading(false)
    }

    if (editJob) {
      setValue("jobTitle", job.jobTitle);
      setValue("jobDescription", job.jobDescription);
      setValue("Salary", job.Salary);
      setValue("location", job.loaction);
      setValue("jobType", job.jobType);
      setValue("category", job.category);
    }

    getCategories();
  }, [])

  const isJobUpdated = () => {
    const currentValues = getValues();
    if (currentValues.jobTitle !== job.jobTitle ||
      currentValues.jobDescription !== job.jobDescription ||
      currentValues.Salary !== job.Salary ||
      currentValues.location !== job.loaction ||
      currentValues.jobType !== job.jobType ||
      currentValues.category._id !== job.category._id)
      return true
    else {
      return false
    }
  }

  const onSubmit = async (data) => {

    if (editJob) {
      if (isJobUpdated()) {
        const currentValues = getValues();
        const formData = new FormData();

        formData.append("jobId", job._id);
        if (currentValues.jobTitle !== job.jobTitle) {
          formData.append("jobTitle", data.jobTitle)
        }

        if (currentValues.jobDescription !== job.jobDescription) {
          formData.append("jobDescription", data.jobDescription)
        }

        if (currentValues.Salary !== job.Salary) {
          formData.append("Salary", data.Salary)
        }

        if (currentValues.location !== job.location) {
          formData.append("location", data.location)
        }

        if (currentValues.jobType !== job.jobType) {
          formData.append("jobType", data.jobType)
        }

        if (currentValues.category !== job.category) {
          formData.append("category", data.category)
        }

        setLoading(true);
        console.log(data);
        const result = await editJobDetails(formData, token);
        setLoading(false);
        if (result) {
          dispatch(setJob(result))
        }
      } else {
        toast.error("No cahnges made to the form");
      }
      return;
    }

    const formData = new FormData();
    formData.append("jobTitle", data.jobTitle)
    formData.append("jobDescription", data.jobDescription)
    formData.append("Salary", data.Salary)
    formData.append("location", data.location)
    formData.append("jobType", data.jobType)
    formData.append("category", data.category)

    setLoading(true);
    const result = await addJob(formData, token);
    if (result) {
      dispatch(setJob(result));
    }
    setLoading(false);
  }
  return (
    <div className='h-[100vh] mb-20'>

      <div className='bg-[#7BBFF3] h-[500px] w-[500px] mt-10 ml-10 relative'>
        <div className='z-1000 backdrop-blur-3xl absolute border-2 border-[#13317E] rounded-xl top-14 left-16 w-[calc(100vw-15rem)]'>
          <p className='font-jura font-bold text-5xl text-center p-5'>{text}</p>

          <div className='mt-10'>
            <form onSubmit={handleSubmit(onSubmit)}>

              <div className='flex gap-10 w-fit mx-auto'>
                <div className='flex flex-col gap-10  pb-14'>
                  <div>
                    <label className='flex flex-col gap-3'>
                      <p className=' font-jura text-3xl font-bold'>
                        Job Title<sup className='text-red-400'>*</sup>
                      </p>
                      <input
                        type='text'
                        name='jobTitle'
                        id='jobTitle'
                        placeholder='Enter Job Title'
                        {...register("jobTitle", { required: true })}
                        className=' bg-[#F3F3F3] w-[500px] px-5 py-3 ml-5 border-[1px] border-black rounded-lg  placeholder:font-jura placeholder:font-bold' />
                    </label>{
                      errors.jobTitle && (
                        <span className='ml-5'>Job Title Required</span>
                      )
                    }
                  </div>


                  <div>
                    <label className='flex flex-col gap-3'>
                      <p className=' font-jura text-3xl font-bold'>
                        Job Description<sup className='text-red-400'>*</sup>
                      </p>
                      <textarea
                        type='text'
                        name='jobDescription'
                        id='jobDescription'
                        placeholder='Enter Job Description'
                        rows={7}
                        {...register("jobDescription", { required: true })}
                        className=' bg-[#F3F3F3] w-[500px] px-5 py-3 ml-5 border-[1px] border-black rounded-lg  placeholder:font-jura placeholder:font-bold' />
                    </label>{
                      errors.jobDescription && (
                        <span className='ml-5'>Job Description Required</span>
                      )
                    }
                  </div>

                  <div>
                    <label className='flex flex-col gap-3'>
                      <p className=' font-jura text-3xl font-bold'>
                        Salary<sup className='text-red-400'>*</sup>
                      </p>
                      <input
                        type='text'
                        name='Salary'
                        id='Salary'
                        placeholder='Enter Salary'
                        {...register("Salary", { required: true })}
                        className=' bg-[#F3F3F3] w-[500px] px-5 border-[1px] border-black rounded-lg py-3 ml-5 placeholder:font-jura placeholder:font-bold' />
                    </label>{
                      errors.Salary && (
                        <span className='ml-5'>Salary Required</span>
                      )
                    }
                  </div>
                </div>

                <div className='flex flex-col gap-10'>
                  <div>
                    <label className='flex flex-col gap-3'>
                      <p className=' font-jura text-3xl font-bold'>
                        Location<sup className='text-red-400'>*</sup>
                      </p>
                      <input
                        type='text'
                        name='location'
                        id='location'
                        placeholder='Enter Job Location'
                        {...register("location", { required: true })}
                        className=' bg-[#F3F3F3] w-[500px] px-5 py-3 ml-5 border-[1px] border-black rounded-lg  placeholder:font-jura placeholder:font-bold' />
                    </label>{
                      errors.location && (
                        <span className='ml-5'>Job Location Required</span>
                      )
                    }
                  </div>

                  <div>
                    <label className='flex flex-col gap-3'>
                      <p className=' font-jura text-3xl font-bold'>
                        Job Type<sup className='text-red-400'>*</sup>
                      </p>
                      <select
                        id='jobType'
                        defaultValue=""
                        {...register("jobType", { required: true })}
                        className=' bg-[#F3F3F3] w-[500px] px-5 py-3 ml-5 border-[1px] border-black rounded-lg  placeholder:font-jura placeholder:font-bold'>
                        <option value="Part-Time">Part-Time</option>
                        <option value="Full-Time">Full-Time</option>
                      </select>
                    </label>{
                      errors.jobType && (
                        <span className='ml-5'>Job Location Required</span>
                      )
                    }
                  </div>

                  <div>
                    <label className='flex flex-col gap-3'>
                      <p className=' font-jura text-3xl font-bold'>
                        Category<sup className='text-red-400'>*</sup>
                      </p>
                      <select
                        id='category'
                        defaultValue=""
                        {...register("category", { required: true })}
                        className=' bg-[#F3F3F3] w-[500px] px-5 py-3 ml-5 border-[1px] border-black rounded-lg  placeholder:font-jura placeholder:font-bold'>
                        <option value="" disabled className='font-jura font-bold'>Choose a Category</option>
                        {
                          !loading && jobCategories.map((ct, index) => (
                            <option key={index} value={ct._id}>{ct?.name}</option>
                          ))
                        }
                      </select>
                    </label>{
                      errors.jobType && (
                        <span className='ml-5'>Job Category Required</span>
                      )
                    }
                  </div>


                </div>



              </div>

              <button className='bg-[#7FAFD3] w-fit border-[1px] rounded-xl font-jura text-xl border-[#13317E] float-right mb-5 mr-28 px-10 font-bold py-4 '>
                Create Job
              </button>


            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateJob
