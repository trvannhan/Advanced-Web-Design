const express = require('express');
const router = express.Router();
const pageController = require('../controllers/pageController');

router.get('/', pageController.home);
router.get('/news', pageController.about);
router.get('/contact', pageController.contact);

module.exports = router;