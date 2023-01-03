const mongoose = require('mongoose')
const dotenv = require('dotenv').config()
const connectDB = require('./config/db')
const colors = require('colors')
const shopifies = require('./data/shopifys')
const Shopify = require('./models/shopifyModal')
var fs = require('fs'),
    readline = require('readline');

connectDB()

const destroyData = async () => {
    try {
        await Shopify.deleteMany()

        console.log(`Data destroyed`.red.inverse)
        process.exit()
    } catch (error) {
        console.log(`${error}`.red.inverse)
        process.exit(1)
    }
}

const importData = async () => {
    try {

        await Shopify.insertMany(shopifies)
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