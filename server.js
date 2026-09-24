//DEPENDANICES 
const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 2121;
const MangaRoutes = require('./routes/MangaRoutes');

//DATABASE CONNECTION 
const connectDB = require('./db/connection'); 

connectDB();

//MIDDLEWARE
app.use(express.urlencoded({extended: true}))
app.use(express.json());

app.get('/', (req, res) => {
    res.send(`Welcome to the Digital Bookshelf API. Visit /mangas to view the manga collection.`);
});

//Mount Router
app.use('/mangas', MangaRoutes);

//PORT
app.listen(PORT, () => {
    console.log(`Server is running on port: http://localhost:${PORT}`)
});
