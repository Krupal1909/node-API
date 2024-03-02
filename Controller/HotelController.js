const Hotel = require("../Models/Hotels");

// Get all hotels
exports.getAllHotels = async (req, res) => {
  try {
    const hotels = await Hotel.find();
    res.status(200).json(hotels);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a hotel by ID
exports.getHotelById = async (req, res) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    if (!hotel) {
      return res.status(404).json({ message: "Hotel not found" });
    }
    res.status(200).json(hotel);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createHotel = async (req, res) => {
  try {
    const newHotel = new Hotel(req.body);
    await newHotel.save();
    res.status(201).json(newHotel);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update a hotel -- Admin 
exports.updateHotel = async (req, res) => {
  const allowedUpdates = ["name", "address", "description", "websiteUrl"]; // Only allow updating these fields
  const updates = Object.keys(req.body).filter((key) =>
    allowedUpdates.includes(key)
  );

  try {
    const hotel = await Hotel.findById(req.params.id);
    if (!hotel) {
      return res.status(404).json({ message: "Hotel not found" });
    }

    updates.forEach((update) => (hotel[update] = req.body[update]));
    await hotel.save();
    res.status(200).json(hotel);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a hotel
exports.deleteHotel = async (req, res) => {
  try {
    const hotel = await Hotel.findByIdAndDelete(req.params.id);
    if (!hotel) {
      return res.status(404).json({ message: "Hotel not found" });
    }

    res.status(200).json({ message: "Hotel deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
