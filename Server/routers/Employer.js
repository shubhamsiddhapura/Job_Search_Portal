const express = require("express");

const router = express.Router();

const {auth,isEmployer} = require("../middlewares/Auth");

const {updateEmployer,deleteAccount,getAllEmployerDetails,postJobs} = require("../controllers/Employer")

router.put("/updateEmployer",auth,isEmployer,updateEmployer);
router.delete("deleteAccount",auth,deleteAccount);
router.get("/getEmployerDetails",auth,isEmployer,getAllEmployerDetails);

//get all postjobs
router.get("/getjobposts",auth,isEmployer,postJobs)

module.exports = router;