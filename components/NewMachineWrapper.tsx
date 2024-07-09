"use client";

import useSnackbar from "@/hooks/useSnackBar";
import { TResponse } from "@/type";
import { TNewMachineData, newMachineSchema } from "@/zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import Input from "./Input";
import { useRouter } from "next/navigation";

interface INewMachineWrapperProps {
  onSubmit(data: TNewMachineData): Promise<TResponse>;
  defaultValues?: TNewMachineData;
}

export default function NewMachineWrapper(props: INewMachineWrapperProps): JSX.Element {
  const methods = useForm<TNewMachineData>({
    resolver: zodResolver(newMachineSchema),
    defaultValues: {
      codeName: "",
      managerName: "",
      warehousePosition: "",
      energyConsumption: "",
      ...props.defaultValues,
    },
  });

  const notif = useSnackbar();
  const router = useRouter();

  const onSubmit = async (data: TNewMachineData): Promise<void> => {
    try {
      const response = await props.onSubmit(data);

      if ("success" in response) {
        notif.success(response.success);
        router.push("/machines");
      } else {
        notif.error(response.error);
      }
    } catch {
      notif.error("Une erreur est survenue");
    }
  };

  return (
    <FormProvider {...methods}>
      <form className="flex flex-col justif-center items-center gap-2" onSubmit={methods.handleSubmit(onSubmit)}>
        <Input name="codeName" type="text" placeholder="Nom de code" />
        <Input name="managerName" type="text" placeholder="Nom du manager" />
        <Input name="warehousePosition" type="text" placeholder="Position entrepot" />
        <Input name="energyConsumption" type="number" placeholder="Consommation énergie" />
        <button type="submit" className="p-2 rounded bg-green-600 text-white">
          {props.defaultValues ? "Modifier" : "Créer"}
        </button>
      </form>
    </FormProvider>
  );
}
