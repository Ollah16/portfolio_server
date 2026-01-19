if (process.env.NODE_ENV != 'production') { require('dotenv').config(); }
const express = require("express");
const cors = require("cors");

const click = require("./routes/analytics.route");
const userData = require("./routes/user.route");

const connectDb = require("./config/db")

const app = express()
connectDb()

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/analytics", click)
app.use("/user", userData)

const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`Now listening on port ${PORT}`)
})