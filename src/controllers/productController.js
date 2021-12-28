const Product = require('../models/product');

exports.addNewProduct = async (req, res) => {
  try {
    const body = req.body;
    const product = new Product(body);

    if (!product) return res.status(400).json('Error creando el producto.');

    await product.save();
    return res.status(200).json(product);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const body = req.body;

    if (!body._id)
      return res.status(400).json('No existe el Id del productos.');

    const product = await Product.findByIdAndUpdate(body._id, body, {
      new: true,
    });

    if (!product)
      return res.status(400).json('Error actualizando el producto.');

    return res.status(200).json(product);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const { productId } = req.params;

    const product = await Product.findByIdAndDelete(productId);

    if (!product) return res.status(400).json('Error eliminando el producto.');

    return res.status(200).json('producto eliminado correctamente.');
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    if (products.length === 0)
      return res.status(400).json('No existen productos.');
    return res.status(200).json(products);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};

exports.getProductById = async (req, res) => {
  try {
    const { productId } = req.params;

    const product = await Product.findById(productId);

    if (!product)
      return res.status(400).json('No existe producto con ese Id.');

    return res.status(200).json(product);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};

exports.getProductsByCategory = async (req, res) => {
  try {
    const { category } = req.params;

    const products = await Product.find({ category });

    if (products.length === 0)
      return res.status(400).json('No existen productos con esa categoria.');

    return res.status(200).json(products);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};
