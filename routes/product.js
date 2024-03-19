const express = require('express');
const router = express.Router();
const { create, list, update, remove } = require('../controllers/product');

router.post('/products', create);
router.get("/products", list);
router.put("/products/:id", update);
router.delete("/products/:id", remove);


module.exports = router;
