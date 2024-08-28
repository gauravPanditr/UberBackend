const express = require('express');
const {getPassengerBookings,   provideFeedBack}=require('../controller/passengerController');
const authMiddleware=require('../middleware/authMiddleWares');
const router=express.Router();

// module.exports=(io)=>{
      router.get('/booking',authMiddleware,getPassengerBookings);
      router.post('/feedback',authMiddleware,provideFeedBack);

//       return router;
// }
module.exports=router;
