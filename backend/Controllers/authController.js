const User = require('././Models/userModel');

export const signup = async (req, res) => {
  const newUser = await User.create(req.body);
	createSendToken(newUser, 200, res)
};
