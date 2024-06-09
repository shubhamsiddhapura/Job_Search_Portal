const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
    name : {
        type:String,
        required:true,
        trim:true,
    },
    description:{
        type:String,
        trim:true,
    },
    Jobs:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Job"
        }
    ]
})

module.exports = mongoose.model("Category", categorySchema);