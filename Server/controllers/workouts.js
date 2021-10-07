import mongoose from 'mongoose';
import workouts from '../modules/details.js';
import Details from '../modules/details.js'



export const createWorkout = async (req, res) => {
    const workout = req.body;

    const newWorkout = new Details(workout)

    try {
        await newWorkout.save();

        //201 Created
        res.status(201).json(newWorkout);
    } catch (error) {
        res.status(405).json({ message: error.message })
    }
}

export const getWorkouts = async (req, res) => {
    try {
        const details = await Details.find();
        console.log(details)

        //200 OK
        res.status(200).json(details)
    } catch (error) {
        //405 Method Not Allowed
        res.status(405).json({ message: error.message })
    }
}

export const updateWorkout = async (req, res) => {
    const { id: _id } = req.params;
    const workout = req.body;

    if (!mongoose.Types.ObjectId.isValid(_id))
        return res.status(404).send('workout not found');

    const updatedWorkout = await workouts.findByIdAndUpdate(_id, { ...workout, _id }, { new: true })

    res.json(updatedWorkout);
}


export const deleteWorkout = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id))
        return res.status(404).send('workout not found');

    await workouts.findByIdAndRemove(id)

    res.json({ details: 'workout deleted' });
}