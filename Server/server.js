import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import workoutRoutes from './routes/workouts.js'


const app = express();


app.use('/workouts', workoutRoutes)

//Middleware
//Controls the maximum request body size
app.use(bodyParser.json({ limit: '25mb', extended: true }));
//Returns middleware that only parses
app.use(bodyParser.urlencoded({ limit: '25mb', extended: true }));
app.use(cors());

const CONNECTION_URL = 'mongodb+srv://root:Njunge@cluster0.ueatv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const PORT = process.env.PORT || 3001;

// database connection
mongoose.connect(CONNECTION_URL)
    .then(() => app.listen(PORT, () => console.log(`connection to database established at port ${PORT}`)))
    .catch((err) => console.log(`db error ${err.message}`));

// mongoose.set('useFindAndModify', true);
