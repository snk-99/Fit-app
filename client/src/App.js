// import React from 'react';

// //Material-UI
// import { Container, AppBar, Typography, Grow, Grid, Button, Toolbar, MenuIcon, IconButton, Box } from '@material-ui/core'

import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Grow, Grid, Container } from '@material-ui/core';

import { useDispatch } from 'react-redux';

import { getWorkouts } from './actions/workouts'
import Workouts from './components/Workouts/Workouts';
import Form from './components/Form/Form';

import useStyles from './styles'

const App = () => {
    const [currentId, setCurrentId] = useState(null);
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getWorkouts);
    }, [currentId, dispatch]);

    return (

        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar className={classes.toolBar}>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        WORKOUTS
                    </Typography>

                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid className={classes.maincont} container justifyContent="space-between" alignItems="stretch" spacing={3} >
                        <Grid item xs={12} sm={7}>
                            <Workouts setCurrentId={setCurrentId} />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form currentId={currentId} setCurrentId={setCurrentId} />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>

        </Box>


    );
}


export default App;