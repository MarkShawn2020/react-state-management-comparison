import { JotaiPerson } from "./state-management/jotai";
import { MobxPerson } from "./state-management/mobx";
import { ValtioPerson } from "./state-management/valtio";
import { ZustandPerson } from "./state-management/zustand";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-16 bg-cyan-900 text-black w-full">
      <ValtioPerson />

      <ZustandPerson />

      <JotaiPerson />

      <MobxPerson />
    </main>
  );
}
