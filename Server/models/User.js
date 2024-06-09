const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        trim : true,
    },
    lastName:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        trim:true,
    },
    password:{
        type:String,
        required:true
    },
    AccountType:{
        type:String,
        required:true,
        enum : ["Job Seeker","Employer","Admin"]
    },
    token:{
        type:String
    },
    jobSeeker:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"JobSeeker"
    },
    employer:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Employer"
    },
    jobs:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Job"
        }
    ],
    image:{
        type:String,
        required:true,
    }

})

module.exports = mongoose.model("User", userSchema);