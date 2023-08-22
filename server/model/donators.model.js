import { Schema, model } from 'mongoose';

const DonatorSchema = new Schema(
  {
    amount: {
      type: String,
    },
    kind: {
      type: String,
    },
    full_name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone_number: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default model('Donator', DonatorSchema);
