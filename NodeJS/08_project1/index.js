import express from "express";
import { promises as fs } from "fs";

const app = express();
const PORT = 8000;

// middleware/plugin
app.use(express.urlencoded({ extended: false }));

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

// route to get the only users name as html
app.get("/users", async (req, res) => {
  try {
    const users = await fetchUsers();
    const htmlData = `
        <ul>
          ${users.map((user) => `<li>${user.first_name}</li>`)}
        </ul>
      `;
    return res.send(htmlData);
  } catch (error) {
    return res.status(500).json({ message: "data fetching error..." });
  }
});

// Route to get users data as only json
app.get("/api/users", async (req, res) => {
  try {
    const users = await fetchUsers();
    return res.json(users);
  } catch (error) {
    return res.status(500).json({ message: "Error reading data" });
  }
});

// getting user data based on id
app.get("/api/users/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);
    const users = await fetchUsers();
    const user = users.find((user) => user.id === id);
    return res.json(user);
  } catch (error) {
    return res.status(500).json({ message: "Error reading data" });
  }
});

app.post("/api/users", async (req, res) => {
  const body = req.body;
  const users = await fetchUsers();
  users.push({ ...body, id: users.length + 1 });
  fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
    return res.json({ status: "success", id: users.length + 1 });
  });
});

// Start the server
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
