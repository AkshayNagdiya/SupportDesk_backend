const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const { connectDB } = require('./Config/db');
const colors = require('colors');

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB connection
connectDB();

// Routes
app.use('/api/auth', require("./Router/Auth"));
app.use('/api/tickets', require("./Router/Ticketroutes"));

// Start the server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`.bgBlue);
});
