import mongoose, {schema} from "mongoose";

const patientSchema = new schema(
    {
        fullname:{
            type:String,
            required:true,
            trim:true
        },
        age:{
            type:Number,
            required:true
        },
        gender:{
            type:String,
            enum:["male","female","other"],
            required:true
        },
        contactnumber:{
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
        address:{
            type:String,
            required:true
        },
        healthrecord:[],
        symptoms:[],
        prescriptions:[],
        prescriptionForPharmacy:[]
    },
    {
        timestamps:true
    },
);



export const patient = mongoose.model("patient",patientSchema);