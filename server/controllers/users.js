import { users } from '../data/index.js';
import { User } from '../models/User.js';

export const index = (req, res) => res.send({ data: User.getAll() });

export const create = (req, res) => {
  try {
    const data = req.body;
    res.status(201).send({ data: User.create(data) });
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
};

export const show = (req, res) => {
  try {
    const { id } = req.params;
    res.status(200).send({ data: User.findById(id) });
  } catch (e) {
    res.status(404).send({ error: e.message });
  }
};

export const destroy = (req, res) => {
  try {
    const { id } = req.params;
    const foundUser = User.findById(id);
    foundUser.destroy();
    res.sendStatus(204);
  } catch (e) {
    res.status(404).send({ error: e.message });
  }
};

export const update = (req, res) => {
  try {
    const { id } = req.params;
    const foundUser = User.findById(id);

    res.status(200).send({ data: foundUser.update(req.body) });
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
};
