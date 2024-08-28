const express=require('express');

const authMiddleware=require('../middleware/authMiddleWares');
const {getDriverBookings,updateLocation}=require('../controller/driverController')
const router=express.Router();

router.get('/booking',authMiddleware,getDriverBookings);
router.post('/location',authMiddleware,updateLocation);

module.exports=router;