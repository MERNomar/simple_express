const getAllOrders = (req, res) => {
  console.log(req.body);
  res.sendStatus(200);
};

const postOrder = (req, res) => {
  console.log(req.body);
  const rando = Math.floor(Math.random() * 9999);
  res.json({ tracking_number: rando }).status(200);
};

module.exports = { getAllOrders, postOrder };
