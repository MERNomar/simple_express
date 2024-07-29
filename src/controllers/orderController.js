const getAllOrders = (req, res) => {
  console.log(req.body);
  res.sendStatus(200);
};

const postOrder = (req, res) => {
  const rando = Math.floor(Math.random() * 9999);
  console.log({ tracking_number: rando });
  console.log(req.body);
  res.json({ tracking_number: rando }).status(200);
};

module.exports = { getAllOrders, postOrder };
