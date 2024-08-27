const express=require('express');

const authMiddleware=require('../middleware/authMiddleWares');

const router=express.Router();

// router.get('/booking',authMiddleware,getDriverBooking);
// router.get('/location',authMiddleware,updateLocation);

module.exports=router;