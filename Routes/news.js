const express = require('express');
const newsController = require('../Controller/news');

const router = express.Router();

router.post('/createnews', newsController.createNews); // Create news article
router.get('/getallnews', newsController.getAllNews); // Get all news articles
router.get('/:id', newsController.getNewsById); // Get news article by ID
router.put('/:id', newsController.updateNews); // Update news article
router.delete('/:id', newsController.deleteNews); // Delete news article

module.exports = router;
