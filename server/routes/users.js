import express from 'express';

import users from '../users.json' assert { type: 'json' };

const router = express.Router();

// all routes in here start with /users

// list of users
router.get('/', (req, res) => res.send(users));

export default router;
