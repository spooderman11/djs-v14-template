// src/models/testconfig.js
const mongoose = require("mongoose");

const testconfigSchema = new mongoose.Schema({
  status: {
    type: String,
    default: "Dummy Status",
  },
  activity: {
    type: String,
    default: "Dummy Activity",
  },
  dummyField1: {
    type: Number,
    default: 42,
  },
  dummyField2: {
    type: Boolean,
    default: true,
  },
});

module.exports = mongoose.model("testconfig", testconfigSchema);
