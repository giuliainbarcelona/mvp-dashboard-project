import React, { useState, useEffect } from "react"; // Import React + useSate + useEffect (allows you to fetch data)
import "./App.css"; // Imports the CSS file
import SalesTable from "./component/SalesTable"; // Import the SalesTable component
import DateRangePickerComp from "./component/DateRangePickerComp"; // Import the DateRangePickerComp component
import SalesTablePDF from "./component/SalesTablePDF"; // Import the SalesTablePDF component
import { PDFDownloadLink } from "@react-pdf/renderer"; // Import PDFDownloadLink (allows user to download the PDF)
import "react-date-range/dist/styles.css"; // Import the data range picking functinality
import "react-date-range/dist/theme/default.css"; // Import the data range picking functinality's theme
import Grid from "@mui/material/Grid"; // Import Grid from MUI
import Button from "@mui/material/Button"; // Import Button from MUI
import DialogTitle from "@mui/material/DialogTitle"; // Import DialogTitle from MUI
import Dialog from "@mui/material/Dialog"; // Import Dialog from MUI
import DialogActions from "@mui/material/DialogActions"; // Import DialoActions from MUI
import DialogContent from "@mui/material/DialogContent"; // Import DialogContent from MUI

function App() {
  // Define the 'input' state variable with initial values as empty for different fields.
  // 'setInput' is the function used to to update the 'input' varibale.
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
  // Initialize 'salesRecord' as an empty string.
  // The values of 'salesRecord' will be fetched.
  const [salesRecord, setSalesRecord] = useState([]);
  // State variable to hold error message, initialized as empty.
  const [errorMessage, setErrorMessage] = useState("");
  // Initializes a state variable openDialog as false to control the visibility of a dialog (popup) component.
  const [openDialog, setOpenDialog] = useState(false);

  // useEffect is used to perform "side effects".
  // The function getExistingInputs will run only when the components mount.
  // The empty array as a second argument ensures that the function only runs once.
  useEffect(() => {
    getExistingInputs();
  }, []);

  // Define the function to fetch existing inputs from the backend.
  function getExistingInputs() {
    // Fetch data from the '/api' endpoint. CHECK: Where is it defined?
    fetch("/api")
      .then((response) => response.json())
      .then((salesRecord) => {
        // Update the 'salesRecord' state variable with the fetched data.
        setSalesRecord(salesRecord);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // Updates the 'input' state when a user types in a form field.
  // It takes the name and the value of the event (a.k.a from what the user types),
  // and updates the corrisponding fields in the 'input' state.
  function handleInputChange(event) {
    const { name, value } = event.target;
    setInput((state) => ({ ...state, [name]: value }));
  }

  // Calls 'addInput' to save the data that are submitted.
  // Closes the dialog (popup with the form field)
  function handleSubmit(event) {
    event.preventDefault();
    addInputs();
    setOpenDialog(false);
  }

  // Really important function!
  // Sends the input data to the backend to update the database.
  // Also resets the input fields with 'setInput'.
  // All input fields must the full in order to submit the form, otherwise: you will get an error.
  // CHECK: WHAT IS INPUT WHAT IS SALESRECORD?
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
        // console.log("I am your input " + input.day + " " + input.income);
        // The input is only the new record you just added
        // console.log(salesRecord);
        // console.log(salesRecord); = Give you back the array of objects with ALL the salesRecords.
        // Exisiting ones and the new one you just added.
      })
      .catch((error) => {
        setErrorMessage("Please fill out all inputs.");
        console.error(error);
      });
  }

  // Deletes are salesRecord by its ID.
  // And updates the state of the remaining salesRecord.
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

  // Edits the salesRecord by its ID.
  // Sends a PUT request to the backend, and updates the state with the modified state.
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
  }

  // The rendering magic starts.
  // I start with a conditional render.
  // If it is true, it will render the <p> with the message "Please..."
  // If it is false, it will render the table/Grid
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
            <h1>
              📊 👩🏻‍💻
              <br />
              Dashboard Data Management System
            </h1>
            {/* This is the dialog (popup) where the 'input' is typed */}
            {/* Toggles the visibility of the dialog */}
            <Dialog onClose={() => setOpenDialog(false)} open={openDialog}>
              <DialogTitle>Add you data here: </DialogTitle>
              {/* It handles the form submssion by calling handleSubmit and adds the data to the DB. */}
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
            <Grid
              container
              spacing={2}
              justifyContent="center"
              alignItems="center"
            >
              <div className="adddata-btn">
                <Button
                  // Toggles the visibility of the dialog
                  onClick={() => {
                    setOpenDialog(!openDialog);
                  }}
                  type="button"
                  variant="contained"
                >
                  Add Data
                </Button>
              </div>
              {/* Manages the download of the sales table as a PDF using the PDFDownloadLink component. */}
              <PDFDownloadLink
                document={<SalesTablePDF salesRecord={salesRecord} />}
                fileName="YourTable.pdf"
              >
                {({ loading, error }) =>
                  loading ? (
                    <button>Loading Table</button>
                  ) : (
                    <div className="download-btn">
                      <Button type="button" variant="contained">
                        Download
                      </Button>
                    </div>
                  )
                }
              </PDFDownloadLink>
              {/* Updates the sales record based on the selected date range using
              the DateRangePickerComp component. */}
              <DateRangePickerComp setSalesRecord={setSalesRecord} />
            </Grid>
            <Grid item xs={12} md={12}>
              {/* Passes down the necessary function to the SalesTable componet */}
              <SalesTable
                setSalesRecord={setSalesRecord}
                salesRecord={salesRecord}
                deleteInput={deleteInput}
                editInput={editInput}
              />
            </Grid>
          </Grid>
        </Grid>
      )}
    </div>
  );
}

export default App;
