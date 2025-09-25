import mongoose from "mongoose";
import bcrypt from "bcrypt";

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
    prescriptions:[]
},
{
    timestamps:true
},
);

doctorSchema.pre("save",async function(next){
    if(!this.isModified("password")){
        return next();
    }
    this.password = await bcrypt.hash(this.password,10)
    next()
});

doctorSchema.methods.isPasswordCorrect = async function(password){
    return await bcrypt.compare(password,this.password);
}

export const doctor = mongoose.model("doctor",doctorSchema);