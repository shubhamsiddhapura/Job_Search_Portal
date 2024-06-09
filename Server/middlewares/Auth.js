const jwt = require('jsonwebtoken');

exports.auth = async(req,res,next) => {
    try {
        const token = await req.cookies.token || req.body.token ||  req.header("Authorization").replace("Bearer ","") 
        console.log("token : ",token);
        if(!token) {
            return res.status(401).json({
                success:false,
                message:"token is missing"
            })
        }

        try {
            const decode = jwt.verify(token, process.env.JWT_SECRET);
            console.log(decode)
            req.user = decode;
        } catch (error) {
            return res.status(401).json({
                success:false,
                message:"token is invalid",
                error : error.message
            });
        }

        next();
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success:false,
            message:error.message
        })
    }
} 

exports.isJobSeeker = async(req,res,next) => {
    try{
        if(req.user.AccountType !== "Job Seeker"){
            return res.status(400).json({
                success:false,
                message:"This is a protected route for jobseeker only"
            })
        }

        next();
    } catch(error) {
        console.log(error);
        return res.status(500).json({
            success:false,
            message:"user rolecan not verify"
        })
    }
}

exports.isEmployer = async(req,res,next) => {
    try{
        if(req.user.AccountType !== "Employer"){
            return res.status(400).json({
                success:false,
                message:"This is a protected route for Employer only"
            })
        }

        next();
    } catch(error) {
        console.log(error);
        return res.status(500).json({
            success:false,
            message:"user rolecan not verify"
        })
    }
}

exports.isAdmin = async(req,res,next) => {
    try{
        console.log(req.user.AccountType);
        if(req.user.AccountType !== "Admin"){
            return res.status(400).json({
                success:false,
                message:"This is a protected route for Admin only"
            })
        }

        next();
    } catch(error) {
        console.log(error);
        return res.status(500).json({
            success:false,
            message:"user rolecan not verify"
        })
    }
}