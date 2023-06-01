const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TyreSchema = new Schema({
    name: {
      type: String,
      required: true,
      unique: true,
    },
    img: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    width: {
      type: String,
      required: true,
    },
    profile: {
      type: String,
      required: true,
    },
    diameter: {
      type: String,
      required: true,
    },
    carType: {
      type: String,
      required: true,
    },
    season: {
      type: String,
      required: true,
    },
    spikes: {
      type: String,
      required: true,
    },
    cost: {
      type: String,
      required: true,
    },
    amount: String,
  });
const Tyre = mongoose.model('Tyre', TyreSchema);
module.exports = Tyre;