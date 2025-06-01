import React, { useState } from "react";


interface ModalRespuestaSiProps {
  open: boolean;
  onClose: () => void;
}
const ModalRespuestaSi: React.FC<ModalRespuestaSiProps> = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
        <div className="bg-white rounded-xl shadow-lg p-8 max-w-sm w-full text-center">
          <h3 className="text-xl font-bold mb-4 text-green-600">¡Enviado!</h3>
          <p className="mb-6">El formulario fue enviado correctamente.</p>
          <button
            className="bg-primary text-white px-6 py-2 rounded hover:bg-primary/90"
            onClick={onClose}
          >
            Cerrar
          </button>
        </div>
      </div>
    </>
  );
};

export default ModalRespuestaSi;