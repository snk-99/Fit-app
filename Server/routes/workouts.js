import express from "express";

import { getWorkouts, createWorkout } from "../controllers/workouts.js";

const router = express.Router();

// http://localhost:3001/workouts
router.get('/', getWorkouts);
router.post('/', createWorkout);

export default router