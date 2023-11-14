import { users } from '../data/index.js';
import { User } from '../models/User.js';

export const index = (req, res) => res.send({ data: User.getAll() });

export const create = (req, res) => {
  try {
    const data = req.body;
    res.status(201).send({ data: User.create(data) });
  } catch (e) {
    res.status(422).send({ error: e.message });
  }
};

export const show = (req, res) => {
  const { id } = req.params;
  const foundUser = users.find((user) => user.id === id);

  !foundUser
    ? res.status(404).send({ error: `User with id ${id} not found` })
    : res.status(200).send(foundUser);
};

export const destroy = (req, res) => {
  const { id } = req.params;
  const foundIndex = users.findIndex((user) => user.id === id);
  const foundUser = users[foundIndex];

  if (!foundUser) res.sendStatus(404);

  users.splice(foundIndex, 1);
  res.sendStatus(204);
};

export const update = (req, res) => {
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
};
