//DEPENDANICES 
const express = require('express');
const app = express();
const mongodb = require('mongodb');
require('dotenv').config();
const PORT = process.env.PORT || 2121;
const mongoose = require('mongoose');

//DATABASE CONNECTION 
const connectDB = require('./db/connection'); 

connectDB();

//MIDDLEWARE
app.use(express.urlencoded({extended: true}))
app.use(express.json());

//PORT
app.listen(PORT,(req,res) => {
    console.log(`Server is running on port: http://localhost:${PORT}`)
});
