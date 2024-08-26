
const passengerService=require('../services/passengerService');



const getPassengerBookings=async(req,res)=>{

 try {
    const booking= await passengerService.getPassengerBookings(req.user._id);
      res.status(201).send({data:booking,success:true,error:null,message:""});
 } catch (error) {
     res.status(400).send(error,message);
      
 }

};

const provideFeedBack=async(req,res)=>{

try {
      

} catch (error) {
      console.log(error);
      
}




}

module.exports={
      getPassengerBookings,
      provideFeedBack
}