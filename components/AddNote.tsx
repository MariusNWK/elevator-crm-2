"use client";

import useSnackbar from "@/hooks/useSnackBar";
import { TResponse } from "@/type";
import { useState } from "react";

interface IAddNoteProps {
  onAddNote: (note: string) => Promise<TResponse>;
}

export default function AddNote(props: IAddNoteProps): JSX.Element {
  const [note, setNote] = useState<string>("");
  const notif = useSnackbar();
  const [error, setError] = useState("");

  const handleAddNote = async () => {
    try {
      if (note === "") {
        setError("La note ne peut pas être vide");
        return;
      }

      const response = await props.onAddNote(note);

      if ("success" in response) {
        notif.success(response.success);
        setNote("");
      } else {
        notif.error(response.error);
      }
    } catch {
      notif.error("Une erreur s'est produite");
    }
  };

  const handleChangeTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (error) {
      setError("");
    }
    setNote(e.target.value);
  };

  return (
    <div className="flex flex-col gap-2">
      <textarea value={note} onChange={handleChangeTextArea} className="border p-2 rounded" />
      {error && <div className="text-red-400">{error}</div>}
      <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleAddNote}>
        Ajouter
      </button>
    </div>
  );
}
