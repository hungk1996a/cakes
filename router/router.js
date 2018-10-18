const express = require('express');
const router = express.Router();

const cakeRequest = require('../middlerware/index');
const CakeController = require('../controller/CakeController');
const cakeController = new CakeController;

router.post('/', cakeRequest.checkCake, cakeController.createCake);

router.get('/', cakeController.showCake);

router.delete('/:id', cakeRequest.checkCake, cakeController.deleteCake);

router.put('/:id', cakeRequest.checkCake, cakeController.updateCake);

module.exports = router;