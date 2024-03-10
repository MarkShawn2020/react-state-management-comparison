import { makeAutoObservable } from "mobx";

export class Person {
  firstName: string;
  secondName: string;

  constructor(firstName: string, secondName: string) {
    this.firstName = firstName;
    this.secondName = secondName;

    // for mobx
    makeAutoObservable(this);
  }

  get name() {
    return `${this.firstName} ${this.secondName}`;
  }

  updateSecondName(secondName: string) {
    this.secondName = secondName;
  }
}

export const person = new Person("mark", "shawn");
