"use client";

type DeleteButtonProps = {
  id: number;
};

const DeleteButton = ({ id }: DeleteButtonProps) => {
  const deleteEmployee = async () => {
    try {
      let response = await fetch(`http://localhost:3000/api/carts/${id}`, {
        method: "DELETE",
      });
      let data = await response.json();

      if (data.success) {
        alert("Employee Deleted");
      } else {
        alert("Failed to delete");
      }
    } catch (error) {
      console.error("Error deleting employee:", error);
      alert("Failed due to an error.");
    }
  };

  return <button onClick={deleteEmployee} className="relative w-[200px] bg-green-400">Delete</button>;
};

export default DeleteButton;
