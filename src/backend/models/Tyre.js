import mongoose from 'mongoose';
// import {Int32} from "mongodb";

const TyreSchema = new mongoose.Schema({
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
export default mongoose.model('Tyre', TyreSchema);