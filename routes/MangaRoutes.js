//DEPENDANCIES 
const express = require('express');
const router = express.Router()
const mongoose = require('mongoose')
const Manga = require('./models/Mangas.js');
//ROUTES
//I.N.D.U.C.E.S

//Index - Lists all mangas
router.get("/", async (req,res) =>{
    try {
        const allMangas = await Manga.find()
        res.status(200).send("WELCOME TO THE MANGA MULTIVERSE!:D")

    } catch (error){
        console.error(500)
        res.status(500).send("UNABLE TO FETCH ALL MANGAS :(")
    }
});

//New - Generate a form for the creation of a new manga 


//Delete

// Update - Update a manga (PUT /mangas/:id)

// Create - Make a manga! (POST /mangas)

router.post('/', async (req, res) => {
  try {
    const createdManga = await Manga.create(req.body);
    res.status(201).json(createdManga);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

Manga.create()

//E

//S