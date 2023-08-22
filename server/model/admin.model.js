import { model, Schema } from 'mongoose';

const AdminSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export default model('Admin', AdminSchema);
