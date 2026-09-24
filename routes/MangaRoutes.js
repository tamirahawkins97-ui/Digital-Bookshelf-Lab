//DEPENDANCIES 
const express = require('express');
const router = express.Router()
const mongoose = require('mongoose')
const Manga = require('../models/Manga');
//ROUTES
//I.N.D.U.C.E.S

//Index - Lists all mangas
router.get("/mangas/", async (req,res) =>{
    try {
        const allMangas = await Manga.find()
        res.status(200).send("WELCOME TO THE MANGA MULTIVERSE!:D")

    } catch (error){
        console.error(error)
        res.status(500).send("UNABLE TO FETCH ALL MANGAS :(")
    }
});

// GET/:id Read only one by id.

router.get("/mangas/:id", async (req,res)=>{
    try{
        const manga = await Manga.findById(req.params.id)
        // If no document matches the provided _id
        if(!manga){
            res.status(404).json({ message: "Manga Not Found :/"})
        }

        // Return the found manga
        res.status(200).json(manga)
        res.redirect("/mangas/")
        
    } catch(error) {
        console.error()
       res.status(500).send(`Unable to fetch Manga: ${req.parms.id}.`)
    }

});
//New - Generate a form for the creation of a new manga 


//Delete -  posting nothing that was stored 

router.delete("/mangas/:id", async (req,res) =>{
    
    res.send("Book is being deleted. . . ")
    try{
        await Manga.getByIdAndDelete(req.params.id)
        res.redirect("/mangas/") 
    } catch (error) {
        console.error(error)
        res.status(500)
    }
})

// Update - Update a manga (PUT /mangas/:id)

router.put("/mangas/:id", async (req,res) => {
    try {
        const newManga = await Manga.getByIdAndUpdate(req.params.id,
        req.body,
        {new: true} 
        ).exec();
        res.redirect(`/mangas/${req.params.id}`)

    } catch(error){
        console.error(error)
        res.status(500).send("There seems to be an issue with the update.")
    }
});


// Create - Make a manga! (POST /mangas)

router.post("/mangas", async (req, res) => {
  try {
    const createdManga = await Manga.create(req.body);
    res.status(201).json(createdManga);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//E

//S

module.exports = router;