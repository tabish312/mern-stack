const bcryptjs = require('bcryptjs')

const users = [
    {
        name: "Tabish Ali",
        email: "mr.tabish1@gmail.com",
        password: bcryptjs.hashSync('123456', 10),
        isAdmin: true,
    },
    {
        name: "Zain nazeer",
        email: "zain@gmail.com",
        password: bcryptjs.hashSync('123456', 10)
    },
]

module.exports = users;