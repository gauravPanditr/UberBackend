
const authSerivce = require('../services/authservices');

const register = async (req, res) => {
      try {
            const { user, token } = await authSerivce.register(req.body);

            res.status(201).send({ data: { user, token }, success: true, error: null, message: "successfully registered user" });



      } catch (error) {
            res.status(400).send(error.message);

      }

}


const login = async (req, res) => {
      try {
            const { email, password } = req.body;
            const { user, token } = await authSerivce.login({ email, password });
            return res.status(201).send({ data: { user, token }, success: true, error: null, message: "" });



      } catch (error) {
            return res.status(400).send(error.message);
      }
}
module.exports = {
      register,
      login
}
