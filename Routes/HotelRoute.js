const express = require('express');
const hotelsController = require('../Controller/HotelController');

const router = express.Router();

router.get('/getallhotels', hotelsController.getAllHotels);
router.get('/:id', hotelsController.getHotelById);
router.post('/createhotel', hotelsController.createHotel);
router.put('/:id', hotelsController.updateHotel);
router.delete('/:id', hotelsController.deleteHotel);

module.exports = router;
