import Details from '../modules/details.js'


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