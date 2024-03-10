"use client";

import { create } from "zustand";
import { person, Person } from "../schema";
import { Shared } from "../shared";

export const usePersonClassZustand = create<Person>(
  (set, get, store) => person,
);

interface IPerson {
  firstName: string;
  secondName: string;
  computed: {
    name: string;
  };
  updateSecondName: (secondName: string) => void;
}

export const usePersonStandardZustand = create<IPerson>((set, get) => ({
  firstName: person.firstName,
  secondName: person.secondName,

  // ref: https://github.com/pmndrs/zustand/issues/132#issuecomment-1120467721
  computed: {
    get name() {
      return get().firstName + " " + get().secondName;
    },
  },
  updateSecondName(secondName: string) {
    set((state) => ({
      secondName,
    }));
  },
}));

export const ZustandPerson = () => {
  const person = usePersonClassZustand();
  const {
    computed: { name },
    updateSecondName,
  } = usePersonStandardZustand();

  return (
    <>
      <Shared
        title={"zustand (no action)"}
        name={person.name}
        updateSecondName={(value) => {
          person.updateSecondName(value);
        }}
      />

      <Shared
        title={"zustand (computed)"}
        name={name}
        updateSecondName={updateSecondName}
        ok
      />
    </>
  );
};
