const User = require('././Models/userModel');
const jwt = require('jsonwebtoken');
const signToken = (id) => {
  const payLoad = { id };
  return jwt.sign(payLoad, process.env.JWT_SECRET, {
    expiresIn: 90,
  });
};
const createSendToken = (user, statusCode, res) => {
  const token = signToken(user._id);
  const cookieOption = {
    expiresIn: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
    httpOnly: true,
  };
  res.cookie('jwt', token, cookieOption);
  res.status(statusCode).json({
    status: 'success',
    token,
    data: {
      user,
    },
  });
};
export const signup = async (req, res) => {
  const newUser = await User.create(req.body);
  createSendToken(newUser, 200, res);
};
export const login = async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) return;

  const user = await User.find({ email }).select('+password');
  if (!user || !(await user.correctPassword(password, user.password))) return;
  createSendToken(user);
};
