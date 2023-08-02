export class ListPerson {
  constructor() {
    this.list = [];
  }

  addPerson(Person) {
    this.list.push(Person);
  }

  removePerson(id) {
    this.list = this.list.filter((Person) => Person.id !== id);
  }

  updatePerson(id, data) {
    const Person = this.list.find((Person) => Person.id === id);
    if (Person) {
      Object.assign(Person, data);
    }
  }
}
