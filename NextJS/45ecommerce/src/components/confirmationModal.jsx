import React from "react";
import { Button } from "@/components/ui/button";

const ConfirmationModal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-black opacity-30" onClick={onClose} />
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 z-10">
        <h2 className="text-lg font-bold mb-4">Confirm Logout</h2>
        <p className="mb-4">Are you sure you want to logout?</p>
        <div className="flex justify-end space-x-4">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button variant="destructive" onClick={onConfirm}>
            Yes, Logout
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
