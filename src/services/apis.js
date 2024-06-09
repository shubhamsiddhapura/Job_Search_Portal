const BASE_URL = process.env.REACT_APP_BASE_URL

//AUTH ENDPOINTS
export const endpoints = {
    SENDOTP_API : BASE_URL + "/auth/sendotp",
    SIGNUP_API : BASE_URL + "/auth/signup",
    LOGIN_API : BASE_URL + "/auth/login"
}

export const employerendpoints = {
    UPDATEEMPLOYER_API : BASE_URL + "/employer/updateEmployer",
    DELETEEMPLOYER : BASE_URL + "/employer/deleteAccount",
    GETEMPLIYER_DETAILS_API : BASE_URL + "/employer/getEmployerDetails",
    GETJOB_POSTS_API : BASE_URL + "/employer/getjobposts"
}

export const jobendpoints = {
    CREATEJOB_API : BASE_URL + "/job/createjob",
    GETALLJOBS_API : BASE_URL + "/job/getAllJobs",
    GETJOB_DETAILS_API : BASE_URL + "/job/getJobDetails",
    EDITJOB_API : BASE_URL + "/job/editJob",
    DELETEJOB_API : BASE_URL + "/job/deleteJob",
    GET_JOB_APPICANTS : BASE_URL + "/job/getJobApplicants",
    GET_JOB_FULL_DETAILS : BASE_URL + '/job/getFullJobDetails'
}

export const categoryendpoints = {
    CREATECATEGORY_API : BASE_URL + "/job/createCategory",
    SHOWALLCATEGORIES_API : BASE_URL + "/job/showAllCategories",
    GETCATEGORIES_PAGE_DETAILS_API : BASE_URL + "/job/getCategoryPageDetails",
}

export const jobseekerendpoints = {
    UPDATEJOBSEEKER_API : BASE_URL + "/jobseeker/updateJobseeker",
    DELETEJOBSEEKER_API : BASE_URL + "/jobseeker/deleteAccount",
    GETJOBSEEKER_DETAILS : BASE_URL + "/jobseeker/getJobseekerdetails",
    APPLIEDJOB_API : BASE_URL + "/jobseeker/getAppliedjobs",
    UPDATE_DIAPLAY_PICTURE : BASE_URL + "/jobseeker/updateDispalyPicture"
}

export const applyendpoints = {
    APPLYJOB_API : BASE_URL + "/apply/applyJob"
}