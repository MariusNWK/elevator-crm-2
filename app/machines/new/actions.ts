"use server";

import { db } from "@/db";
import { TResponse } from "@/type";
import { TNewMachineData } from "@/zod";
import { revalidatePath } from "next/cache";

export async function createMachine(data: TNewMachineData): Promise<TResponse> {
  await db.machine.create({
    data: {
      ...data,
      energyConsumption: data.energyConsumption ? Number(data.energyConsumption) : null,
      notes: [],
    },
  });

  revalidatePath("/machines");

  return {
    success: "La machine a bien été créée",
  };
}
