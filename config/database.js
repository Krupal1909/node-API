const mongoose = require("mongoose");

const connectDatabase = async (req, res) => {
  try {
    mongoose
      .connect(
        "mongodb+srv://krupalpatel10520:Lvzx3nQNEzuOWJe4@cluster0.karjhnp.mongodb.net/FOOD-API"
      )
      .then(() => {
        console.log("Connection established successfully");
      });
  } catch (error) {
    console.log(error);
  }
};
module.exports = connectDatabase;
