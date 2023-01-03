const mongoose = require('mongoose')

// const variantSchema = mongoose.Schema(
//     {
//         title: { type: String, required: true },
//         price: { type: Number, required: true },
//         sku: { type: String, required: true },
//         position: { type: Number, required: true },
//         option1: { type: String, required: true },
//         option2: { type: String, required: false },
//     },
//     {
//         timestamps: true,
//     }
// )

// const optionSchema = mongoose.Schema(
//     {
//         name: { type: String, required: true },
//         position: { type: Number, required: true },
//         values: { type: Array, required: false },
//     },
//     {
//         timestamps: true,
//     }
// )

// const imageSchema = mongoose.Schema(
//     {
//         src: { type: String, required: true },
//         variant_ids: { type: Array, required: false },
//     },
//     {
//         timestamps: true,
//     }
// )

const shopifySchema = mongoose.Schema(
    {
        "name": {
            "type": "String"
        },
        "description": {
            "type": "String"
        },
        "vendor": {
            "type": "String"
        },
        "tags": {
            "type": "String"
        },
        "variants": {
            "type": [
                "Mixed"
            ]
        },
        "options": {
            "type": [
                "Mixed"
            ]
        },
        "images": {
            "type": [
                "Mixed"
            ]
        }
    },
    {
        timestamps: true
    })
const Shopify = mongoose.model('Shopify', shopifySchema)

module.exports = Shopify