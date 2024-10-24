import express from "express";

const app = express();
const port = 4000;

// testing the routes
// app.get("/", (req, res) => {
//   res.send("express js server");
// });

// app.get("/pankaj", (req, res) => {
//   res.send("welcome pankaj");
// });
// app.get("/world", (req, res) => {
//   res.send("hello world");
// });

// app.get("/github", (req, res) => {
//   res.send("github.com/pankajkoree");
// });

// making the route for contact management
app.use(express.json());
const contacts = [];
let contactId = 1;

// add api
app.post("/add", (req, res) => {
  const { contactName, contactNumber } = req.body;
  const newContact = { contactId: contactId++, contactName, contactNumber };
  contacts.push(newContact);

  res.status(200).send(newContact);
});

// get all contact api
app.get("/getContact", (req, res) => {
  res.status(200).send(contacts);
});

app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});
