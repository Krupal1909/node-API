const express = require("express");
const connectDatabase = require("./config/database");
const cors = require("cors");


const app = express();
const port = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());
app.use("/api/hotels", require("./Routes/HotelRoute"));
app.use('/api/news', require('./Routes/news'));
connectDatabase().then(() => {
  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
});
