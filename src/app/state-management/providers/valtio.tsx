"use client";
import { proxy, useSnapshot } from "valtio";
import { person } from "../schema";
import { Shared } from "../shared";

export const personStoreValtio = proxy(person);

export const ValtioPerson = () => {
  const { name, updateSecondName } = useSnapshot(personStoreValtio);

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

      <Shared
        title={"Valtio Normal Usage"}
        name={name}
        updateSecondName={(value) => {
          personStoreValtio.updateSecondName(value);
        }}
        ok
      />
    </>
  );
};
