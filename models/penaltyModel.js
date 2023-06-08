const mongoose = require("mongoose");

const penaltySchema = mongoose.Schema(
  {
    amount: {
      type: Number,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    reason: {
      type: String,
      required: true,
    },
    user_id: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const penalty = mongoose.model("Penalty", penaltySchema);

module.exports = penalty;
