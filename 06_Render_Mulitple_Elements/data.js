async function getData() {
  const data = await fetch("https://fakestoreapi.com/products");
  const response = await data.json();
  return response;
}

export default getData;
