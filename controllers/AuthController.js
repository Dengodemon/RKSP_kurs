const User = require('../models/User');
const AppError = require('./../utils/AppError');
const catchAsync = require('./../utils/catchAsync');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const { promisify } = require('util');

//create token for authenticated user
const signToken = id => {
  console.log('signToken (AuthController)')
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN
  });
}

const createUserToken = async(user, code, req, res) => {
  console.log('createUserToken (AuthController)');
  const token = signToken(user._id);
  console.log('token: ', token);
  //set expiry to 1 month
  let d = new Date();
  d.setDate(d.getDate() + 30);

  //cookie settings
  res.cookie('jwt', token, {
    expires: d,
    httpOnly: true,
    secure: true || req.headers['x-forwarded-proto'] === 'https',
    sameSite: 'none'
  });
  console.log('jwt: ', req.cookies.jwt);

  //remove user password from output
  user.password = undefined;
  res.status(code).json({
    status: 'success',
    token,
    data: {
      user
    }
  });
};

//create new user
exports.registerUser = async(req, res, next) => {
  //pass in request data here to create user from user schema
  console.log('registerUser (AuthController)');

  try {
    const newUser = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      passwordConfirm: req.body.passwordConfirm
    });

    await createUserToken(newUser, 201, req, res);
    //if user can't be created, throw an error
  } catch(err) {
    next(err);
  }
};

//log user in
exports.loginUser = catchAsync(async(req, res, next) => {
  const { username, password } = req.body;

  //check if email & password exist
  if (!username || !password) {
    return next(new AppError('Please provide a username and password!', 400));
  }

  //check if user & password are correct
  const user = await User.findOne({ username }).select('+password');
  if (!user || !(await user.correctPassword(password, user.password))) {
    return next(new AppError('Incorrect username or password', 401));
  }

  await createUserToken(user, 200, req, res);
});

//check if user is logged in
exports.checkUser = catchAsync(async(req, res, next) => {
  console.log('checkUser (AuthController)');
  console.log('Cookies: ', req.cookies);
  let user;
  if (req.cookies.jwt) {
    const token = req.cookies.jwt;
    const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
    user = await User.findById(decoded.id);
  } else {
    user =  null;
  }
  console.log(user);

  res.status(200).send({ user });
});

//log user out
exports.logoutUser = catchAsync(async (req, res) => {
  res.cookie('jwt', 'loggedout', {
    expires: new Date(Date.now() + 1 * 1000),
    httpOnly: true
  });
  res.status(200).send('user is logged out');
});
