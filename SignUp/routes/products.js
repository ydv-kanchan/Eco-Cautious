const express = require('express');
const router = express.Router();
const Product = require('../product'); // Adjust the path as necessary

// Route to fetch all products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find(); // Fetch all products from the database
    res.json(products); // Send the products as a JSON response
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//single
router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;