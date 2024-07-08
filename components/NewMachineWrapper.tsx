"use client";

import { TResponse } from "@/type";
import { TNewMachineData, newMachineSchema } from "@/zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import Input from "./Input";

interface INewMachineWrapperProps {
  onSubmit(data: TNewMachineData): Promise<TResponse>;
}

export default function NewMachineWrapper(props: INewMachineWrapperProps): JSX.Element {
  const methods = useForm<TNewMachineData>({
    resolver: zodResolver(newMachineSchema),
    defaultValues: {
      codeName: "",
      managerName: "",
      warehousePosition: "",
    },
  });

  return (
    <FormProvider {...methods}>
      <form className="flex flex-col justif-center items-center gap-2" onSubmit={methods.handleSubmit(props.onSubmit)}>
        <Input name="codeName" type="text" placeholder="Nom de code" />
        <Input name="managerName" type="text" placeholder="Nom du manager" />
        <Input name="warehousePosition" type="text" placeholder="Position entrepot" />
        <Input name="energyConsumption" type="number" placeholder="Consommation énergie" />
        <button type="submit" className="p-2 rounded bg-green-600 text-white">
          Valider
        </button>
      </form>
    </FormProvider>
  );
}
