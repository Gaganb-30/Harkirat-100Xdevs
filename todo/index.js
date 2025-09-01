const express = require("express");
const app = express();
const port = 3000;
const fs = require("fs");
const path = require("path");

app.use(express.json());

app.get("/todos", (req, res) => {
  fs.readFile("todos.json", "utf-8", (err, data) => {
    if (err) return res.status(404).send("404 Not Found");
    return res.status(201).json(JSON.parse(data));
  });
});

app.get("/todos/:id", (req, res) => {
  fs.readFile("todos.json", "utf-8", (err, data) => {
    if (err) return res.status(404).send("404 Not Found");
    const todos = JSON.parse(data);
    const todoInd = todos.findIndex(
      (todo) => todo.id === parseInt(req.params.id)
    );
    if (todoInd === -1) return res.status(404).send("404 Not Found");
    res.status(201).json(todos[todoInd]);
  });
});

app.post("/todos", function (req, res) {
  const todo = {
    id: Math.floor(Math.random() * 1000000),
    title: req.body.title,
    description: req.body.description,
  };
  fs.readFile("todos.json", "utf-8", (err, data) => {
    if (err) return res.status(404).send("Internal server error");
    const todos = JSON.parse(data);
    todos.push(todo);
    fs.writeFile("todos.json", JSON.stringify(todos), (err) => {
      if (err) return res.status(404).send("Internal server error");
      res.status(201).json(todo);
    });
  });
});
app.put("/todos/:id", (req, res) => {
  fs.readFile("todos.json", "utf-8", (err, data) => {
    if (err) return res.status(404).send("Internal server error");
    const todos = JSON.parse(data);
    const todoInd = todos.findIndex(
      (todo) => todo.id === parseInt(req.params.id)
    );
    if (todoInd === -1) return res.status(404).send("404 Not Found");
    todos[todoInd].title = req.body.title;
    todos[todoInd].description = req.body.description;
    fs.writeFile("todos.json", JSON.stringify(todos), (err) => {
      if (err) return res.status(404).send("Internal server error");
      res.status(201).json({ msg: "DONE" });
    });
  });
});
app.delete("/todos/:id", (req, res) => {
  fs.readFile("todos.json", "utf-8", (err, data) => {
    if (err) return res.status(404).send("Internal server error");
    const todos = JSON.parse(data);
    const todoInd = todos.findIndex(
      (todo) => todo.id === parseInt(req.params.id)
    );
    if (todoInd === -1) return res.status(404).send("404 Not Found");
    todos.splice(todoInd, 1);
    fs.writeFile("todos.json", JSON.stringify(todos), (err) => {
      if (err) return res.status(404).send("Internal server error");
      res.status(201).json({ msg: "DONE" });
    });
  });
});

app.use((req, res, next) => {
  res.status(404).send();
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
