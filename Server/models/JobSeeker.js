const { default: mongoose } = require("mongoose");

const jobSeekerSchema = new mongoose.Schema({


    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    appliedJobs:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Job"
        }
    ],
    dateOfBirth:{
        type:String,
    },
    about:{
        type:String,
        trim:true
    },
    contactNumber:{
        type:Number,
        trim:true,
    },
    currentSalary:{
        type:String,
    },
    location:{
        type:String,
    },
    degree:{
        type:String,
    },
    experiance:{
        type:String,
    }

})

module.exports = mongoose.model("JobSeeker", jobSeekerSchema);