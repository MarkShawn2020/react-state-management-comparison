"use client";

import { create } from "zustand";
import { person, Person } from "../schema";
import { Shared } from "../shared";

export const usePersonStoreZustand = create<Person>(
  (set, get, store) => person,
);

export const ZustandPerson = () => {
  const person = usePersonStoreZustand();

  return (
    <Shared
      title={"zustand (no action)"}
      name={person.name}
      updateSecondName={(value) => {
        person.updateSecondName(value);
      }}
    />
  );
};
