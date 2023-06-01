const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const validation = require('express-validator');
const mongoose = require('mongoose');
const router = express.Router();
const Tyre = require('../models/Tyre');
const User = require("../models/User");
const UserModel = require('../models/User')

router.post('/auth/register', async (req, res) => {
  try {
    // проверяем, что полученные данные соответствуют шаблону
    const errors = validation.validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json(errors.array());
    }

    //шифрование паролей
    const password = req.body.password;
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    //создание записи о пользователе в БД
    const user = await User.create({
      email: req.body.email,
      login: req.body.login,
      passwordHash: hash,
    });

    //создание токена
    const token = jwt.sign(
      {
        _id: user._id,
      },
      'secret123',
      {
        expiresIn: '30d',
      },
    );

    res.json({user, token});
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: 'Не удалось зарегистристрироваться',
    });
  }
});
router.post('/auth/login', async (req, res) => {
  try {
    const user = await UserModel.findOne( {email: req.body.email} );

    if (!user) {
      return req.status(404).json({
        message: 'Пользователь не найден',
      });
    }

    const isValidPass = await bcrypt.compare(req.body.password, user.passwordHash);

    if (!isValidPass) {
      return req.status(403).json ({
        message: 'Неверный логин или пароль',
      });
    }

    const token = jwt.sign(
      {
        _id: user._id,
      },
      'secret123',
      {
        expiresIn: '30d',
      },
    );

    res.json({user, token});
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: 'Не удалось авторизоваться',
    });
  }
});
router.get('auth/me', async (req, res) => {
  try {
    const user = await UserModel.findById(req.userId);
    res.json(user.doc);

    if (!user) {
      return res.status(403).json({
        message: 'Пользователь не найден',
      });
    }
    res.json({
      success: true,
    });
  } catch (err) {
    console.log(err);
  }
});
// router.get('/tyres/cart',  async (req, res) => {
//   try {
//     let tyre = await TyreModel.findOne({name: req.body.name});
//     tyre.amount += 4;
//   } catch (err) {
//     console.log(err);
//     res.status(501).json({
//       message: "Не удалось добавить товар в корзину",
//     });
//   }
// });
router.get('/tyres', (req, res, next) => {
  // This will return all the data, exposing only the id and action field to the client
  Tyre.find({})
    .then((data) => res.json(data))
    .catch(next);
});
router.put('/tyres',async (req, res) => {
  const newAmount = req.body.amount;
  const tyreName = req.body.name;
  let data = await Tyre.findOne({name: tyreName});
  data.amount = newAmount;
  await data.save();
  res.json(data);
  console.log('data: ', data);
});
router.post('/tyres', (req, res, next) => {
  if (req.body.action) {
    Tyre.create(req.body)
      .then((data) => res.json(data))
      .catch(next);
  } else {
    res.json({
      error: 'The input field is empty',
    });
  }
});
router.delete('/tyres/:id', (req, res, next) => {
  Tyre.findOneAndDelete({ _id: req.params.id })
    .then((data) => res.json(data))
    .catch(next);
});
router.get('/users', (req, res, next) => {
  // This will return all the data, exposing only the id and action field to the client
  User.find({}, 'action')
    .then((data) => res.json(data))
    .catch(next);
});
router.post('/users', (req, res, next) => {
  if (req.body.action) {
    User.create(req.body)
      .then((data) => res.json(data))
      .catch(next);
  } else {
    res.json({
      error: 'The input field is empty',
    });
  }
});
router.delete('/users/:id', (req, res, next) => {
  User.findOneAndDelete({ _id: req.params.id })
    .then((data) => res.json(data))
    .catch(next);
});
module.exports = router;