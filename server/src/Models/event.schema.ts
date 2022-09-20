import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
  event: {
    type: String,
    required: true,
  },
  tags: {
    type: [String],
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  ts: {
    type: Date,
    required: true,
  },
});

export default eventSchema;
