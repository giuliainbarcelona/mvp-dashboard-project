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

//Get records of the week
router.get("/week/:day", async function (req, res, next) {
  // GUARD 2: we need a guard to check if the day even exists
  try {
    const { day } = req.params;
    const result = await db(
      `SELECT * FROM sales WHERE WEEK(day) = WEEK('${day}')`
    );

    res.status(200).send(result.data);
  } catch (err) {
    res.status(500).send(err);
  }
});

//Get records by month
router.get("/month/:month", async function (req, res, next) {
  // GUARD 2: we need a guard to check if the month even exists
  try {
    const { month } = req.params;
    const result = await db(`SELECT * FROM sales WHERE MONTH(day) = ${month};`);
    res.status(200).send(result.data);
  } catch (err) {
    res.status(500).send(err);
  }
});

//Get records three month
router.get("/quarter/:month/:endmonth", async function (req, res, next) {
  // GUARD 2: we need a guard to check if the month even esists
  try {
    const { month, endmonth } = req.params;
    const result = await db(
      `SELECT * FROM sales WHERE MONTH(day) BETWEEN ${month} AND ${endmonth}`
    );
    res.status(200).send(result.data);
    // console.log(result.data);
  } catch (err) {
    res.status(500).send(err);
  }
});

// The put method allows you to edit the fields with wrong information.
// With this code, you can edit only one field or as many as you want.
router.put("/:day", async function (req, res, next) {
  try {
    const { day } = req.params;
    const { income, men, women, kids, clothing, sport, home, weather } =
      req.body;

    const updateFields = [];
    if (income !== undefined) updateFields.push(`income = ${income}`);
    if (men !== undefined) updateFields.push(`men = ${men}`);
    if (women !== undefined) updateFields.push(`women = ${women}`);
    if (kids !== undefined) updateFields.push(`kids = ${kids}`);
    if (clothing !== undefined) updateFields.push(`clothing = ${clothing}`);
    if (sport !== undefined) updateFields.push(`sport = ${sport}`);
    if (home !== undefined) updateFields.push(`home = ${home}`);
    if (weather !== undefined) updateFields.push(`weather = '${weather}'`);

    await db(`UPDATE sales SET ${updateFields.join(", ")} WHERE day= '${day}'`);

    const result = await db(`SELECT * FROM sales WHERE day= '${day}'`);
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
