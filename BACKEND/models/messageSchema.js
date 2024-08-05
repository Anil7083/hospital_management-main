import mongoose from "mongoose";
import validator from "validator";

const messageSchema=new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        minLength:[3, "first Name Must Contain At least 3 characters!"],
    },
    lastName:{
        type:String,
        required:true,
        minLength:[3, "Last Name Must Contain At least 3 characters!"],
    },
    email:{
        type:String,
        required:true,
        validator:[validator.isEmail, "Please Provide A Valid Email!"],
    },
    phone:{
        type:String,
        required:true,
        minLength:[11, "Phone Number Must Contain Exact 11 Digits!"],
        mixLength:[11, "Phone Number Must Contain Exact 11 Digits!"],
    },
    message:{
        type:String,
        required:true,
        minLength:[10, "Message Must Contain Exact 11 Digits!"],
    },
})

export const Message = mongoose.model("Message", messageSchema);