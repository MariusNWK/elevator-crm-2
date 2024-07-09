"use server";

import { db } from "@/db";
import { TNewMachineData } from "@/zod"
import { revalidatePath } from "next/cache";

export const editMachine = async (data: TNewMachineData, id: number) => {
  await db.machine.update({
    where: {
      id,
    },
    data: {
      ...data,
      energyConsumption: data.energyConsumption ? Number(data.energyConsumption) : null,
    },
  });

  revalidatePath("/machines");

  return {
    success: "La machine a bien été modifiée",
  };
}