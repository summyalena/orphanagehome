import { Schema, model } from 'mongoose';

const OrphanSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    sex: {
      type: String,
      required: true,
    },
    dob: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    lga: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default model('Orphan', OrphanSchema);
