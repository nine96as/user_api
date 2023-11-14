import express from 'express';

import { destroy, index, post, show, update } from '../controllers/users.js';

const router = express.Router();

// all routes in here start with /users

// index route
router.get('/', index);

// create a user
router.post('/', post);

// show a user
router.get('/:id', show);

// delete a user
router.delete('/:id', destroy);

// partially update a user
router.patch('/:id', update);

export default router;
