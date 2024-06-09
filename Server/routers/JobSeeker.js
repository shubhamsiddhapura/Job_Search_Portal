const express = require('express');

const router = express.Router();

const {updateJobSeeker,deleteAccount,getAllJobSeekerDetails,getAplliedJobs,updateDisplayPicture} = require("../controllers/jobSeeker");
const { auth, isJobSeeker } = require('../middlewares/Auth');

router.put("/updateJobseeker",auth,isJobSeeker,updateJobSeeker);
router.delete("/deleteAccount",auth,deleteAccount);
router.get("/getJobseekerdetails",auth,isJobSeeker,getAllJobSeekerDetails);


router.get('/getAppliedjobs',auth,isJobSeeker,getAplliedJobs);

//update profile picture
router.put("/updateDispalyPicture",auth,updateDisplayPicture)

module.exports = router;