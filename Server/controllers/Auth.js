const User = require("../models/user");
const otpGenerator = require("otp-generator");
const Otp = require("../models/Otp");
const Employer = require("../models/Employer");
const JobSeeker = require("../models/JobSeeker");
require("dotenv").config();
const OTP = require("../models/Otp");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');


exports.sendOTP = async (req, res) => {
    try {
        const { email } = req.body;

        const user = await User.findOne({ email });

        if (user) {
            return res.status(400).json({
                success: false,
                message: "User already exists"
            })
        }

        var otp = otpGenerator.generate(6, {
            upperCaseAlphabets: false,
            lowerCaseAlphabets: false,
            specialChars: false
        })

        console.log("OTP : ", otp);

        const result = await Otp.findOne({ otp: otp });

        while (result) {
            otp = otpGenerator.generate(6, {
                upperCaseAlphabets: false,
                lowerCaseAlphabets: false,
                specialChars: false
            });
            const result = await Otp.findOne({ otp: otp });
        };

        const otpPayload = { email: email, otp: otp };

        const otpBody = await Otp.create(otpPayload);
        console.log("otpbody : ", otpBody);


        return res.status(200).json({
            success: true,
            message: "otp sent successfully",
            data: otpBody
        })

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

//Sign up

exports.signUp = async (req, res) => {
    try {
        const {
            firstName,
            lastName,
            email,
            password,
            confirmPassword,
            AccountType,
            otp,
            location
        } = req.body;

        console.log(" BACKEND : >>>>>.....",
            "firstname : ", firstName,
            "lastname : ",lastName,
            "email : ",email,
            "password : ",password,
            "confirm password: ",confirmPassword,
            "Account type : ",AccountType,
            "otp : ",otp,
            "location : ",location
        );

        if (!firstName ||
            !lastName ||
            !email ||
            !password ||
            !confirmPassword ||
            !location ||
            !otp 
            ) {
            return res.status(401).json({
                success: false,
                message: "All feilds are required"
            })
        }

        if (password !== confirmPassword) {
            return res.status(400).json({
                success: false,
                message: "password and confirmPaassword are not same"
            })
        }

        const existUser = await User.findOne({ email });

        if (existUser) {
            return res.status(400).json({
                success: false,
                message: "User already exists"
            });
        }

        const response = await OTP.find({email}).sort({createdAt:-1}).limit(1);
        console.log(response);
        // validate otp

        if (response.length === 0) {
            return res.status(400).json({
                success: false,
                message: "otp not found"
            })
        } else if (otp !== response[0].otp) {
            return res.status(400).json({
                success: false,
                message: "Invalid otp"
            });
        }

        //hashed password

        const hashedPassword = await bcrypt.hash(password, 10);

        let userType = ""
        userType === 'Employer'  ? (userType = false) : (userType = true)

        const employerDetails = await Employer.create({
            about: null,
            location: location,
            category: null,
            contactNumber: null
        })

        const jobSeekerDetails = await
            JobSeeker.create({
                appliedJobs: null,
                dateOfBirth: null,
                about: null,
                contactNumber: null,
                currentSalary: null,
                location: location,
                degree: null,
                experiance: 0
            })


        const user = await User.create({
            firstName,
            lastName,
            email,
            password: hashedPassword,
            AccountType,
            userType:userType,
            jobSeeker: jobSeekerDetails._id,
            employer: employerDetails._id,
            image: `https://api.dicebear.com/7.x/initials/svg?seed=${firstName} ${lastName}`,
        })

        return res.status(200).json({
            success: true,
            message: "user registerd successfully",
            data: user
        })

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "User not registered, please try again"
        })
    }
}


//Login

exports.login = async (req,res) => {
    try{

        const {email, password} = req.body;

        if(!email || !password) {
            return res.staus(400).json({
                success:false,
                message:"All fields are required while login"
            });
        }

        const user = await User.findOne({email}).populate("AccountType" === 'Employer' ? "employer" : "jobSeeker");

        if(!user){
            return res.status(401).json({
                success:false,
                message:"User not exists"
            })
        };

        if(await bcrypt.compare(password, user.password)) {
            const payload = {
                email: user.email,
                id: user._id,
                AccountType: user.AccountType
            }

            const token = jwt.sign(payload, process.env.JWT_SECRET, {
                expiresIn:"1d"
            })
            user.token = token;
            user.password = undefined;

            const options = {
                expires: new Date(Date.now() + 1 *24*60*60*1000),
                httpOnly:true
            }

            res.cookie("token", token, options).status(200).json({
                success:true,
                token,
                user,
                message:"Log in successfully"
            })
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success:false,
            message:"login failed try again"
        });
    }
};

