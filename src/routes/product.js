const express = require('express');
const router = express.Router();
const productController = require('../controllers/product');

module.exports = () => {
  router.get('/all', productController.getAllProduct);
  router.get('/category/:category', productController.getProductByCategory);
  router.get('/:productId', productController.getProductById);

  router.post('/', productController.addNewProduct);

  router.put('/', productController.updateProduct);

  router.delete('/:productId', productController.deleteProduct);
  return router;
};
