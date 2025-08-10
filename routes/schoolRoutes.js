const express = require('express');
const router = express.Router();
const controller = require('../controllers/schoolController');

// Add school
router.post('/addSchool', controller.addSchool);

// List schools sorted by proximity
router.get('/listSchools', controller.listSchools);

module.exports = router;