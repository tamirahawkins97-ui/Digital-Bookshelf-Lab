// DEPENDENCIES 
const express = require('express');
const router = express.Router();
const Manga = require('../models/Manga');

// ROUTES (I.N.D.U.C.E.S)

// Index - Lists all mangas (GET /mangas)
router.get('/', async (req, res) => {
  try {
    const allMangas = await Manga.find();
    res.status(200).json(allMangas);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Unable to fetch all mangas" });
  }
});

// Read One by ID (GET /mangas/:id)
router.get('/:id', async (req, res) => {
  try {
    const manga = await Manga.findById(req.params.id);

    // Guard clause: Return early if not found
    if (!manga) {
      return res.status(404).json({ message: "Manga Not Found :/" });
    }

    res.status(200).json(manga);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: `Unable to fetch manga with ID: ${req.params.id}` });
  }
});

// Delete (DELETE /mangas/:id)
router.delete('/:id', async (req, res) => {
  try {
    const deletedManga = await Manga.findByIdAndDelete(req.params.id);

    if (!deletedManga) {
      return res.status(404).json({ message: "Manga not found to delete" });
    }

    res.status(200).json({ message: 'Manga deleted successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

// Update (PUT /mangas/:id)
router.put('/:id', async (req, res) => {
  try {
    const updatedManga = await Manga.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true } // runValidators ensures updates obey schema rules
    );

    if (!updatedManga) {
      return res.status(404).json({ message: "Manga not found to update" });
    }

    res.status(200).json(updatedManga);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error.message });
  }
});

// Create (POST /mangas)
router.post('/', async (req, res) => {
  try {
    const createdManga = await Manga.create(req.body);
    res.status(201).json(createdManga);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;