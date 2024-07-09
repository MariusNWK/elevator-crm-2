import { db } from "@/db";
import { revalidatePath } from "next/cache";

export async function deleteMachine(machineId: number) {
  await db.machine.delete({
    where: {
      id: machineId
    }
  })

  revalidatePath("/machines");

  return {
    success: "La machine a été supprimée avec succès"
  }
}