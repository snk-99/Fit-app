import React, { useState, useEffect } from "react";
import useStyles from './style'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FileBase from 'react-file-base64';
import Paper from '@mui/material/Paper'
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from 'react-redux'
import { createWorkout, updateWorkout } from "../../actions/workouts";


const Form = ({ currentId, setCurrentId }) => {
    const classes = useStyles();
    const [workoutData, setWorkoutData] = useState({ name: '', title: '', details: '', tags: '', selectedFile: '' });
    const workout = useSelector((state) => (currentId ? state.workouts.find((w) => w._id === currentId) : null));
    const dispatch = useDispatch();

    useEffect(() => {
        if (workout) setWorkoutData(workout);
    }, [workout])

    const handleSubmit = (e) => {
        e.preventDefault();

        if (currentId) {
            dispatch(updateWorkout(currentId, workoutData));
        } else {
            dispatch(createWorkout(workoutData));
        }

        clear();


    }

    const clear = () => {
        setCurrentId(null)
        setWorkoutData({ name: '', title: '', details: '', tags: '', selectedFile: '' });
    };


    return (
        // <h1>Form</h1>
        <Paper elevation={24} className={classes.paper}>
            <Box

                component="form"
                // sx={{
                //     '& > :not(style)': { m: 1, width: '100ch' },
                // }}
                noValidate
                autoComplete="off"
                onSubmit={handleSubmit}
                className={`${classes.r} ${classes.f}`}
            >
                <Typography variant="h5">{currentId ? `Edit ${workout.title}` : 'Create a Workout'}</Typography>
                <TextField name="name" id="outlined-basic" label="name" variant="outlined" fullWidth value={workoutData.name} onChange={(e) => setWorkoutData({ ...workoutData, name: e.target.value })} />
                <TextField name="title" id="outlined-basic" label="title" variant="outlined" fullWidth value={workoutData.title} onChange={(e) => setWorkoutData({ ...workoutData, title: e.target.value })} />
                <TextField name="details" label="details" variant="outlined" fullWidth multiline rows={4} value={workoutData.details} onChange={(e) => setWorkoutData({ ...workoutData, details: e.target.value })} />

                <div className={classes.fileInput}>
                    <FileBase type="file" multiple={false} onDone={({ base64 }) => setWorkoutData({ ...workoutData, selectedFile: base64 })} />
                </div>
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>

                <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>

            </Box>
        </Paper>
    );
}



export default Form