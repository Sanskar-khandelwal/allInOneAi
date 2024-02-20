import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
    email: {
        type: String, 
        required: true,
        unique: true
    },
    username: {
        type: String, 
        required: true,
        unique: true

    },
    photo: {
        type: String, 
        required: true,
        unique: true

    },
    firstName: {
        type: String,
        required: true
    },
   lastName : {
        type: String,
        required: true
    },
    planId: {
        type: String,
        required: true,
        default: 1
    },
    creditBalance: {
        type: String,
        required: true,
        default: 10
    }
})

const User = models?.UserModal || model("User", UserSchema)