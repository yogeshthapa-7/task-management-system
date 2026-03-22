const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./db');

// Load env vars
dotenv.config();

// Connect to Database
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('API is running and connected to MongoDB!');
});

// Define Port
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running in dev mode on port ${PORT}`);
});