import express from 'express';
import { v4 as uuidv4 } from 'uuid';

import users from '../users.json' assert { type: 'json' };

const router = express.Router();

// all routes in here start with /users

// list of users
router.get('/', (req, res) => res.send(users));

// create a fruit
router.post('/', (req, res) => {
  const user = req.body;

  if (!user.firstName || !user.lastName)
    res
      .status(422)
      .send({ error: 'You must provide the first and last name of the user' });

  if (!user.age)
    res.status(422).send({ error: 'You must provide the age of the user' });

  users.push({ ...user, id: uuidv4() });
  res.status(201).send(users.slice(-1));
});

export default router;
