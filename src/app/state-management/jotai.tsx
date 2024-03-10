"use client";

import { atom, useAtom, useAtomValue } from "jotai";
import { Shared } from "./shared";
import { person } from "./schema";

export const personClassJotai = atom(person);

export const JotaiPerson = () => {
  const person = useAtomValue(personClassJotai);

  return (
    <Shared
      title={"Jotai (no action)"}
      name={person.name}
      updateSecondName={(value) => person.updateSecondName(value)}
    />
  );
};
