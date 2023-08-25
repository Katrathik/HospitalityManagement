const User = require('././Models/userModel');
const jwt = require('jsonwebtoken');
const {promisify} = require('util')
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
export const protect = async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1];
  }else if(req.cookie.jwt){
    token = req.cookie.jwt
  }
  if(!token){
    return res.status('fail').json({status:'fail', message: 'Invalid Email or Password'});
  }
  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET)
  const currentUser = await User.findById(decoded.id);
  if (!currentUser) {
    return next(new AppError(res, 'This account has been expired'));
  }
  if(!decoded){
    return res.status(404).json({status:'fail', message: 'Invalid Email or Password'});
  }
  req.user = currentUser;
  res.locals.user = currentUser;
  next();
};
exports.logout = (req, res)=>{
  res.cookie('jwt', 'loggedout', {
    expiresIn: new Date(Date.now() + 10 * 1000),
    httpOnly: true
  })
  res.status(200).json({status: 'success'})
}
exports.restrictTo = (...roles)=>{
  return (req, res, next)=>{
    if(!roles.includes(req.user.role)){
      res.status(403).json({status: 'failed', message: 'You are authorised to use it'})
    }
    next()
  }
}