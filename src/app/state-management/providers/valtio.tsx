"use client";
import { proxy, useSnapshot } from "valtio";
import { person } from "../schema";
import { Shared } from "../shared";

export const personStoreValtio = proxy(person);

export const ValtioPerson = () => {
  const snap = useSnapshot(personStoreValtio);

  return (
    <>
      {/*<Shared*/}
      {/*  title={"Valtio Directly Deconstruction (error)"}*/}
      {/*  name={name}*/}
      {/*  updateSecondName={updateSecondName}*/}
      {/*/>*/}

      {/*<Shared*/}
      {/*  title={"Valtio Normal Usage Without Args (error)"}*/}
      {/*  name={name}*/}
      {/*  updateSecondName={personStoreValtio.updateSecondName}*/}
      {/*/>*/}

      {/*<div>*/}
      {/*  <div>raw: {person.name}</div>*/}
      {/*  <div>store: {personStoreValtio.name}</div>*/}
      {/*  <div>snap: {snap.name}</div>*/}
      {/*</div>*/}

      <Shared
        title={"Valtio (object, can't use snap functions)"}
        name={snap.name}
        updateSecondName={(value) => {
          snap.updateSecondName(value);
        }}
      />

      <Shared
        title={"Valtio (object, can use proxy function)"}
        name={snap.name}
        updateSecondName={(value) => {
          personStoreValtio.updateSecondName(value);
        }}
        ok
      />
    </>
  );
};
