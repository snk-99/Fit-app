import mongoose from "mongoose";

const workoutSchema = mongoose.Schema({
    title: String,
    //message
    details: String,
    //creater
    name: String,
    tags: [String],
    SelectedFile: String,
    likedCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
})


const workouts = mongoose.model('workouts', workoutSchema)

export default workouts;