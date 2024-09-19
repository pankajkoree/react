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

  // Just for debugging purposes
  // carts.map((cart: Cart) => {
  //   console.log(cart);
  // });

  return (
    <>
      <h1>Cart List</h1>
      {carts.length > 0 ? (
        carts.map((cart) => (
          <div key={cart.id}>
            <h3>{`Cart ID: ${cart.id} - User ID: ${cart.userId}`}</h3>
            <ul>
              {cart.products.map((product) => (
                <li key={product.id}>
                  {product.title} - Quantity: {product.quantity} - Price: $
                  {product.price}
                </li>
              ))}
            </ul>
            <DeleteButton id={cart.id} />
          </div>
        ))
      ) : (
        <p>No carts available.</p>
      )}
    </>
  );
};

export default CartList;
