import DeleteSingleItem from "@/components/DeleteSingleItem";
import Link from "next/link";

type ApiResponse = {
  result: any;
  success: boolean;
  message?: string;
};

const getCartDataFromMongoDB = async () => {
  let response = await fetch("http://localhost:3000/api/db-ecommerce");
  const data: ApiResponse = await response.json();
  if (data.success) {
    return data.result;
  } else {
    return false;
  }
};

const GetCartDataFromMongo = async () => {
  const carts = await getCartDataFromMongoDB();
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-center text-3xl bg-blue-500 text-white py-4 mb-6">
        Get Cart Data From Mongo
      </h1>

      <table className="min-w-full table-auto border-collapse border border-gray-300">
        <thead>
          <tr className="bg-blue-500 text-white text-xl">
            <th className="border border-gray-300 p-2">Title</th>
            <th className="border border-gray-300 p-2">Price</th>
            <th className="border border-gray-300 p-2">Quantity</th>
            <th className="border border-gray-300 p-2">Total</th>
            <th className="border border-gray-300 p-2" colSpan={2}>
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {carts &&
            carts.map(
              (cart: {
                _id: any;
                title: string | number;
                price: string | number;
                quantity: string | number;
                total: string | number;
              }) => (
                <tr
                  key={cart.title}
                  className="bg-white even:bg-gray-100 hover:bg-gray-200"
                >
                  <td className="border border-gray-300 p-2 text-center">
                    {cart.title}
                  </td>
                  <td className="border border-gray-300 p-2 text-center">
                    {cart.price}
                  </td>
                  <td className="border border-gray-300 p-2 text-center">
                    {cart.quantity}
                  </td>
                  <td className="border border-gray-300 p-2 text-center">
                    {cart.total}
                  </td>
                  <td className="border border-gray-300 p-2 text-center">
                    <Link href={`integrate-get-mongo/${cart._id}`}>Edit</Link>
                  </td>
                  <td className="border border-gray-300 p-2 text-center">
                    <DeleteSingleItem id={cart._id} />
                  </td>
                </tr>
              )
            )}
        </tbody>
      </table>

      <div className="relative top-8 p-2 border-2 w-[20%] text-center rounded-lg left-4 border-purple-400">
        <Link href={"/home"}> ⬅️ Bact to Home</Link>
      </div>
    </div>
  );
};

export default GetCartDataFromMongo;
