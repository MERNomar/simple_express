import express from "express";
import orderRoutes from "./src/routes/orderRoutes.js";
import "dotenv/config.js";
//const cors = require("cors");

const app = express();
app.use(express.json());

const PORT = process.env.PORT;
//app.use(cors());

app.use("/orders", orderRoutes);

app.listen(PORT, () => {
  console.log(`Your server is running on port http://localhost:${PORT}`);
});
