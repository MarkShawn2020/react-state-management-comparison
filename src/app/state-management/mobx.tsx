"use client";

import { makeAutoObservable } from "mobx";
import { observer, useLocalObservable } from "mobx-react-lite";
import { Shared } from "./shared";

export class Person {
  firstName: string;
  secondName: string;

  constructor(firstName: string, secondName: string) {
    this.firstName = firstName;
    this.secondName = secondName;

    makeAutoObservable(this);
  }

  get name() {
    return `${this.firstName} ${this.secondName}`;
  }

  updateSecondName(secondName: string) {
    this.secondName = secondName;
  }
}

const person = new Person("mark", "shawn");

export const MobxPerson = observer(() => {
  return (
    <Shared
      title={"Mobx"}
      name={person.name}
      updateSecondName={person.updateSecondName}
    />
  );
});
