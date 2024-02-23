"use server"
import { revalidatePath } from "next/cache"
import User from "../database/models/user.model"
import { connectToDatabase } from "../database/mongoose"
import { handleError } from "@/lib/utils"

//Create
export async function CreateUser(user: CreateUserParams){
    try {
        await connectToDatabase()
        const newUser = await User.create(user)
        return JSON.parse(JSON.stringify(newUser))
    } catch (error) {
        handleError(error)
    }

}

// Read
export async function getUserById(userId: string){
    try {
        await connectToDatabase()
        const user = await User.findOne({userId: userId})
        if(!user) throw new Error("User not found")
        return JSON.parse(JSON.stringify(user))
    } catch (error) {
        handleError(error)     
    }
}

// update
export async function updateUser(userId: string, user: UpdateUserParams){
    try {
        await connectToDatabase()
        const updatedUser = await User.findOneAndUpdate({
            userId
        }, user, {new: true})
        if(!updatedUser) throw new Error("User Update Failed")
        return JSON.parse(JSON.stringify(updatedUser));
    } catch(error){
        handleError(error)
    }
}



// delete user

export async function deleteUser(userId: string){
    try {
        await connectToDatabase();
        const userToDelete = await User.findOne({userId})
        if(!userToDelete){
            throw new Error("User not found")
        }

        const deletedUser = await User.findByIdAndDelete(userToDelete._id)
        revalidatePath("/")
        return deletedUser ? JSON.parse(JSON.stringify(deletedUser)): null
    }
    catch(error){
        handleError(error)
    }
}