const e = require('express');
const mongoose = require('mongoose');
require('dotenv').config(); // Load .env file

// Get the MongoDB URI from your environment variables
const db = process.env.MONGO_URI;

const connectToDb = async ()=>{
  mongoose.connect(db).then((conn)=>{
    console.log(`Connected to Detabase ${conn.connection}`)
  }).catch((error)=>{
    console.log(error.message)
    process.exit(1)
  })
}
module.exports = connectToDb;