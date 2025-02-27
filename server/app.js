const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
//Routes 

const categoryRoutes = require('./routes/categories')
const productRoutes = require('./routes/products')
const subCatRoutes = require('./routes/SubCat')
const productRAMRoutes = require('./routes/productRAM')
const productWIGHTRoutes = require('./routes/productWeight')
const productSIZERoutes = require('./routes/productSize')
const reviewRoutes = require('./routes/productReviews')
const cart = require('./routes/cart')
const userRoutes = require('./routes/user');
const authJwt = require('./helper/jwt');
require('dotenv/config')
// require("dotenv").config();

app.use(cors())
app.options('*', cors())


// app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json()) 
app.use(express.json())
// app.use(authJwt())




app.use(`/api/category`, categoryRoutes)
app.use(`/api/products`, productRoutes)
app.use(`/api/subcategory`, subCatRoutes)
app.use(`/api/productRAM`, productRAMRoutes)
app.use(`/api/productWEIGHT`, productWIGHTRoutes)
app.use(`/api/productSIZE`, productSIZERoutes)
app.use(`/api/user`, userRoutes)
app.use(`/api/cart`, cart)
app.use(`/api/reviews`, reviewRoutes)

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




app.listen(process.env.PORT || 8000, () =>{
    console.log(`app is listening on port ${process.env.PORT}`);
    
})

