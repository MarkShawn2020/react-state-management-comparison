"use client";
import { proxy, useSnapshot } from "valtio";
import { person } from "./schema";
import { Shared } from "./shared";

export const personStoreValtio = proxy(person);

export const updateOnRawObjectOutside = (name: string) =>
  person.updateSecondName(name);

export const updateOnProxyOutside = (name: string) =>
  personStoreValtio.updateSecondName(name);

export const ValtioPerson = () => {
  const { name, updateSecondName } = useSnapshot(personStoreValtio);

  const updateSeparateFunc = (value: string) => {
    personStoreValtio.updateSecondName(value);
  };

  const updateSeparateFuncWithoutArgs = personStoreValtio.updateSecondName;

  return (
    <>
      <Shared
        title={"Valtio Directly Deconstruction (error)"}
        name={name}
        updateSecondName={updateSecondName}
      />

      <Shared
        title={"Valtio Normal Usage"}
        name={name}
        updateSecondName={(value) => {
          personStoreValtio.updateSecondName(value);
        }}
        ok
      />

      <Shared
        title={"Valtio Normal Usage Without Args (error)"}
        name={name}
        updateSecondName={personStoreValtio.updateSecondName}
      />

      <Shared
        title={"Valtio Separate Func"}
        name={name}
        updateSecondName={updateSeparateFunc}
        ok
      />

      <Shared
        title={"Valtio Separate Func Without Args (error)"}
        name={name}
        updateSecondName={updateSeparateFuncWithoutArgs}
      />

      <Shared
        title={"Valtio update on outside raw (no reaction)"}
        name={name}
        updateSecondName={updateOnRawObjectOutside}
      />

      <Shared
        title={"Valtio update on outside proxy"}
        name={name}
        updateSecondName={updateOnProxyOutside}
        ok
      />
    </>
  );
};
