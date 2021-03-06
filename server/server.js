import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from 'dotenv'
import bodyParser from "body-parser";
// import ApolloServer from 'apollo-server-express';
import path, { dirname } from "path";
import workoutRoutes from './routes/workouts.js';
import { fileURLToPath } from "url";


const PORT = process.env.PORT || 3001;
const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));


dotenv.config();

//Middleware
//data parsing
//Controls the maximum request body size
app.use(bodyParser.json({ limit: '25mb', extended: true }));
//Returns middleware that only parses
app.use(bodyParser.urlencoded({ limit: '25mb', extended: true }));
app.use(cors());



app.use('/workouts', workoutRoutes)

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});



const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/fit-app', {
            useNewUrlParser: true,
            useUnifiedTopology: true,

        })

            .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
            .catch((error) => console.log(`${error} did not connect`));

        console.log('MongoDB connected!!');
    } catch (err) {
        console.log('Failed to connect to MongoDB', err);
    }
};
connectDB();


