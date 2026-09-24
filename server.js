//DEPENDANICES 
const express = require('express');
const app = express();
const mongodb = require('mongodb');
require('dotenv').config();
const PORT = process.env.PORT || 2121;
const mongoose = require('mongoose');
const MangaRoutes = require('./routes/MangaRoutes');

//DATABASE CONNECTION 
const connectDB = require('./db/connection'); 

connectDB();

//MIDDLEWARE
app.use(express.urlencoded({extended: true}))
app.use(express.json());

//Mount Router
app.use('/mangas', MangaRoutes);

//PORT
app.listen(PORT, () => {
    console.log(`Server is running on port: http://localhost:${PORT}`)
});
