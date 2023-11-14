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
}
