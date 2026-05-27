const Product = require('../models/product');

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.findAll({
      where: { active: true }
    });
    res.json(products);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Error getting products' });
  }
};

exports.updateProduct = async (req, res) => {
  const { product_id } = req.params;
  const { desc_product } = req.body;
  try {
    const product = await Product.findByPk(product_id);
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    product.desc_product = desc_product;
    await product.save();
    res.json({ mensaje: 'Product updated', product });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Error updating product' });
  }
};