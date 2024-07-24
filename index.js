const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

app.post("/", (req, res) => {
  console.log(req.body);
  res.sendStatus(200);
});

app.get("/", (req, res) => {
  res.sendStatus(200);
});

app.listen(PORT, () => {
  console.log("everytihng is up and running");
});
