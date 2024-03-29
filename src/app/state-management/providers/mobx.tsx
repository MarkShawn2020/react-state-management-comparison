"use client";

import { observer } from "mobx-react-lite";
import { person } from "../schema";
import { Shared } from "../shared";

export const MobxPerson = observer(() => {
  return (
    <Shared
      title={"Mobx (object, with observer wrapped)"}
      name={person.name}
      updateSecondName={(value) => person.updateSecondName(value)}
      ok
    />
  );
});
