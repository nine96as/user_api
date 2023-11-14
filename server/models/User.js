import { users } from '../data';

class User {
  constructor(data) {
    this.id = data.id;
    this.firstName = data.firstName;
    this.lastName = data.lastName;
    this.age = data.age;
  }

  static getAll() {
    return users.map((e) => new User(e));
  }
}
