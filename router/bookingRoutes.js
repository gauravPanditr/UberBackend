const express = require('express');
const authMiddleware = require('../middleware/authMiddleWares');
const { createBooking, confirmBooking } = require('../controller/bookingController');
const router = express.Router();

module.exports = (io) => {
      router.post('/bookings', authMiddleware, createBooking(io));
      router.post('/confirm', authMiddleware, confirmBooking(io));
 
      return router;
};
