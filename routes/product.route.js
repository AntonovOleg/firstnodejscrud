const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const productController = require('../controllers/product.controller.js');


// a simple test url to check that all of our files are communicating correctly.
router.get('/test', productController.test);
router.get('/:id', productController.product_details);
router.post('/create', productController.product_create);
router.put('/:id/update', productController.product_update);
router.delete('/:id/delete', productController.product_delete);
module.exports = router;