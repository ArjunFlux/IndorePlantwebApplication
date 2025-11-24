const express = require('express');
const app = express();
require('dotenv').config();
const bodyParser = require('body-parser');
const cors = require('cors');

const AuthRouter = require('./Routes/AuthRouter');
// const AddressRouter = require('./Routes/userRoute');

const PORT = process.env.PORT || 8080;

require('./Models/db');

const allowedLocal = 'http://localhost:5173';
const allowedFrontend = process.env.FRONTEND_URL || 'https://indoreplantwebapplicationfrontend-t5fw.onrender.com';
const allowedOrigins = [allowedLocal, allowedFrontend];

app.use(cors({
  origin: function(origin, callback) {
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('CORS policy: origin not allowed'), false);
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

app.use(bodyParser.json());
app.use(express.json());
app.use('/auth', AuthRouter);
// app.use('/address', AddressRouter); 

app.get("/ping", (req, res) => {
  res.send("PONG");
});

app.listen(PORT, () => {
  console.log(`The server is live on ${PORT}`);
});
