// todo add action types

import * as api from '../api'

// action creaters function that return an action 
//redux thunk use dispatch
export const getWorkouts = () => async (dispatch) => {

    try {
        const { data } = await api.fetchworkouts
        dispatch({ type: 'FETCH_ALL', payload: data });

    } catch (error) {
        console.log(error.message)
    }




}

export const createWorkout = (workout) => async (dispatch) => {
    try {
        const { data } = await api.createWorkout(workout);
        dispatch({ type: 'CREATE', payload: data })
    } catch (error) {
        console.log(error)

    }
}

export const updateWorkout = (id, workout) => async (dispatch) => {
    try {
        const { data } = await api.updateWorkout(id, workout)
        dispatch({ type: 'UPDATE', payload: data })
    } catch (error) {
        console.log(error)

    }
}

export const deleteWorkout = (id) => async (dispatch) => {
    try {
        await api.deleteWorkout(id)
        dispatch({ type: 'DELETE', payload: id })
    } catch (error) {

    }
}