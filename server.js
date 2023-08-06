// Author : Sohil
// Purpose : Creating A Node-Express Server and Set-up database Connection through mangoose.

//Importing Dependencies.
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from 'cors'
import dotenv from 'dotenv';

//Api Routes file
import apiv1 from "./api.js";


dotenv.config();
const app = express();
//Defining port here
var port = process.env.PORT || 5000;

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))

app.use(express.static('public'));

app.use(cors());
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "*")
    // "Origin, X-Requested, Content-Type, Accept Authorization"
    res.header("Access-Control-Allow-Methods", "POST, PUT, PATCH, GET, DELETE")
    next()
})

//Database connection
mongoose.connect(process.env.MONGO_DB_URI, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    app.listen(port, () => {
        console.log(`listening on ${port}`)
    })
}).catch((error) => {
    console.log(error.message)
})

// Usage of Route
app.use('/api/v1',apiv1);


