import React, { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import SalesTable from "./SalesTable";

// Here I am initializing the state, creating an object that represents
// the types of sales data that we want to keep track of.
function App() {
  const [existingRecords, setExistingRecords] = useState([]);
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

  useEffect(() => {
    getExistingInputs();
  }, []);

  function getExistingInputs() {
    fetch("/api")
      .then((response) => response.json())
      .then((existingRecords) => {
        setExistingRecords(existingRecords);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setInput((state) => ({ ...state, [name]: value }));
  }

  // When we submit the form
  // This function gets called
  // I am preventing the page reload
  // Then I am calling addInputs that sends the data to the backend
  function handleSubmit(event) {
    event.preventDefault();
    addInputs();
  }

  //This function fetches the POST method from the backend
  function addInputs() {
    fetch("/api/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(input),
    })
      .then((response) => response.json())
      .then((newSalesRecord) => {
        setSalesRecord(newSalesRecord);
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
      })
      .catch((error) => {
        console.error(error);
      });
  }
  return (
    <>
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
        <button type="submit">Submit Data</button>
      </form>
      <br />
      <SalesTable salesRecord={salesRecord} />
      <button type="button">Dashboard</button>
    </>
  );
}

export default App;
