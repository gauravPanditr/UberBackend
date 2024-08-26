const User = require('../model/user');

const findPassengerById = async (passengerId) => {
  return User.findOne({ _id: passengerId, role: 'passenger' });
};

module.exports = { findPassengerById };
