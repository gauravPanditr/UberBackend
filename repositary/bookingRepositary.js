const Booking=require('../model/booking');

const findBooking=async(criteria)=>{
      await Booking.findOne(criteria);
}


const findBookingsByUser = async (userId, role) => {
      if (role === 'driver') {
        return Booking.find({ driver: userId });
      } else if (role === 'passenger') {
        return Booking.find({ passenger: userId });
      }
      throw new Error('Invalid role');
    };
    
    const updateBookingStatus = async (bookingId, driverId, status) => {
      return Booking.findOneAndUpdate(
        { _id: bookingId, status: 'pending' },
        { driver: driverId, status },
        { new: true }
      );
    };

const createBooking=async(bookingData)=>{
      const booking=new Booking(bookingData);
      await booking.save();
      return booking;
}



module.exports={findBooking,createBooking,updateBookingStatus,findBookingsByUser}