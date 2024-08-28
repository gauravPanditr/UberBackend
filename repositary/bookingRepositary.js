const Booking=require('../model/booking');

const findBooking=async(criteria)=>{
      await Booking.findOne(criteria);
}

const createBooking=async(bookingData)=>{
      const booking=new Booking(bookingData);
      await booking.save();
      return booking;
}



module.exports={findBooking,createBooking}