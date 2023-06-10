const express = require('express');
const router = express.Router();
const Tyre = require('../models/Tyre');

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

module.exports = router;