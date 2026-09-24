
const mongoose = require('mongoose');

const mangaSchema = new mongoose.Schema({

    title:{type: String, required: true},
    author: {type:String, required:true},
    isbn: {type:String, required: true},
    publishedDate:{type: Date},
    inStock: {type:Boolean, default:true}

})

const Manga = mongoose.model("Manga", mangaSchema);

module.exports = Manga;
