const mongoose=require('mongoose');

const employerSchema=new mongoose.Schema(
    {
        user:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User"
        },
        about:{
            type:String
        },
        category:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Category"
        },
        location:{
            type:String,
            required:true
        },
        contactNumber:{
            type:Number,
            trim:true
        },
    }
)
module.exports = mongoose.model("Employer", employerSchema)