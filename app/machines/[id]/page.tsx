import AddNote from "@/components/AddNote";
import { db } from "@/db";
import { notFound } from "next/navigation";
import { addNote } from "./actions";

export default async function Page(props: { params: { id: string } }): Promise<JSX.Element> {
  const id = Number(props.params.id);

  if (Number.isNaN(id)) {
    return notFound();
  }

  const machine = await db.machine.findUnique({
    where: {
      id,
    },
  });

  if (!machine) {
    return notFound();
  }

  const onAddNote = async (note: string) => {
    "use server";

    return addNote(note, id);
  };

  const pairs = [
    {
      label: "Nom de code",
      value: machine.codeName,
    },
    {
      label: "Nom du responsable",
      value: machine.managerName,
    },
    {
      label: "Position dans l'entrepôt",
      value: machine.warehousePosition,
    },
    {
      label: "Consommation d'énergie",
      value: machine.energyConsumption ?? "---",
    },
  ];

  return (
    <div className="flex flex-col gap-8 items-center justify-center h-full">
      <div className="flex flex-col">
        {pairs.map((pair) => (
          <div className="flex">
            <div className="p-4 font-semibold">{pair.label}</div>
            <div className="p-4">{pair.value}</div>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <h1>Notes :</h1>
          {machine.notes.map((note) => (
            <div className="p-4 border border-black">{note}</div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h1>Ajouter une note :</h1>
        <AddNote onAddNote={onAddNote} />
      </div>
    </div>
  );
}
