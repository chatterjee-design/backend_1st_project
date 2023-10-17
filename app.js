require('dotenv').config();  // Load .env file
const express = require('express');
const connectToDb = require('./config/db.js');
const router = require('./Routes/userRoutes.js');
const port = process.env.PORT || 3000;
const cors = require('cors');

const app = express();

app.use(cors());

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use('/', router);
app.listen(port, async ()=> {

    // connect to database
    await connectToDb()

    //connect to express server
    console.log(`server is running at http://localhost:${port}`)
});

module.exports = app;