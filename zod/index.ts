import { z } from "zod";

export const newMachineSchema = z.object({
  codeName: z.string().min(1),
  managerName: z.string().min(1),
  warehousePosition: z.string().min(1),
  energyConsumption: z.number().min(0),
});

export type TNewMachineData = z.infer<typeof newMachineSchema>;
