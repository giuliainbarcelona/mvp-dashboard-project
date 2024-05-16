import React, { useState, useEffect } from "react";
import "./App.css";
import SalesTable from "./component/SalesTable";
import "react-date-range/dist/styles.css"; // Styling the date picker
import "react-date-range/dist/theme/default.css"; // Styling the date picker
import Grid from "@mui/material/Grid"; // Taking the grid from a li
import Button from "@mui/material/Button";
import DateRangePickerComp from "./component/DateRangePickerComp";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
// import Dialog from "./component/Dialog";

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
  const [updatedSalesRecord, setUpdatedSalesRecord] = useState([]);
  const [errorMessage, setErrorMessage] = useState(""); // State variable to hold error message
  const [openDialog, setOpenDialog] = useState(false);

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
    setOpenDialog(false);
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
        console.log("I am your input " + input.day + " " + input.income);
        // The input is only the new record you just added
        console.log(salesRecord);
        // console.log(salesRecord); = Give you back the array of objects with ALL the salesRecords.
        // Exisiting ones and the new one you just added.
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
      body: JSON.stringify(salesRecord.find((record) => record.id === id)),
    })
      .then((response) => response.json())
      .then((salesRecord) => {
        setSalesRecord(salesRecord);
      })
      .catch((error) => {
        console.log(error);
      });
  } // must be finished

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
            <h1>Dashboard Data Management System</h1>
            <Dialog onClose={() => setOpenDialog(false)} open={openDialog}>
              <DialogTitle>Add you data here: </DialogTitle>
              <form onSubmit={(e) => handleSubmit(e)}>
                <DialogContent>
                  <Grid container spacing={1}>
                    <Grid item xs={4}>
                      <input
                        type="date"
                        name="day"
                        placeholder="Day"
                        value={input.day}
                        onChange={handleInputChange}
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <input
                        type="number"
                        name="income"
                        placeholder="Income"
                        value={input.income}
                        onChange={handleInputChange}
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <input
                        type="number"
                        name="men"
                        placeholder="Men"
                        value={input.men}
                        onChange={handleInputChange}
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <input
                        type="number"
                        name="women"
                        placeholder="Women"
                        value={input.women}
                        onChange={handleInputChange}
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <input
                        type="number"
                        name="kids"
                        placeholder="Kids"
                        value={input.kids}
                        onChange={handleInputChange}
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <input
                        type="number"
                        name="clothing"
                        placeholder="Clothing"
                        value={input.clothing}
                        onChange={handleInputChange}
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <input
                        type="number"
                        name="sport"
                        placeholder="Sport"
                        value={input.sport}
                        onChange={handleInputChange}
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <input
                        type="number"
                        name="home"
                        placeholder="Home"
                        value={input.home}
                        onChange={handleInputChange}
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <input
                        type="text"
                        name="weather"
                        placeholder="Weather"
                        value={input.weather}
                        onChange={handleInputChange}
                      />
                    </Grid>
                  </Grid>
                </DialogContent>
                <DialogActions>
                  <Button type="submit" variant="contained">
                    Submit Data
                  </Button>
                </DialogActions>
              </form>
            </Dialog>
            <br />
            <DateRangePickerComp setSalesRecord={setSalesRecord} />
          </Grid>
          {/* <Dialog
            open={openDialog}
            handleCloseDialog={() => {
              setOpenDialog(false);
            }}
          /> */}
          <Button
            onClick={() => {
              setOpenDialog(!openDialog);
            }}
            type="button"
            variant="outlined"
          >
            Add Data
          </Button>
          <Grid item xs={12} md={12}>
            <SalesTable
              salesRecord={salesRecord}
              deleteInput={deleteInput}
              editInput={editInput}
            />
          </Grid>
        </Grid>
      )}
    </div>
  );
}

export default App;
