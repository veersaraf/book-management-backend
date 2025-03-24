import express from "express";
import { PORT, mongoURL } from "./config.js";
import mongoose from "mongoose";
import booksRoute from "./routes/bookRoutes.js";
import userRoutes from "./routes/userRoutes.js"; // Add user routes
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());

app.use('/books', booksRoute);
app.use('/users', userRoutes); // Add user routes

app.get('/', (request, response) => { 
    console.log(request.status);
    return response.status(234).send("yeehaw");
});

mongoose
    .connect(mongoURL)
    .then(() => {
        console.log("success");
        app.listen(PORT, () => {
            console.log("App is listening to PORT");
        });
    })
    .catch((error) => {
        console.log(error);
    });