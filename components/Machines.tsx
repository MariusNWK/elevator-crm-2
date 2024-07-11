import { db } from "@/db";
import { TResponse } from "@/type";
import Link from "next/link";
import DeleteMachineWrapper from "./DeleteMachineWrapper";

interface IMachinesProps {
  onDeleteMachine: (machineId: number) => Promise<TResponse>;
}

export default async function Machines(props: IMachinesProps): Promise<JSX.Element> {
  const machines = await db.machine.findMany();

  return (
    <>
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
            <DeleteMachineWrapper machineId={machine.id} onDeleteMachine={props.onDeleteMachine} />
          </div>
        </div>
      ))}
    </>
  );
}
