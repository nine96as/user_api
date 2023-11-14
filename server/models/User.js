import { v4 as uuidv4 } from 'uuid';

import { users } from '../data/index.js';

export class User {
  constructor(data) {
    this.firstName = data.firstName;
    this.lastName = data.lastName;
    this.age = data.age;
    this.id = data.id;
  }

  static getAll() {
    return users.map((e) => new User(e));
  }

  static create(data) {
    if (!data.firstName || !data.lastName)
      throw new Error('You must provide the first and last name of the user');

    if (!data.age) throw new Error('You must provide the age of the user');

    try {
      users.push(new User({ ...data, id: uuidv4() }));
      return users.slice(-1);
    } catch (e) {
      throw new Error(e);
    }
  }

  static findById(id) {
    try {
      const data = users.find((e) => e.id === id);
      return new User(data);
    } catch (e) {
      throw new Error(`User with id ${id} not found`);
    }
  }

  destroy() {
    const data = users.find((e) => e.id === this.id);

    if (data) {
      const index = users.indexOf(data);
      users.splice(index, 1);
    } else {
      throw new Error('User was not found');
    }
  }

  update(data) {
    try {
      const userData = users.find((e) => e.id === this.id);
      const { firstName, lastName, age } = data;

      if (!userData) throw new Error('User not found!');

      if (!firstName && !lastName && !age)
        throw new Error('You must specify one of: first name, last name, age');

      if (firstName) userData.firstName = firstName;
      if (lastName) userData.lastName = lastName;
      if (age) userData.age = age;

      return new User(userData);
    } catch (e) {
      throw new Error(e.message);
    }
  }
}
