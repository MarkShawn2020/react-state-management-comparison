export class Person {
  firstName: string;
  secondName: string;

  constructor(firstName: string, secondName: string) {
    this.firstName = firstName;
    this.secondName = secondName;
  }

  get name() {
    return `${this.firstName} ${this.secondName}`;
  }

  updateSecondName(secondName: string) {
    this.secondName = secondName;
  }
}

export const person = new Person("mark", "shawn");
