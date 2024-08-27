const User= require('../model/user');

const jwt=require('jsonwebtoken');

const register=async(userData)=>{
   const user=new User(userData);
   await user.save();
   const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
   console.log('Generated JWT Token:', token); // This should log the token
   return { user, token };


};

const login=async({email,password})=>{

      

      
}

module.exports={
      register,
      login
}
