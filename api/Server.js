require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const routes = require('../api/Routes/Route');

const app = express();


app.use(express.json());

// Connect to MongoDB using the URI from .env file
mongoose.connect(process.env.DB_CONNECT).then(() => {
    console.log("Database connected successfully");
}).catch(err => {
    console.error("Database connection error:", err.message);
});

// Routes
app.use('/',routes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
