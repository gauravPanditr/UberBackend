const mongoose = require('mongoose');

const brcypt=require('bcryptjs');

const userSchema= new mongoose.Schema({

name:String,
email:{
    type:String,
    unique:true,
},
password:String,

role:{
    type:String,
    enum:['driver','passenger']
},
location:{
  type:{
    type:String,
    enum:['Point'],
    default:'Point'
  },
  coordinates:{
    type:[Number],
    default:[0,0]
  }
}


});
//this is a pre save middleware that run
userSchema.pre('save',async function (password) {
  return brcypt.hash(this.password)
    if(!this.isModified('password'))
       return next();
      this.password=await brcypt.hash(this.password);
      next();
});

userSchema.methods.comparePassword=async function (password) {
   return brcypt.compare(password,this.password);
  
}
const User=mongoose.model('User',userSchema);
module.exports=userSchema;
