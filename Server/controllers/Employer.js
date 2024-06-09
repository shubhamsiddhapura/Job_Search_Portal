const { trusted } = require("mongoose");
const Employer = require("../models/Employer");
const User = require("../models/user");

exports.updateEmployer = async(req,res) => {
    try {
        const id = req.user.id;
        console.log(id);
        const {
            firstName = "",
            lastName = "",
            about,
            location = "",
            contactNumber = ""
        } = req.body;

        if(!firstName || !lastName || !location ||!contactNumber){
            return res.status(400).json({
                success:false,
                messagge:"all feilds are required in update the employer"
            })
        }

        const userDetails = await User.findById(id);

        const employerId = userDetails.employer;

        const employerDetails = await Employer.findById(employerId);

        const user = await User.findByIdAndUpdate(id, {
            firstName,
            lastName
        });

        await user.save();

        employerDetails.about = about;
        employerDetails.contactNumber = contactNumber;
        employerDetails.location = location;

        await employerDetails.save();

        const updatedEmployer = await User.findById(id).populate("employer").exec();

        return res.status(200).json({
            success:true,
            messagge:"Employyer updated successfully",
            data:updatedEmployer
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success:false,
            messagge:"error in updating Employer",
            error:error.messagge,
        })
    }
}

exports.deleteAccount = async(req,res) => {
    try {

        const id = req.user.id;

        const user = await User.findById({_id:id});

        if(!user) {
            return res.status(400).json({
                success:false,
                messagge:"user could not found"
            })
        }

        await Employer.findByIdAndDelete({_id:user.employer});

        await User.findByIdAndDelete({_id:id});

        return res.status(200).json({
            success:true,
            messagge:"User deleted successfully"
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success:false,
            messagge:"error in deleting the user"
        })
    }
}

exports.getAllEmployerDetails = async(req,res) => {
    try {
         const id = req.user.id;

         const userDetails = await User.findById(id).populate("employer").exec();

         return res.status(200).json({
            success:true,
            message:"user Data fetched successfully",
            data:userDetails
         })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success:false,
            message:"error while geting employer data",
            error:error.message,
        })
    }
}

exports.postJobs = async(req,res) => {
    try {

        const id = req.user.id;

        const userDetails = await User.findById({_id:id}).populate({
            path: "jobs",
            populate: {
                path : "jobApplications"
            }
        }).exec();

        if(!userDetails) {
            return res.status(400).json({
                success:false,
                message:"USer not found"
            });
        }

        return res.status(200).json({
            success:true,
            data:userDetails.jobs,
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success:false,
            message:"error in geting the data of job posts"
        })
    }
}