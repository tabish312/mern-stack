const express = require('express')
const dotenv = require('dotenv').config()
const connectDB = require('./config/db')
const colors = require('colors')
const app = express()
app.use(express.json())
const productRoutes = require('./routes/productRoutes')
const userRoutes = require('./routes/userRoutes')
const { notFound, errorHandler } = require('./middleware/errorMiddleware')

connectDB()


app.get('/', (req, res) => {
    res.send("API is running");
})

app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)

app.use(notFound)

app.use(errorHandler)

const port = process.env.PORT || 5000;

app.listen(port, console.log(`Server is running in ${process.env.NODE_ENV} on ${port}`.cyan.underline));