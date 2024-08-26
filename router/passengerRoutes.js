const express = require('express');

const authMiddleware=require('../middleware/authMiddleWares');
const router=express.Router();

module.exports=(io)=>{
      // router.get('/booking',authMiddleware,getPassengerBookings);
      // router.get('/feedback',authMiddleware,provideFeedBack);

      return router;
}