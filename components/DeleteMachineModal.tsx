import React from 'react';

interface IDeleteMachineModalProps {
  onClose: () => void;
  onDelete: () => void;
}

export default function DeleteMachineModal(props: IDeleteMachineModalProps): JSX.Element {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Voulez-vous vraiment supprimer cette machine ?</h2>
        <div className="flex justify-end space-x-4">
          <button
            onClick={props.onClose}
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
          >
            Annuler
          </button>
          <button
            onClick={props.onDelete}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Supprimer
          </button>
        </div>
      </div>
    </div>
  );
}
