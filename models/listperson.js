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
  findPerson = (id) => {
    const existedPerson = this.list.find((element) => {
      return element.id === id;
    });
    return existedPerson;
  };

  updatePerson = (Person) => {
    const index = this.list.findIndex((element) => {
      return element.id === Person.id;
    });
    this.list[index] = Person;
  };
  fillterByType = (type) => {
    const data = this.list.filter((element) => {
      if (type === "all") {
        return true;
      }
      return element.type === type;
    });
    return data;
  };
  fillterByName = (name) => {
    if (name === "AdenZ") {
      let data = this.list.sort((a, b) => {
        if (a.name.split("").pop() < b.name.split("").pop()) {
          return -1;
        } else if (a.name.split("").pop() > b.name.split("").pop()) {
          return 1;
        }
        return 0;
      });
      return data;
    } else if (name === "ZdenA") {
      let data = this.list.sort((a, b) => {
        if (a.name.split("").pop() > b.name.split("").pop()) {
          return -1;
        } else if (a.name.split("").pop() < b.name.split("").pop()) {
          return 1;
        }
        return 0;
      });
      return data;
    }
  };
}
