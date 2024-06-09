const Job = require("../models/Job");
const User = require('../models/user');
const mailSender = require("../utils/mailSender");

exports.applyJob = async(req,res) => {
    try {

        const {jobId} = req.body;
        console.log(req.body);
        console.log("User......",req.user.id);
        const userId = req.user.id;

        if(!jobId) { 
            return res.status(400).json({
                success:false,
                message:"Job id not found"
            })
        }

        const job = await Job.findById(jobId);

        if(!job) {
            return res.status(400).json({
                success:false,
                message:"job nor found of that id"
            });
        }
        // const uid = new mongoose.Types.Objectid(userId);
        console.log(job.jobApplications);
        if(job.jobApplications.includes(userId)){
            return res.status(400).json({
                success:false,
                message:"You have already applied this job"
            });
        }

        const appliedJob = await Job.findByIdAndUpdate(jobId,
            {
                $push:{
                    jobApplications:userId
                }
            },{new:true});

            if(!appliedJob){
                return res.status(400).json({
                    success:false,
                    message:"job not found"
                })
            }

            console.log(appliedJob);
            // const newJobId = new mongoose.Schema.Types.ObjectId(job_id); 

            const endrolledJobseekers = await User.findOneAndUpdate({_id:userId},{
                $push:{
                    jobs:jobId
                }
            },{new:true});

            console.log(endrolledJobseekers);

            const emailResponse = await mailSender(endrolledJobseekers.email,
                "Congratulation from me",
                "Your job application was suucessfull");

            console.log(emailResponse);

            return res.status(200).json({
                success:true,
                message:"jab applied successfully"
            })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success:false,
            message:"errro in appling jobs",
            error:error.message
        })
    }
}