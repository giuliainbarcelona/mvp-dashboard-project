const db = require("../model/helper");

function allInputsMustExist(req, res, next) {
  const { day, income, men, women, kids, clothing, sport, home, weather } =
    req.body;

  if (
    day === "" ||
    income === "" ||
    men === "" ||
    women === "" ||
    kids === "" ||
    clothing === "" ||
    sport === "" ||
    home === "" ||
    weather === ""
  ) {
    res.status(422).send({ message: "Please fill out all inputs." });
  } else {
    next();
  }
}

module.exports = allInputsMustExist;
