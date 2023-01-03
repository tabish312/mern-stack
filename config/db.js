const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        mongoose.set("strictQuery", false);
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        })
        console.log(`Mongoose connected: ${mongoose.connection.host}`.yellow.bold)
    } catch (error) {
        console.log(`Connection error: ${error.message}`.red.underline)
        process.exit(1);
    }
}

module.exports = connectDB