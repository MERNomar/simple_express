const express = require("express");
const app = express();

const { getAllOrders, postOrder } = require("../controllers/orderController");

app.get("/", getAllOrders);

app.post("/", postOrder);

module.exports = app;
