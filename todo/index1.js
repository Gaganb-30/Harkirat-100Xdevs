const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
let todos = [];

app.use(express.json());

app.get("/todos", (req, res) => {
  res.json(todos);
});

app.get("/todos/:id", (req, res) => {
  const todo = todos.find((todo) => todo.id === parseInt(req.params.id));
  if (!todo) res.status(404).send("404 Not Found");
  res.json(todo);
});

app.post("/todos", function (req, res) {
  const todo = {
    id: Math.floor(Math.random() * 1000000),
    title: req.body.title,
    description: req.body.description,
  };
  todos.push(todo);
  res.status(201).json(todo);
});
app.put("/todos/:id", (req, res) => {
  const todoInd = todos.findIndex(
    (todo) => todo.id === parseInt(req.params.id)
  );
  if (todoInd === -1) res.status(404).send("404 Not Found");
  todos[todoInd].title = req.body.title;
  todos[todoInd].description = req.body.description;
  res.status(200).send("done");
});
app.delete("/todos/:id", (req, res) => {
  const todoInd = todos.findIndex(
    (todo) => todo.id === parseInt(req.params.id)
  );
  if (todoInd === -1) res.status(404).send("404 Not Found");
  todos.splice(todoInd, 1);
  res.status(200).send("Done");
});

app.use((req, res, next) => {
  res.status(404).send();
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
