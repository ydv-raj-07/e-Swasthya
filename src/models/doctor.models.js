import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    specialization:{
        type:String,
        required:true
    },
    qualification:[],
    experienceYears:{
        type:Number,
        default:0
    },
    contactNumber:{
        type:String,
        required:true
    },
    availability:[],
    patient:[],
    prescription:[]
},
{
    timestamps:true
},
);

export const doctor = mongoose.model("doctor",doctorSchema);