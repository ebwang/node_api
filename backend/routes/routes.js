import express from 'express';
import { getAllUsers, createUser, searchUser, removeUser, updateUser } from '../controllers/controllers.js';

const router = express.Router();

router.get('/api', (req, res) => res.send('Hello World!'));
router.get('/api/all', getAllUsers);
router.post('/api/add', createUser);
router.get('/api/search', searchUser);
router.post('/api/remove', removeUser);
router.post('/api/update', updateUser);

export default router;
