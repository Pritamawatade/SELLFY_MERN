const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

require('dotenv/config')

app.use(cors())
app.options('*', cors())


app.use(bodyParser.json()) 
 
//Routes 

const categoryRoutes = require('./routes/categories')

app.use(`/api/category`, categoryRoutes)

//Databse connection 
mongoose.connect(process.env.CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() =>{
    console.log('Connected to MongoDB')
})
.catch((error) => {
    console.error('Error connecting to MongoDB:', error.message)
})



app.listen(process.env.PORT, () =>{
    console.log(`app is listening on port ${process.env.PORT}`);
    
})

