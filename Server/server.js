import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from 'dotenv'
import bodyParser from "body-parser";

import workoutRoutes from './routes/workouts.js'


const app = express();

dotenv.config();

//Middleware
//Controls the maximum request body size
app.use(bodyParser.json({ limit: '25mb', extended: true }));
//Returns middleware that only parses
app.use(bodyParser.urlencoded({ limit: '25mb', extended: true }));
app.use(cors());

app.use('/workouts', workoutRoutes)


const PORT = process.env.PORT || 3001;

// database connection
mongoose.connect(process.env.CONNECTION_URL)
    .then(() => app.listen(PORT, () => console.log(`connection to database established at port ${PORT}`)))
    .catch((err) => console.log(`db error ${err.message}`));

// mongoose.set('useFindAndModify', true);
