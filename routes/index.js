var express = require("express");
var router = express.Router();
const db = require("../model/helper");

/* GET home page. */
router.get("/", function (req, res, next) {
  db("SELECT * FROM sales;")
    .then((results) => {
      res.send(results.data);
    })
    .catch((err) => res.status(500).send(err));
});

//Get records by date
router.get("/:day", async function (req, res, next) {
  // GUARD 2: we need a guard to check if the day even esists
  try {
    const { day } = req.params;
    const result = await db(`SELECT * FROM sales WHERE day = '${day}'`);
    res.status(200).send(result.data);
  } catch (err) {
    res.status(500).send(err);
  }
});

//Get records by week
router.get("/:day", async function (req, res, next) {
  // GUARD 2: we need a guard to check if the day even esists
  try {
    const { day } = req.params;
    const endDate = endDate.setDate(endDate.getDate() + 6);

    const result = await db(
      `SELECT * FROM sales WHERE day BETWEEN '${day}' AND '${endDate}'`
    );
    res.status(200).send(result.data);
  } catch (err) {
    res.status(500).send(err);
  }
});

//Get records by month
router.get("/:day", async function (req, res, next) {
  // GUARD 2: we need a guard to check if the day even esists
  try {
    const { day } = req.params;
    const result = await db(`SELECT * FROM sales WHERE day = '${day}'`);
    res.status(200).send(result.data);
  } catch (err) {
    res.status(500).send(err);
  }
});

//Get records three month
router.get("/:day", async function (req, res, next) {
  // GUARD 2: we need a guard to check if the day even esists
  try {
    const { day } = req.params;
    const result = await db(`SELECT * FROM sales WHERE day = '${day}'`);
    res.status(200).send(result.data);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Adds a new record
router.post("/", async function (req, res, next) {
  // GUARD 1: to make sure all the data are inserted!
  try {
    const { day, income, men, women, kids, clothing, sport, home, weather } =
      req.body;
    await db(
      `INSERT INTO sales (day, income, men, women, kids, clothing, sport, home, weather) VALUES ('${day}', ${income}, ${men}, ${women}, ${kids}, ${clothing}, ${sport}, ${home}, '${weather}')`
      // SELECT CONVERT_TZ('2008-05-15 12:00:00','+00:00','+10:00');
    );

    const result = await db(`SELECT * FROM sales;`);
    res.status(200).send(result.data);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Deletes a record from the table by date
router.delete("/:day", async function (req, res, next) {
  // GUARD 2: we need a guard to check if the day even esists
  try {
    const { day } = req.params;
    await db(`DELETE FROM sales WHERE day = '${day}'`);
    const result = await db(`SELECT * FROM sales`);
    res.status(200).send(result.data);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;

// POST: allows add items daily
// PUT: allows you to edit wrong information
// DELETE: allows you to delete inputs
// GET by ID/DATE: allows you to get records by date
