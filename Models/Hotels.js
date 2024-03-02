const mongoose = require("mongoose");

const HotelSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  contactNumber: {
    type: Number,
    required: true,
  },
  location: {
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true },
  },
  description: {
    type: String,
    required: true,
  },
  websiteUrl: {
    type: String,
    optional: true,
  },

  imageUrl: {
    type: String,
    default: "https://via.placeholder.com/150x150",
  },
});

module.exports = mongoose.model("Hotel", HotelSchema);
