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

exports.createProduct = async (req, res) => {
  const { name_product, desc_product, html_link, image_link } = req.body
  try {
    if (!name_product) return res.status(400).json({ error: 'Name is required' })
    const product = await Product.create({ name_product, desc_product, html_link, image_link })
    res.status(201).json(product)
  } catch (err) {
    console.log('CREATE PRODUCT ERROR:', err.message) // ← cambia esto
    res.status(500).json({ error: err.message }) // ← y esto
  }
}