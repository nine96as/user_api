import express from 'express';

const router = express.Router();

// all routes in here start with /users
router.get('/', (req, res) => res.send('Hello! You are at the Fruits page'));

export default router;
