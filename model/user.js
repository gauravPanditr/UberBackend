const mongoose = require('mongoose');

const brcypt = require('bcryptjs');

const userSchema = new mongoose.Schema({

  name: String,
  email: {
    type: String,
    unique: true,
  },
  password:{
   type:String,
   required:true
  },

  role: {
    type: String,
    enum: ['driver', 'passenger']
  },
  location: {
    type: {
      type: String,
      enum: ['Point'],
      default: 'Point'
    },
    coordinates: {
      type: [Number],
      default: [0, 0]
    }
  }


});
//this is a pre save middleware that run
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  this.password = await brcypt.hash(this.password, 10);
  next();
});

userSchema.methods.comparePassword = async function (password) {
  return brcypt.compare(password, this.password);
};

const User = mongoose.model('User', userSchema);
module.exports = User;
