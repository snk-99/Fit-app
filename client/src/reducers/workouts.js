// import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';


const workouts = (workouts = [], action) => {
    switch (action.type) {
        case 'DELETE':
            return workouts.filter((workout) => workout._id !== action.payload);
        case 'FETCH_ALL':
            return action.payload;

        case 'CREATE':
            return [...workouts, action.payload];

        case 'UPDATE':
            return workouts.map((workout) => (workout._id === action.payload._id ? action.payload : workout));

        default:
            return workouts;
    }
}

export default workouts;