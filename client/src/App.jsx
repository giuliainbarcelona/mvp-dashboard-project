import React, { useState, useEffect } from "react";
import "./App.css";
import SalesTable from "./SalesTable";
import "react-date-range/dist/styles.css"; // Styling the date picker
import "react-date-range/dist/theme/default.css"; // Styling the date picker
import Grid from "@mui/material/Grid"; // Taking the grid from a li
import Button from "@mui/material/Button";
import DateRangePickerComp from "./component/DateRangePickerComp";

function App() {
  const [input, setInput] = useState({
    day: "",
    income: "",
    men: "",
    women: "",
    kids: "",
    clothing: "",
    sport: "",
    home: "",
    weather: "",
  });
  const [salesRecord, setSalesRecord] = useState([]);
  const [errorMessage, setErrorMessage] = useState(""); // State variable to hold error message

  useEffect(() => {
    getExistingInputs();
  }, []);

  function getExistingInputs() {
    fetch("/api")
      .then((response) => response.json())
      .then((salesRecord) => {
        setSalesRecord(salesRecord);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setInput((state) => ({ ...state, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    addInputs();
  }

  function addInputs() {
    fetch("/api/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(input),
    })
      .then((response) => response.json())
      .then((salesRecord) => {
        setSalesRecord(salesRecord);
        setInput({
          day: "",
          income: "",
          men: "",
          women: "",
          kids: "",
          clothing: "",
          sport: "",
          home: "",
          weather: "",
        });
        setErrorMessage("");
        console.log(salesRecord);
        // console.log(newSalesRecord);
      })
      .catch((error) => {
        setErrorMessage("Please fill out all inputs.");
        console.error(error);
      });
  }

  function deleteInput(id) {
    fetch(`/api/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((salesRecord) => {
        setSalesRecord(salesRecord);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function editInput(id) {
    fetch(`/api/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(input),
    })
      .then((response) => response.json())
      .then((salesRecord) => {
        setSalesRecord(salesRecord);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div>
      {salesRecord.message === "Please fill out all inputs." ? (
        <p className="fill">Please fill out all inputs.</p>
      ) : (
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Grid item xs={12} md={12}>
            <h1>Dashboard Data Management System - Sales</h1>
            <form onSubmit={(e) => handleSubmit(e)}>
              <label>
                <input
                  type="date"
                  name="day"
                  placeholder="Day"
                  value={input.day}
                  onChange={handleInputChange}
                ></input>
                <input
                  type="number"
                  name="income"
                  placeholder="Income"
                  value={input.income}
                  onChange={handleInputChange}
                ></input>
                <input
                  type="number"
                  name="men"
                  placeholder="Men"
                  value={input.men}
                  onChange={handleInputChange}
                ></input>
                <input
                  type="number"
                  name="women"
                  placeholder="Women"
                  value={input.women}
                  onChange={handleInputChange}
                ></input>
                <br />
                <input
                  type="number"
                  name="kids"
                  placeholder="Kids"
                  value={input.kids}
                  onChange={handleInputChange}
                ></input>
                <input
                  type="number"
                  name="clothing"
                  placeholder="Clothing"
                  value={input.clothing}
                  onChange={handleInputChange}
                ></input>
                <input
                  type="number"
                  name="sport"
                  placeholder="Sport"
                  value={input.sport}
                  onChange={handleInputChange}
                ></input>
                <input
                  type="number"
                  name="home"
                  placeholder="Home"
                  value={input.home}
                  onChange={handleInputChange}
                ></input>
                <input
                  type="text"
                  name="weather"
                  placeholder="Weather"
                  value={input.weather}
                  onChange={handleInputChange}
                ></input>
              </label>
              <br />
              <br />
              <Button type="submit" variant="contained">
                Submit Data
              </Button>
            </form>
            <br />
            <DateRangePickerComp setSalesRecord={setSalesRecord} />
          </Grid>
          <Grid item xs={12} md={12}>
            <SalesTable
              salesRecord={salesRecord}
              deleteInput={deleteInput}
              editInput={editInput}
            />
          </Grid>
          <Grid item xs={12} md={12}>
            <Button type="button" variant="outlined">
              Dashboard
            </Button>
          </Grid>
        </Grid>
      )}
    </div>
  );
}

export default App;
