const mongoose = require('mongoose');
require('dotenv').config();

const con = mongoose.connect(process.env.MONGODB_URL)
.then(() => console.log("Database Connected successsfuly"))
.catch((err) => console.log(err))

module.exports = con;
