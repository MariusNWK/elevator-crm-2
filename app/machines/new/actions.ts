import { db } from "@/db";
import { TResponse } from "@/type";
import { TNewMachineData } from "@/zod";

export async function createMachine(data: TNewMachineData): Promise<TResponse> {
  await db.machine.create({
    data: {
      ...data,
    },
  });

  return {
    success: "La machine a bien été créée",
  };
}
