const bookingRepository=require('../repositary/bookingRepositary');
const {haversineDistance}=require('../utilis/distance');
const BASIC_FARE=50;
const RATE_PER_KM=12;

const createBooking=async({passengerId,source,destination})=>{
      const distance = haversineDistance(source.latitude, source.longitude, destination.latitude, destination.longitude);
      console.log(distance);
      const fare = BASIC_FARE + (distance * RATE_PER_KM);
       

      const bookingData={
            passenger:passengerId,
            source,
            destination,
            fare,
            status:"pending"
      }
      const booking=bookingRepository.createBooking(bookingData);
      return booking;
}

module.exports={
      createBooking
}