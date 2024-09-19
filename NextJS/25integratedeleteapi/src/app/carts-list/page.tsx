const getCart = async () => {
  let data = await fetch("http://localhost:3000/api/carts");
  data = await data.json();
  return data;
};
const CartList = () => {
  return (
    <div>
      <h1>Cart List</h1>
    </div>
  );
};

export default CartList;
