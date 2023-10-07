const Products = require('../models/model');

const getproducts = async (req, res) => {
  try {
    const products = await Products.findAll();

    if (!products) {
      res.status(400).json({ error: 'Something went wrong' });
    }

    if (products.length < 1) {
      res.status(200).json({ message: 'No Users have been added yet.' });
    }

    res
      .status(200)
      .json({ status: res.statusCode, message: 'All Users', data: products });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { getproducts };
