const express = require('express')
const asyncHandler = require('express-async-handler')
const { getProducts, getProductById } = require('../controllers/productController')
const Product = require('./../models/productModal')

const router = express.Router()


router.route('/').get(getProducts)

router.route('/:id').get(getProductById)

module.exports = router