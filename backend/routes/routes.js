import express from 'express';
import { getAllUsers, createUser } from '../controllers/controllers.js';

const router = express.Router();

router.get('/api', (req, res) => res.send('Hello World!'));
router.get('/api/all', getAllUsers);
router.post('/api/form', createUser);

export default router;
