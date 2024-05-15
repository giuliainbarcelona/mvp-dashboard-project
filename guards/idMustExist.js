const db = require("../model/helper");

async function idMustExist(req, res, next) {
  try {
    const result = await db(`SELECT * FROM sales WHERE id = ${req.params.id}`);

    if (result.data.length) {
      req.saleRecord = result.data[0]; // Rename req.id to req.saleRecord for clarity
      next();
    } else {
      res.status(404).send({ message: "Sales Record does not exist" });
    }
  } catch (err) {
    res.status(500).send(err);
  }
}

module.exports = idMustExist;
