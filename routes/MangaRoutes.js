//DEPENDANCIES 
const express = require('express');
const router = express.Router()
const Manga = require('../models/Manga');
//ROUTES
//I.N.D.U.C.E.S

//Index - Lists all mangas
router.get('/', async (req,res) =>{
    try {
        const allMangas = await Manga.find()
        res.status(200).json(allMangas)

    } catch (error){
        console.error(error)
        res.status(500).send("UNABLE TO FETCH ALL MANGAS :(")
    }
});

// GET/:id Read only one by id.

router.get('/:id', async (req,res)=>{
    try{
        const manga = await Manga.findById(req.params.id)
        // If no document matches the provided _id
        if(!manga){
            res.status(404).json({ message: "Manga Not Found :/"})
        }

        // Return the found manga
        res.status(200).json(manga)
        
    } catch(error) {
        console.error()
    res.status(500).send(`Unable to fetch Manga: ${req.params.id}.`)
    }

});
//New - Generate a form for the creation of a new manga 


//Delete -  posting nothing that was stored 

router.delete('/:id', async (req,res) =>{
    try{
        await Manga.findByIdAndDelete(req.params.id)
        res.send('Manga deleted successfully.')
    } catch (error) {
        console.error(error)
        res.status(500)
    }
})

// Update - Update a manga (PUT /mangas/:id)

router.put('/:id', async (req, res) => {
    try {
        const newManga = await Manga.findByIdAndUpdate(req.params.id,
        req.body,
        {new: true} 
        ).exec();
        res.status(200).json(newManga)

    } catch(error){
        console.error(error)
        res.status(500).send("There seems to be an issue with the update.")
    }
});


// Create - Make a manga! (POST /mangas)

router.post('/', async (req, res) => {
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