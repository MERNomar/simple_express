const express = require("express");
const app = express();

app.use(express.json());

app.post("/", (req, res) => {
  console.log(req.body);
});

app.get("/", (req, res) => {
  console.log("get requested");
  res.json({ welcome: "welcome" });
});

app.listen(3000, () => {
  console.log("everytihng is up and running");
});
