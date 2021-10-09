import express from "express";

import { getWorkouts, createWorkout, updateWorkout, deleteWorkout } from "../controllers/workouts.js";

const router = express.Router();

// http://localhost:3001/workouts


// get workout
router.delete('/:id', deleteWorkout);
// get workout
router.get('/', getWorkouts);
// post workout
router.post('/', createWorkout);
// update workout
router.patch('/:id', updateWorkout)


export default router