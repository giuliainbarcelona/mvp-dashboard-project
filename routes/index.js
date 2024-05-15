var express = require("express");
var router = express.Router();
const db = require("../model/helper");
const idMustExist = require("../guards/idMustExist");
const allInputsMustExist = require("../guards/allInputsMustExist");

/* GET home page. */
router.get("/", function (req, res, next) {
  db("SELECT * FROM sales;")
    .then((results) => {
      res.send(results.data);
    })
    .catch((err) => res.status(500).send(err));
});

//Get records by date
router.get("/dates", async function (req, res, next) {
  console.log(req.query);
  try {
    const { startDate, endDate } = req.query;
    let query = "SELECT * FROM sales";

    if (startDate && endDate) {
      query += ` WHERE day BETWEEN '${startDate}' AND '${endDate}'`; // Filter data for the date range
    } else if (startDate) {
      query += ` WHERE day >= '${startDate}'`; // Filter data from the start date onwards
    } else if (endDate) {
      query += ` WHERE day <= '${endDate}'`; // Filter data up to the end date
    }

    // console.log(start);

    const result = await db(query);
    res.status(200).send(result.data);
  } catch (err) {
    res.status(500).send(err);
  }
});

// The put method allows you to edit the fields with wrong information.
// With this code, you can edit only one field or as many as you want.
router.put("/:id", idMustExist, async function (req, res, next) {
  try {
    const { id } = req.params;
    const { day, income, men, women, kids, clothing, sport, home, weather } =
      req.body;

    const updateFields = [];
    if (day !== undefined) updateFields.push(`day = ${day}`);
    if (income !== undefined) updateFields.push(`income = ${income}`);
    if (men !== undefined) updateFields.push(`men = ${men}`);
    if (women !== undefined) updateFields.push(`women = ${women}`);
    if (kids !== undefined) updateFields.push(`kids = ${kids}`);
    if (clothing !== undefined) updateFields.push(`clothing = ${clothing}`);
    if (sport !== undefined) updateFields.push(`sport = ${sport}`);
    if (home !== undefined) updateFields.push(`home = ${home}`);
    if (weather !== undefined) updateFields.push(`weather = '${weather}'`);

    await db(`UPDATE sales SET ${updateFields.join(", ")} WHERE id= '${id}'`);

    const result = await db(`SELECT * FROM sales WHERE id= '${id}'`);
    res.status(200).send(result.data);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Adds a new record
router.post("/", allInputsMustExist, async function (req, res, next) {
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
router.delete("/:id", idMustExist, async function (req, res, next) {
  // GUARD 2: we need a guard to check if the day even esists
  try {
    const { id } = req.params;
    await db(`DELETE FROM sales WHERE id = '${id}'`);
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
