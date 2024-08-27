const express = require('express');
const http = require('http');

const dotenv = require('dotenv');
const cors = require('cors');
const authRoutes = require('./router/authRoutes');
const bookingRoutes = require('./router/bookingRoutes');
const driverRoutes = require('./router/driverRoutes');
const passengerRoutes = require('./router/passengerRoutes');
const { redisClient } = require('./utilis/redisClient');
const mongoose = require('mongoose');
dotenv.config();


const app = express();
const server = http.createServer(app);


app.use(cors()); // Enable CORS
app.use(express.json());
app.use(express.static('public'));

mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
});

 app.use('/api/auth', authRoutes);
// app.use('/api/bookings', bookingRoutes(io));
// app.use('/api/drivers', driverRoutes);
// app.use('/api/passengers', passengerRoutes(io));

server.listen(process.env.PORT, () => {
      console.log(`Server running on port ${process.env.PORT}`);
});

redisClient.on('connect', () => {
      console.log('Connected to Redis');
});