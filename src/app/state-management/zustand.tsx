"use client";

import { create } from "zustand";
import { person, Person } from "./schema";
import { Shared } from "./shared";

export const usePersonStoreZustand = create<Person>(
  (set, get, store) => person,
);

export const ZustandPerson = () => {
  const { name, updateSecondName } = usePersonStoreZustand();

  return (
    <Shared title={"zustand"} name={name} updateSecondName={updateSecondName} />
  );
};
