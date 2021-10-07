import React from "react";
import { useSelector } from 'react-redux';
import { Grid } from '@material-ui/core';

import Workout from "./Workout/workout";

import useStyles from './styles'

const Workouts = ({ setCurrentId }) => {
    const workouts = useSelector(state => state.workouts)

    const classes = useStyles();
    return (
        // !workouts.length ? <CircularProgress /> : (
        <Grid className={classes.container} spacing={3} container alignItems="stretch" >
            {workouts.map((workout) => (
                <Grid key={workout._id} item xs={12} sm={6} md={6}>
                    <Workout workout={workout} setCurrentId={setCurrentId} />
                </Grid>
            ))}
        </Grid>

    );

}

export default Workouts