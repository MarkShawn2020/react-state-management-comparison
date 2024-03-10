"use client";

import { atom, useAtom } from "jotai";
import { joinName } from "../../utils";
import { person } from "../schema";
import { Shared } from "../shared";

export const personClassJotai = atom(person);

export const firstNameAtom = atom("mark");
export const secondNameAtom = atom("shawn");
export const nameAtom = atom((get) =>
  joinName(get(firstNameAtom), get(secondNameAtom)),
);
export const updateSecondNameAtom = atom(
  null,
  (get, set, secondName: string) => {
    set(secondNameAtom, (prev) => secondName);
  },
);

export const JotaiPerson = () => {
  const [person] = useAtom(personClassJotai);

  const [name] = useAtom(nameAtom);
  const [, updateSecondName] = useAtom(updateSecondNameAtom);

  return (
    <>
      <Shared
        title={"Jotai (object)"}
        name={person.name}
        updateSecondName={(value) => person.updateSecondName(value)}
      />

      <Shared
        title={"Jotai (standard)"}
        name={name}
        updateSecondName={updateSecondName}
        ok
      />
    </>
  );
};
