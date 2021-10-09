import React from "react";
import CardActions from '@material-ui/core/CardActions';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

import DeleteIcon from '@material-ui/icons/Delete';
import { useDispatch } from 'react-redux';

import { deleteWorkout } from "../../../actions/workouts";

import useStyles from './style'

const Workout = ({ workout, setCurrentId }) => {
    const dispatch = useDispatch();
    const classes = useStyles();
    return (
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={workout.selectedFile} title={workout.title} />
            <div className={classes.o}>
                <Typography variant="h6">{workout.name}</Typography>
            </div>
            <div className={classes.o2}>
                <Button style={{ color: 'white' }}
                    size="small" onClick={() => { setCurrentId(workout._id) }}>
                    edit
                </Button>
            </div>
            <div className={classes.details}>
                <Typography variant="body2" color="textSecondary" component="p">{workout.tags.map((tag) => `#sam${tag} `)}</Typography>
            </div>
            <Typography className={classes.title} gutterBottom variant="h5" component="h2">{workout.title}</Typography>
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">{workout.details}</Typography>
            </CardContent>
            <CardActions className={classes.cardActions} >
                <Button size="small" onClick={() => dispatch(deleteWorkout(workout._id))} ><DeleteIcon fontSize="small" color="secondary" /> </Button>

            </CardActions>
        </Card>

    );
}

export default Workout