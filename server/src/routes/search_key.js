const express=require('express');
const router=express.Router();
const searchController = require('../controllers/search_key')

router.get('/:keyword',searchController.recent_news);

module.exports = router;