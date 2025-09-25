import mongoose, {schema} from "mongoose";
import bcrypt from "bcrypt";

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
        prescriptionUploadedAtPharmacy:[]
    },
    {
        timestamps:true
    },
);

patientSchema.pre("save",async function(next){
    if(!this.isModified("password")){
        return next();
    }
    this.password = await bcrypt.hash(this.password,10)
    next()
});

patientSchema.methods.isPasswordCorrect = async function(password){
    return await bcrypt.compare(password,this.password);
}

export const patient = mongoose.model("patient",patientSchema);