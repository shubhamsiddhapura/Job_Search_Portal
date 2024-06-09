const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
    jobTitle:{
        type:String,
        trim:true
    },
    jobDescription:{
        type:String,
        trim:true,
    },
    employer:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    jobType:{
        type:String,
        enum:["Part-Time","Full-Time"],
    },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Category"
    },
    tag:{
        type:String,
    },
    location:{
        type:String,
    },
    jobPost:{
        type:String
    },
    Salary:{
        type:String
    },
    jobApplications:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"User"
        }
    ]
})

module.exports = mongoose.model("Job", jobSchema);