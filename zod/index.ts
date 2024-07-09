import { z } from "zod";

const preprocessNumber = (value: unknown): string | undefined => {
  if (value === undefined || value === "") {
    return undefined;
  }
  if (typeof value === "string" && !isNaN(Number(value))) {
    return value;
  }
  throw new Error(`Invalid number: ${value}`);
};

const nonEmptyString = z.string().min(1, { message: "Ne peut pas être vide" });

export const newMachineSchema = z.object({
  codeName: nonEmptyString,
  managerName: nonEmptyString,
  warehousePosition: nonEmptyString,
  energyConsumption: z.preprocess(preprocessNumber, nonEmptyString.optional()),
});

export type TNewMachineData = z.infer<typeof newMachineSchema>;
