const express = require("express");
const app = express();

const orderRoutes = require("./src/routes/orderRoutes");

app.use(express.json());

app.use("/orders", orderRoutes);

app.listen(3000, () => {
  console.log("everytihng is up and running");
});
