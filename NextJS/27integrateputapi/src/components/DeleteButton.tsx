"use client";

type DeleteButtonProps = {
  id: number;
};

const DeleteButton = ({ id }: DeleteButtonProps) => {
  const deleteProduct = async () => {
    try {
      let response = await fetch(`http://localhost:3000/api/carts/${id}`, {
        method: "DELETE",
      });
      let data = await response.json();

      if (data.success) {
        alert("Product Deleted");
      } else {
        alert("Failed to delete");
      }
    } catch (error) {
      console.error("Error deleting product:", error);
      alert("Failed due to an error.");
    }
  };

  return (
    <button
      onClick={deleteProduct}
      className="relative w-[30%] left-[20%] p-2 text-xl top-2 rounded-lg text-white bg-red-400 "
    >
      Delete
    </button>
  );
};

export default DeleteButton;
