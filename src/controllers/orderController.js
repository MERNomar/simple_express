const getAllOrders = (req, res) => {
  console.log(req.body);
  res.sendStatus(200);
};

const postOrder = (req, res) => {
  console.log(req.body);
  res.sendStatus(200);
};

module.exports = { getAllOrders, postOrder };
