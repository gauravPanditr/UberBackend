const Booking=require('../model/booking');

const findBooking=async(criteria)=>{
      await Booking.findOne(criteria);
}

module.exports={findBooking}