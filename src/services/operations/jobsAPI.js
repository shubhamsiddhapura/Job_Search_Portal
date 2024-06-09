import toast from "react-hot-toast";
import { apiConnector } from "../apiConnector";
import axios from "axios";
const BASE_URL = process.env.REACT_APP_BASE_URL

const { jobendpoints, categoryendpoints, applyendpoints, employerendpoints } = require("../apis");

const {
    GETALLJOBS_API,
    EDITJOB_API,
    CREATEJOB_API,
    GET_JOB_APPICANTS,
    GET_JOB_FULL_DETAILS
} = jobendpoints

const {
    SHOWALLCATEGORIES_API
} = categoryendpoints

const {
    APPLYJOB_API
} = applyendpoints

const {
    GETJOB_POSTS_API
} = employerendpoints

export const getAllJobs = async () => {
    const toastId = toast.loading("Loading...");
    let result = [];
    try {
        const response = await apiConnector("GET", GETALLJOBS_API);
        if (!response?.data?.success) {
            throw new Error("Could not fetch all jobs")
        }
        result = response?.data?.data
    } catch (error) {
        console.log("GETALLJOBS_API ERROR....", error);
        toast.error(error.message);
    }
    toast.dismiss(toastId)
    return result
}

// export const getOneJobDetails = async (jobId) => {
//     console.log("JOB ID>>>>>>>>>>",jobId);
//     const toastId = toast.loading("Loading...");
//     let result = null;
//     try {
//         const response = await apiConnector("GET", GETJOB_DETAILS_API, {
//             jobId
//         })
//         console.log("RESPONSE>>>>>>>>",response)
//         console.log("GETJOB_DETAILS_API RESPONSE...",response);

//         if(!response?.data?.success){
//             throw new Error(response.data.message);
//         }

//         result = response.data
//     } catch (error){
//         console.log("GETJOB_DETAILS_API ERROR......",error);
//         result = error.response.data
//     }
//     toast.dismiss(toastId);
//     return result
// }

// export const getOneJobDetails = async(jobId) => {
//     const toastId = toast.loading("Loading....")
//     console.log("JOBIDDDD......",jobId);
//     let result = null;
//     console.log(`${BASE_URL}/getJobDetails/${jobId}`)
//     try {
//         const res = axios.get(`${BASE_URL}/getJobDetails`,{params:{
//             id:jobId
//         }})
//         console.log("GETJOB_DETAILS_API RSPONSE........",res);

//         // if(!res?.data?.success){
//         //     throw new Error(res.data.message)
//         // }

//         result = res?.data?.data
//     } catch (error) {
//         console.log("GETJOB_DETAILS_API ERROR....",error)
//     }
//     toast.dismiss(toastId);
//     return result
// }

export const getOneJobDetails = async (jobId) => {
    const toastId = toast.loading("Loading....");
    console.log("JOBIDDDD......", jobId);
    let result = null;
    const url = `${BASE_URL}/job/getJobDetails`
    try {
        const res = await axios.get(`${url}/${jobId}`);
        console.log("GETJOB_DETAILS_API RESPONSE........", res);

        if (!res || !res.data || !res.data.success) {
            throw new Error("Failed to get job details");
        }

        result = res.data.data;
    } catch (error) {
        console.log("GETJOB_DETAILS_API ERROR....", error);
        // Handle error gracefully, perhaps log it or show an error message
    }
    toast.dismiss(toastId);
    return result;
}

export const fetchJobCategories = async () => {
    let result = []
    try {
        const res = await apiConnector("GET", SHOWALLCATEGORIES_API)

        console.log("SHOWALLCATEGORIES_API RESPONSE.....", res);

        if (!res?.data?.success) {
            throw new Error("Could not fetch the categories")
        }

        result = res?.data?.data
    } catch (error) {
        console.log("SHOWALLCATEGORIES_API ERROR", error);
    }
    return result
}

export const editJobDetails = async (data, token) => {
    let result = null
    const toastId = toast.loading("Loading...")
    try {
        const response = await apiConnector("POST", EDITJOB_API, data, {
            "Contect-Type": "multipart/form-data",
            authorization: `Bearer ${token}`,
        })

        console.log("EDITJOB_API RESPONSE....", response);

        if (!response?.data?.success) {
            throw new Error("Could not edit the job")
        }

        toast.success("JOb updated successfully")
        result = response?.data?.data
    } catch (error) {
        console.log("EDITJOB_API ERROR....", error);
        toast.error(error.message)
    }
    toast.dismiss(toastId);
    return result
}

export const addJob = async (data, token) => {
    let result = null
    const toastId = toast.loading("Loading...")
    try {
        const response = await apiConnector("POST", CREATEJOB_API, data, {
            "Contect-Type": "multipart/form-data",
            authorization: `Bearer ${token}`,
        })

        console.log("CREATEJOB_API RESPONSE....", response);
        if (!response?.data?.success) {
            throw new Error("Could not Add Job Details")
        }

        toast.success("Job add Successfully")
        result = response?.data?.data
    } catch (error) {
        console.log("CREATEJOB_API ERROR.....", error)
        toast.error(error.message);
    }
    toast.dismiss(toastId);
    return result
}

export const applyJob = async (jobId, token) => {
    let result = []
    const toastId = toast.loading("Loading...")
    try {
        const res = await apiConnector("POST", APPLYJOB_API, {
            authorization: `Bearer ${token}`,
            jobId
        })

        console.log("APPLYJOB_API RESPONSE.....", res);

        toast.success("Job Apply Successfully")
        result = res?.data?.data
    } catch (error) {
        console.log("APPLYJOB_API ERROR.....", error);
        // toast.error(error.message)
    }
    toast.dismiss(toastId);
    return result
}

export const getJobPost = async (token) => {
    let result = []
    console.log(token);
    try {
        // const res = await apiConnector("GET", GETJOB_POSTS_API, {
        //     authorization : `Bearer ${token}`
        // });

        const res = await axios.get(`${BASE_URL}/employer/getjobposts`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        console.log("GETJOB_POSTS_API RESPONSE.....", res)

        result = res?.data?.data
    } catch (error) {
        console.log("GETJOB_POSTS_API ERROR.....", error)
    }
    return result
}

export const getJobApplicants = async (token, jobid) => {
    let result = null
    console.log(jobid);
    try {

        const res = await axios({
            method: 'get',
            url: BASE_URL + '/job/getJobApplicants',
            headers: { authorization: `Bearer ${token}` },
            cookie: {
                jobId: jobid
            }
        });

        console.log("GET_JOB_APPICANTS RESPONSE.....", res)

        result = res?.data?.data
    } catch (error) {
        console.log("GET_JOB_APPICANTS ERROR...........", error);
    }

    return result
}

export const getFullJobDetails = async (jobId, token) => {
    const toastId = toast.loading("Loading.....")
    let result = null
    try {
        const response = await apiConnector("POST", GET_JOB_FULL_DETAILS, {
            jobId
        },
            { Authorization: `Bearer ${token}` })

        console.log("GET_JOB_FULL_DETAILS RESPONSE.......", response);

        if (!response?.data?.success) {
            throw new Error("Could not get full job details")
        }

        result = response?.data?.data
    } catch (error) {
        console.log("GET_JOB_FULL_DETAILS ERROR.....", error);
        result = error.response.data
    }
    toast.dismiss(toastId)
    return result
}