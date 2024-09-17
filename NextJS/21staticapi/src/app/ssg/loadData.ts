// // Define the structure of a single recipe
// interface Recipe {
//   id: number; // Adjust these fields to match your actual data structure
//   title: string;
//   description: string;
// }

// // Define the structure of the entire data response (RecipesData)
// interface RecipesData {
//   recipes: Recipe[]; // The response should contain an array of `Recipe` objects
// }

// const LoadData = async (): Promise<RecipesData> => {
//   const response = await fetch("https://dummyjson.com/recipes");
//   const data = await response.json(); // Parse the response to JSON
//   return data;
// };

// export default LoadData;

const getData = async () => {
  const result = await fetch("https://jsonplaceholder.typicode.com/users");
  return result.json();
};
export default getData;
