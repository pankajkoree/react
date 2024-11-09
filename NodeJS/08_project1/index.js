import express from "express";
import { promises as fs } from "fs";

const app = express();
const PORT = 8000;

// middleware/plugin
app.use(express.urlencoded({ extended: false }));
app.use(express.json()); // Middleware to parse JSON request bodies

// Function to fetch users data from the JSON file
async function fetchUsers() {
  try {
    const data = await fs.readFile("./MOCK_DATA.json", "utf-8");
    return JSON.parse(data);
  } catch (error) {
    console.error("Error reading file:", error);
    throw error;
  }
}

// Route to get the users' names as HTML
app.get("/users", async (req, res) => {
  try {
    const users = await fetchUsers();
    const htmlData = `
      <ul>
        ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
      </ul>
    `;
    return res.send(htmlData);
  } catch (error) {
    return res.status(500).json({ message: "Data fetching error..." });
  }
});

// Route to get users data as JSON
app.get("/api/users", async (req, res) => {
  try {
    const users = await fetchUsers();
    return res.json(users);
  } catch (error) {
    return res.status(500).json({ message: "Error reading data" });
  }
});

// Route to get user data based on ID
app.get("/api/users/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);
    const users = await fetchUsers();
    const user = users.find((user) => user.id === id);
    if (user) {
      return res.json(user);
    } else {
      return res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    return res.status(500).json({ message: "Error reading data" });
  }
});

// POST route to add a new user
app.post("/api/users", async (req, res) => {
  try {
    const body = req.body;
    const users = await fetchUsers(); // Fetch current users

    // Add new user with a unique ID
    const newUser = { ...body, id: users.length + 1 };
    users.push(newUser);

    // Write the updated users array back to the file
    await fs.writeFile(
      "./MOCK_DATA.json",
      JSON.stringify(users, null, 2),
      "utf-8"
    );

    // Respond with success and the new user ID
    return res.json({ status: "success", id: newUser.id });
  } catch (error) {
    console.error("Error writing to file:", error);
    return res.status(500).json({ message: "Error saving user data" });
  }
});

// Start the server
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
