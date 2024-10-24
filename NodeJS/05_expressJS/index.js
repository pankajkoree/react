import express from "express";

const app = express();
const port = 4000;

app.use(express.json());
const contacts = [];
let id = 1;

// Add contact API
app.post("/add", (req, res) => {
  const { contactName, contactNumber } = req.body;
  const newContact = { id: id++, contactName, contactNumber };
  contacts.push(newContact);

  res.status(200).send(newContact);
});

// Get all contacts API
app.get("/getContact", (req, res) => {
  res.status(200).send(contacts);
});

// Get contact by ID API
app.get("/getContact/:id", (req, res) => {
  const contact = contacts.find(
    (contact) => contact.id === parseInt(req.params.id)
  );
  if (!contact) {
    return res.status(404).send("Contact not found");
  }

  res.status(200).send(contact);
});

// Update contact by ID API
app.put("/getContact/:id", (req, res) => {
  console.log("PUT request received with data:", req.body); // Log the request body

  const contact = contacts.find(
    (contact) => contact.id === parseInt(req.params.id)
  );

  if (!contact) {
    console.log("Contact not found with ID:", req.params.id); // Log if contact not found
    return res.status(404).send("Contact not found");
  }

  const { contactName, contactNumber } = req.body;

  // Validate if both contactName and contactNumber are present
  if (!contactName || !contactNumber) {
    console.log("Invalid input data:", req.body); // Log invalid data
    return res
      .status(400)
      .send("Both contact name and contact number are required");
  }

  // Log contact before updating
  console.log("Contact before update:", contact);

  // Update the contact
  contact.contactName = contactName;
  contact.contactNumber = contactNumber;

  // Log contact after updating
  console.log("Contact after update:", contact);

  res.status(200).send({
    message: "Contact updated",
    updatedContact: contact,
  });
});

// Delete contact by ID API
app.delete("/getContact/:id", (req, res) => {
  const index = contacts.findIndex(
    (contact) => contact.id === parseInt(req.params.id)
  );

  if (index === -1) {
    return res.status(404).send("Contact not found");
  }

  contacts.splice(index, 1);
  res.status(200).send("Contact deleted");
});

app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});
