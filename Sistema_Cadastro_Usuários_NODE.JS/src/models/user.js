export default class User {
    constructor({ name, email, age }) {
      this.id = crypto.randomUUID();
      this.name = name;
      this.email = email;
      this.age = age;
      this.createdAt = new Date().toISOString();
    }
  }