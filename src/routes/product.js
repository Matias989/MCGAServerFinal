const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

module.exports = () => {
  router.get('/all', productController.getAllProducts);
  router.get('/category/:category', productController.getProductsByCategory);
  router.get('/:productId', productController.getProductById);

  router.post('/', productController.addNewProduct);

  router.put('/', productController.updateProduct);

  router.delete('/:productId', productController.deleteProduct);
  return router;
};
