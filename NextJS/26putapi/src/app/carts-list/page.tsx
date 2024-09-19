import DeleteButton from "@/components/DeleteButton";

type Cart = {
  id: number;
  userId: number;
  products: {
    id: number;
    title: string;
    price: number;
    quantity: number;
    total: number;
    thumbnail: string;
  }[];
  total: number;
  totalProducts: number;
  totalQuantity: number;
};

const getCart = async (): Promise<Cart[]> => {
  let data = await fetch("http://localhost:3000/api/carts");
  return await data.json();
};

const CartList = async () => {
  let carts: Cart[] = await getCart();

  return (
    <>
      <h1 className="relative flex justify-center text-center text-3xl bg-blue-600 text-white p-2">
        Cart List
      </h1>
      <div className="relative p-4">
        {carts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {carts.map((cart) => (
              <div
                key={cart.id}
                className="p-4 border-2 border-red-200 rounded-lg shadow-md"
              >
                <h3>{`Cart ID: ${cart.id} - User ID: ${cart.userId}`}</h3>
                <ul className="space-y-2">
                  {cart.products.map((product) => (
                    <li key={product.id}>
                      {product.title} - Quantity: {product.quantity} - Price: $
                      {product.price}
                    </li>
                  ))}
                </ul>
                <DeleteButton id={cart.id} />
              </div>
            ))}
          </div>
        ) : (
          <p>No carts available.</p>
        )}
      </div>
    </>
  );
};

export default CartList;
