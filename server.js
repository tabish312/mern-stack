const express = require("express");
const app = express();
const dotenv = require('dotenv').config()
app.use(express.json());

app.get('/', (req, res) => {
    return res.json(
        { "status": "server is working" }
    );
})


const port = process.env.PORT;

app.listen(port, () => console.log(`Server running on port ${port}`));