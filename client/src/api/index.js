// api calls
import axios from 'axios'

const url = 'http://localhost:3001/workouts'

export const updateWorkout = (id, updatedWorkout) => axios.patch(`${url}/${id}`, updatedWorkout);
export const fetchworkouts = () => axios.get(url);
export const createWorkout = (newWorkout) => axios.post(url, newWorkout);
export const deleteWorkout = (id) => axios.delete(`${url}/${id}`);