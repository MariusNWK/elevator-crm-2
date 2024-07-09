import NewMachineWrapper from "@/components/NewMachineWrapper";
import { TResponse } from "@/type";
import { TNewMachineData } from "@/zod";
import { notFound } from "next/navigation";
import { editMachine } from "./actions";
import { db } from "@/db";

export default async function Page(props: { params: { id: string } }): Promise<JSX.Element> {
  const id = Number(props.params.id);

  if (Number.isNaN(id)) {
    return notFound();
  }

  const machine = await db.machine.findUnique({
    where: {
      id,
    },
  });

  if (!machine) {
    return notFound();
  }

  const onSubmit = async (data: TNewMachineData): Promise<TResponse> => {
    "use server";

    return editMachine(data, id);
  };

  return (
    <div className="flex flex-col m-8 bg-neutral-200 rounded h-full gap-4 p-8">
      <h1 className="text-center text-xl">Modification de la machine</h1>
      <NewMachineWrapper
        onSubmit={onSubmit}
        defaultValues={{
          codeName: machine.codeName,
          managerName: machine.managerName,
          warehousePosition: machine.warehousePosition,
          energyConsumption: machine.energyConsumption ? machine.energyConsumption.toString() : "",
        }}
      />
    </div>
  );
}
