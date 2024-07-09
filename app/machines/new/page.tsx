import NewMachineWrapper from "@/components/NewMachineWrapper";
import { TResponse } from "@/type";
import { TNewMachineData } from "@/zod";
import { createMachine } from "./actions";

export default function Page(): JSX.Element {
  const onSubmit = async (data: TNewMachineData): Promise<TResponse> => {
    "use server";

    return createMachine(data);
  };

  return (
    <div className="flex flex-col m-8 bg-neutral-200 rounded h-full gap-4 p-8">
      <h1 className="text-center text-xl">Création d&apos;une nouvelle machine</h1>
      <NewMachineWrapper onSubmit={onSubmit} />
    </div>
  );
}
