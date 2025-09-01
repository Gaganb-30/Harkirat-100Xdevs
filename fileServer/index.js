const express = require("express");
const fs = require("fs");
const app = express();
const port = 3000;

app.get("/files", (req, res) => {
  fs.readdir("./files", (err, files) => {
    if (err) {
      return res.status(500).json({ error: "Failed to retrieve the files" });
    }
    return res.json(files);
  });
});

app.get("/file/:filename", (req, res) => {
  const fileName = req.params.filename;
  fs.readFile("./files/" + fileName, "utf-8", (err, data) => {
    if (err) {
      return res.status(404).send("File not found");
    }
    return res.send(data);
  });
});

app.use((req, res) => {
  res.status(404).send("404 Not Found");
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
