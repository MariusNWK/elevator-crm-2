"use server";

import { db } from "@/db";
import { TResponse } from "@/type";
import { revalidatePath } from "next/cache";

export async function addNote(note: string, machineId: number): Promise<TResponse> {
  await db.machine.update({
    where: {
      id: machineId,
    },
    data: {
      notes: {
        push: note,
      },
    },
  });

  revalidatePath(`/machines/${machineId}`);

  return {
    success: "La note a bien été ajoutée à la machine",
  };
}
