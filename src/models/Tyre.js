import mongoose from 'mongoose';
import {Int32} from "mongodb";

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
      type: Int32,
      required: true,
    },
    profile: {
      type: Int32,
      required: true,
    },
    diameter: {
      type: Int32,
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
      type: Int32,
      required: true,
    },
    amount:  Int32,
  });
export default mongoose.model('Tyre', TyreSchema);