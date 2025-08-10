import express from 'express';
import * as controller from '../controllers/schoolController.js';
const router = express.Router();

// Add school
router.post('/addSchool', controller.addSchool);

// List schools sorted by proximity
router.get('/listSchools', controller.listSchools);

export default router;