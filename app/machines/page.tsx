import DeleteMachineWrapper from "@/components/DeleteMachineWrapper";
import { db } from "@/db";
import Link from "next/link";
import { Suspense } from "react";
import { deleteMachine } from "./actions";

export default async function Page(): Promise<JSX.Element> {
  const machines = await db.machine.findMany();

  const titleColumns = [
    "Nom de code",
    "Nom du manager",
    "Position de l'entrepot",
    "Consommation énergétique",
    "Redirection",
    "Modification",
    "Suppression",
  ];

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
          {machines.map((machine) => (
            <div key={machine.id} className="p-4 flex gap-2">
              <div className="flex-1 truncate">{machine.codeName}</div>
              <div className="flex-1 truncate">{machine.managerName}</div>
              <div className="flex-1 truncate">{machine.warehousePosition}</div>
              <div className="flex-1 truncate">{machine.energyConsumption ?? "---"}</div>
              <div className="flex-1 truncate">
                <Link href={`/machines/${machine.id}`} className="bg-amber-700 text-white px-4 py-2 rounded">
                  Voir
                </Link>
              </div>
              <div className="flex-1 truncate">
                <Link href={`/machines/${machine.id}/edit`} className="bg-blue-500 text-white px-4 py-2 rounded">
                  Modifier
                </Link>
              </div>
              <div className="flex-1 truncate">
                <DeleteMachineWrapper machineId={machine.id} onDeleteMachine={onDeleteMachine} />
              </div>
            </div>
          ))}
        </Suspense>
      </div>
    </div>
  );
}
