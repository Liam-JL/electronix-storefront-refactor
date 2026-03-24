import type React from "react";

type ModalProps = {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

function Modal({ open, onClose, children }: ModalProps) {
  return (
    <div
      className={`fixed inset-0 flex justify-center items-center transition-colors ${open ? "visible bg-black/20" : "invisible"}`}
      onClick={onClose}
    >
      <div
        className={`bg-white rounded-lg shadow p-6 transition-all max-w-md ${open ? "scale-100" : "scale-110 opacity-0"}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="absolute top-2 right-2 py-1 px-2 border border-electronix-grey text-electronix-black bg-electronix-white hover:bg-electronix-light-grey hover:text-accent">
          X
        </button>
        {children}
      </div>
    </div>
  );
}

export default Modal;
