//DEPENDANCIES 
const mongoose = require('mongoose');
//Import the data here//

//DATABASE

const connectDB = () =>{

 mongoose.connect(process.env.MONGO_URI2 || process.env.MONGO_URI)

 const db = mongoose.connection
 db.on('error', (error) => console.log(error.message + 'Mongo is not running'))
 db.on('connected', () => console.log('mongoDB is connected.')) 
 db.on('disconnected', () => console.log('mongoDB is not connected. Try again.'))

}



module.exports = connectDB;
