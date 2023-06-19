// POST -- send data to server
// GET - get data from server
// PUT - update data on server
// DELETE - delete data on server
// PATCH - update data on server (partial update)

import express from "express";
const app = express();

app.use(express.json());

const users = [
  { id: 1, name: "Zymante" },
  { id: 2, name: "Neringa" },
  { id: 3, name: "Viola" },
  { id: 4, name: "Kristina" },
  { id: 5, name: "Vaida" },
];

const port = 5000;
app.get("/", (request, response) => {
  response.send("Response from server (MAIN ROUTE)");
});

app.get("/users", (request, response) => {
  response.json(users);
});

app.post("/create-user", (request, response) => {
  const requestFromUser = request.body;
  users.push(requestFromUser);
  response.status(201).json(users);
});

app.put("/update-user/:userId", (request, response) => {
  const requestFromUser = request.body;

  const userId = Number(request.params.userId);

  const updatedUsers = users.filter((user) => user.id !== userId);
  updatedUsers.push(requestFromUser);
  response.status(200).json(updatedUsers);
});

app.delete("/delete-user/:userId", (request, response) => {
  const userId = Number(request.params.userId);

  const updatedUsers = users.filter((user) => user.id !== userId);
  response.status(200).json(updatedUsers);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port} `);
});
