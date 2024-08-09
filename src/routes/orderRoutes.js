import express from "express";
import { getAllOrders } from "../controllers/orderController.js";
const app = express();

app.get("/", getAllOrders);

export default app;
