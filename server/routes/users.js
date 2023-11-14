import express from 'express';
import { v4 as uuidv4 } from 'uuid';

import { users } from '../data/index.js';

const router = express.Router();

// all routes in here start with /users

// index route
router.get('/', (req, res) => res.send(users));

// create a user
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

// show a user
router.get('/:id', (req, res) => {
  const { id } = req.params;
  const foundUser = users.find((user) => user.id === id);

  !foundUser
    ? res.status(404).send({ error: `User with id ${id} not found` })
    : res.status(200).send(foundUser);
});

// delete a user
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const foundIndex = users.findIndex((user) => user.id === id);
  const foundUser = users[foundIndex];

  if (!foundUser) res.sendStatus(404);

  users.splice(foundIndex, 1);
  res.sendStatus(204);
});

// partially update a user
router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, age } = req.body;
  const foundUser = users.find((user) => user.id === id);

  if (!foundUser)
    res.status(404).send({ error: `User with id ${id} not found` });

  if (!firstName && !lastName && !age)
    res
      .status(422)
      .send({ error: 'You must specify one of: first name, last name, age' });

  if (firstName) foundUser.firstName = firstName;
  if (lastName) foundUser.lastName = lastName;
  if (age) foundUser.age = age;
  res.send(200).send(foundUser);
});

export default router;
