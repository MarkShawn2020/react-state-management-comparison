"use client";

import { useState } from "react";

export const Shared = (props: {
  title: string;
  name: string;
  updateSecondName: (value: string) => void;
  ok?: boolean;
}) => {
  const { title, name, updateSecondName, ok } = props;
  const [value, setValue] = useState(name);

  return (
    <div
      className={
        "flex gap-2 items-center my-4 border p-2 border-cyan-800 w-full"
      }
    >
      {ok ? "✅" : "❌"}
      <label className={"w-96 truncate"}>{title}</label>

      <span className={"w-48 truncate"}>name: {name}</span>

      <input
        className={"bg-cyan-700"}
        value={value}
        onKeyDown={(event) => {
          if (event.key === "Enter" && !event.nativeEvent.isComposing) {
            updateSecondName(value);
          }
        }}
        onChange={(event) => {
          setValue(event.currentTarget.value);
        }}
      />
    </div>
  );
};
