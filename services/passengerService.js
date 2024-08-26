const Booking = require('../model/user');
const bookingRepository = require('../repositary/passengerRepositary');

const getPassengerBookings = async (passengerId) => {
  return Booking.find({ passenger: passengerId });
};

const provideFeedback = async (passengerId, bookingId, rating, feedback) => {
  const booking = await bookingRepository.findPassengerById({ _id: bookingId, passenger: passengerId });
  if (!booking) throw new Error('Booking not found');
  booking.rating = rating;
  booking.feedback = feedback;
  await booking.save();
};

module.exports = { getPassengerBookings, provideFeedback };