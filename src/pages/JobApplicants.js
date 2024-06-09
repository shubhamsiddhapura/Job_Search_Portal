import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { getJobApplicants } from '../services/operations/jobsAPI';
import { useParams } from 'react-router-dom'

const JobApplicants = () => {


    const { token } = useSelector((state) => state.auth);

    const jobId = useParams()
    console.log(jobId);

    const [applicants, setApplicants] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const data = await getJobApplicants(token,jobId);
            console.log("Data...", data)
            setApplicants(data)
        }

        fetchData();
    }, [])


    return (
        <div>

            {/* <div>
                {
                 applicants?.jobApplications((applicant,index) => (
                    <div key={index}>

                    </div>
                 ))   
                }
            </div> */}
        </div>
    )
}

export default JobApplicants
