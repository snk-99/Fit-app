import mongoose from "mongoose";

// function with object 
const workoutSchema = mongoose.Schema({
    title: String,
    //message
    details: String,
    //creater
    name: String,
    tags: [String],
    selectedFile: String,
    likedCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
})

// change schema into a module
const workouts = mongoose.model('workouts', workoutSchema)

// export module
export default workouts;