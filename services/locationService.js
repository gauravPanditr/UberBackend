const { redisClient } = require('../utilis/redisClient');

class LocationService {

      async setDriverSocket(driverId, socketId) {
            await redisClient.set(`driver:${driverId}`, socketId);
      }

      async getDriverSocket(driverId) {
            return await redisClient.get(`driver:${driverId}`);
      }

      async deleteDriverSocket(driverId) {
            await redisClient.del(`driver:${driverId}`);
      }
      async addDriverLocation(driverId,latitude,longitude){
            try {
                  await redisClient.sendCommand([
                    'GEOADD',
                     'drivers',
                     latitude.toString(),
                     longitude.toString(),
                     driverId.toString
                  ]);
            } catch (error) {
                  
            }
      }
        
      async findNearByDriver(longitude,latitude,radiusKm){
           const nearByDriver=await redisClient.sendCommand([
            'GEOADD',
            'drivers',
            latitude.toString(),
            longitude.toString(),
            'km',
            'WITHCOORD'
           ]);
           return nearByDriver;

      }




}


module.exports = new LocationService();