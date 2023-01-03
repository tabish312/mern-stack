const mongoose = require('mongoose')
const dotenv = require('dotenv').config()
const connectDB = require('./config/db')
const colors = require('colors')
const users = require('./data/users')
const products = require('./data/products')
const User = require('./models/userModal')
const Product = require('./models/productModal')
const Order = require('./models/orderModal')

connectDB()

const destroyData = async () => {
    try {
        await User.deleteMany()
        await Product.deleteMany()
        await Order.deleteMany()

        console.log(`Data destroyed`.red.inverse)
        process.exit()
    } catch (error) {
        console.log(`${error}`.red.inverse)
        process.exit(1)
    }
}

const importData = async () => {
    try {
        const createdUsers = await User.insertMany(users)

        const adminUser = createdUsers[0]._id;

        const sampleProducts = products.map(product => {
            return { ...product, user: adminUser }
        })

        await Product.insertMany(sampleProducts)
        console.log(`Data Imported`.green.inverse)
        process.exit()
    } catch (error) {
        console.log(`${error}`.red.inverse)
        process.exit(1)
    }
}


if (process.argv[2] === '-d') {
    destroyData()
}
else {
    importData()
}