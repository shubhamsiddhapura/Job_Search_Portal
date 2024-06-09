import React, { useEffect, useState } from 'react'
import { useDispatch,useSelector } from'react-redux'
import { getFullJobDetails } from '../services/operations/jobsAPI';
import { setEditJob, setJob } from '../slices/jobSlice';
import CreateJob from './CreateJob';
import { useParams } from 'react-router-dom'

const EditJob = () => {

    const dispatch = useDispatch();
    const {jobId} = useParams();

    const {job} = useSelector((state) => state.job);
    const [loading,setLoading] = useState(false);
    const {token} = useSelector((state) => state.auth);

    useEffect(() => {
        const populatedJobDetails = async() => {
            setLoading(true);
            const result = await getFullJobDetails(jobId,token);
            console.log(result);
            if(result?.jobDetails){
                dispatch(setEditJob(true))
                dispatch(setJob(result?.jobDetails));
            }
            setLoading(false);
        } 

        populatedJobDetails();
    },[dispatch, jobId, token]);

    useEffect(() => {
        console.log(job);
    }, [job]);

    if(loading) {
        return (
            <div>
                Loading....
            </div>
        )
    }

  return (
    <div>
      <div>
        {
            job ? (<CreateJob text={"Edit Job"}/>) : (<p>Job Not Found</p>)
        }
      </div>
    </div>
  )
}

export default EditJob
