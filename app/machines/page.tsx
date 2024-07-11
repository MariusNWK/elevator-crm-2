import Machines from "@/components/Machines";
import Link from "next/link";
import { Suspense } from "react";
import { deleteMachine } from "./actions";

const titleColumns = [
  "Nom de code",
  "Nom du manager",
  "Position de l'entrepot",
  "Consommation énergétique",
  "Redirection",
  "Modification",
  "Suppression",
];

export default async function Page(): Promise<JSX.Element> {
  const onDeleteMachine = async (machineId: number) => {
    "use server";

    return deleteMachine(machineId);
  };

  return (
    <div className="flex flex-col m-8 bg-neutral-200 rounded h-full">
      <div className="flex gap-2 justify-between">
        <h1 className="text-2xl font-semibold">Liste des machines</h1>
        <Link href="/machines/new" className="bg-blue-500 text-white px-4 py-2 rounded-md">
          New Machine
        </Link>
      </div>
      <div className="flex-1 flex flex-col">
        <div className="flex p-4 gap-2">
          {titleColumns.map((title) => (
            <div key={title} className="font-semiboldn flex-1 truncate">
              {title}
            </div>
          ))}
        </div>
        <Suspense fallback={<div>Loading...</div>}>
          <Machines onDeleteMachine={onDeleteMachine} />
        </Suspense>
      </div>
    </div>
  );
}
