const News = require('../Models/News');

// Create a news 
exports.createNews = async (req, res) => {
  try {
    const newNews = new News(req.body);
    await newNews.save();
    res.status(201).json(newNews); 
  } catch (error) {
    res.status(400).json({ message: error.message }); 
  }
};

// Read a news 
exports.getNewsById = async (req, res) => {
  try {
    const news = await News.findById(req.params.id);
    if (!news) {
      return res.status(404).json({ message: 'News not found' });
    }
    res.status(200).json(news);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Read all news articles 
exports.getAllNews = async (req, res) => {
  try {
    const news = await News.find().sort({ createdAt: -1 }); 
    res.status(200).json(news);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a news article (implement permission checks, validation, and handling missing updates)
exports.updateNews = async (req, res) => {
  try {
    const updates = Object.keys(req.body);
    const allowedUpdates = [
      'name',
      'description',
      'image' // Update image URL with caution
    ];
    const isValidUpdate = updates.every((update) => allowedUpdates.includes(update)); // Check for allowed updates

    if (!isValidUpdate) {
      return res.status(400).json({ message: 'Invalid update fields' });
    }

    const news = await News.findByIdAndUpdate(req.params.id, req.body, { new: true }); // Return updated document

    if (!news) {
      return res.status(404).json({ message: 'News not found' });
    }

    res.status(200).json(news);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a news article 
exports.deleteNews = async (req, res) => {
  try {
    const news = await News.findByIdAndDelete(req.params.id);
    if (!news) {
      return res.status(404).json({ message: 'News not found' });
    }
    res.status(200).json({ message: 'News deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
