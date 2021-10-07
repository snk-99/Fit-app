import React from "react";
import { CardActions, Card, CardContent, Typography, CardMedia, Button, } from '@material-ui/core/';
// import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
// import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
// import moment from 'moment';
import { useDispatch } from 'react-redux';

import { deleteWorkout } from "../../../actions/workouts";

import useStyles from './style'

const Workout = ({ workout, setCurrentId }) => {
    const dispatch = useDispatch();
    const classes = useStyles();
    return (
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={workout.selectedFile} title={workout.title} />
            <div className={classes.overlay}>
                <Typography variant="h6">{workout.name}</Typography>
                {/* moment-when it was created */}
                {/* <Typography variant="body2">{moment(workout.createdAt).fromNow()}</Typography> */}
            </div>
            <div className={classes.overlay2}>
                <Button style={{ color: 'white' }}
                    size="small" onClick={() => { setCurrentId(workout._id) }}>
                    edit
                </Button>
            </div>
            <div className={classes.details}>
                <Typography variant="body2" color="textSecondary" component="p">{workout.tags.map((tag) => `#${tag} `)}</Typography>
            </div>
            <Typography className={classes.title} gutterBottom variant="h5" component="h2">{workout.title}</Typography>
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">{workout.details}</Typography>
            </CardContent>
            <CardActions className={classes.cardActions} >
                <Button size="small" color="primary" onClick={() => dispatch(deleteWorkout(workout._id))} ><DeleteIcon fontSize="small" /> Delete</Button>
            </CardActions>
        </Card>

    );
}

export default Workout