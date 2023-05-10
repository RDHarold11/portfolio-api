const errorHandler = (err, req, res, next) => {
  console.error(err);
  res.status(500).json({ message: "Internal error in the server" });
};

const notFound = (req, res) => {
  res.status(400).json({ message: "404 not found" });
};

module.exports = { errorHandler, notFound };
