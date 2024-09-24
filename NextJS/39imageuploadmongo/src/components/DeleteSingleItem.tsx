"use client";

import { useRouter } from "next/navigation";

interface DeleteSingleItemProps {
  id: string | number;
}

const DeleteSingleItem: React.FC<DeleteSingleItemProps> = ({ id }) => {
  const router = useRouter();

  const deleteSelectedCartData = async () => {
    const response = await fetch(
      `http://localhost:3000/api/db-ecommerce/${id}`,
      {
        method: "DELETE",
      }
    );

    const data = await response.json();

    if (data.success) {
      alert("Cart Item Deleted Successfully ❤️");
      router.push("/integrate-get-mongo");
    } else {
      alert("Try again... 😭");
    }
  };

  return (
    <div>
      <button onClick={deleteSelectedCartData}>Delete</button>
    </div>
  );
};

export default DeleteSingleItem;
