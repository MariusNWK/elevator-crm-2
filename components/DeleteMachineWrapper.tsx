"use client";

import { useState } from "react";
import DeleteMachineModal from "./DeleteMachineModal";
import { TResponse } from "@/type";
import useSnackbar from "@/hooks/useSnackBar";

interface IDeleteMachineWrapperProps {
  machineId: number;
  onDeleteMachine: (machineId: number) => Promise<TResponse>;
}

export default function DeleteMachineWrapper(props: IDeleteMachineWrapperProps): JSX.Element {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const notif = useSnackbar();

  const onClick = () => {
    setIsModalOpen(true);
  }

  const onClose = () => {
    setIsModalOpen(false);
  }

  const onDelete = async () => {
    try {
      const response = await props.onDeleteMachine(props.machineId);

      if ("success" in response) {
        notif.success(response.success);
      } else {
        notif.error(response.error);
      }
    } catch {
      notif.error("Une erreur s'est produite");
    }
  }

  return (
    <>
      {isModalOpen && <DeleteMachineModal onClose={onClose} onDelete={onDelete} />}
      <button className="bg-red-400 text-white px-4 py-2 rounded" onClick={onClick}>Supprimer</button>
    </>
  )
}