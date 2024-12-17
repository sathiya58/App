// routes/api.js
const express = require('express');
const router = express.Router();
const Item = require('../models/Item');

// GET: Fetch all items
router.get('/items', async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET: Fetch a single item by ID
router.get('/items/:id', async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    if (!item) return res.status(404).json({ message: 'Item not found' });
    res.json(item);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST: Add a new item
router.post('/items', async (req, res) => {
  const { name, age, description } = req.body;
  const newItem = new Item({ name, age, description });

  try {
    const savedItem = await newItem.save();
    res.status(201).json(savedItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// PUT: Update an item by ID
router.put('/items/:id', async (req, res) => {
  try {
    const { name, age, description } = req.body;

    const updatedItem = await Item.findByIdAndUpdate(
      req.params.id,
      { name, age, description },
      { new: true }
    );

    if (!updatedItem) return res.status(404).json({ message: 'Item not found' });

    res.json(updatedItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE: Remove an item by ID
router.delete('/items/:id', async (req, res) => {
  try {
    const deletedItem = await Item.findByIdAndDelete(req.params.id);
    if (!deletedItem) return res.status(404).json({ message: 'Item not found' });

    res.json({ message: 'Item successfully deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
