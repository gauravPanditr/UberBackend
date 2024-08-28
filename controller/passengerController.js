
const passengerService = require('../services/passengerService');

const getPassengerBookings = async (req, res) => {

      try {
            const booking = await passengerService.getPassengerBookings(req.user._id);
            res.status(201).send({ data: booking, success: true, error: null, message: "" });
      } catch (error) {
            res.status(400).send(error, message);

      }

};

const provideFeedBack = async (req, res) => {
      try {
            const { bookingId, rating, feedback } = req.body;
            await passengerService.provideFeedback(req.user._id, bookingId, rating, feedback);
            //res.send({ message: 'Feedback submitted successfully' });
            res.status(201).send({ success: true, error: null, message: "Feedback submitted successfully" });

      } catch (error) {
            res.status(400).send(error.message);
      }
};

module.exports = {
      getPassengerBookings,
      provideFeedBack
}