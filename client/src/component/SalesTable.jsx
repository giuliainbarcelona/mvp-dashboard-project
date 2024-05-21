import React, { useState } from "react"; // Import React
import { format } from "date-fns"; // Import the format function from date-fns library
import Table from "@mui/material/Table"; // Import from matetial UI
import TableBody from "@mui/material/TableBody"; // Import from matetial UI
import TableCell from "@mui/material/TableCell"; // Import from matetial UI
import TableContainer from "@mui/material/TableContainer"; // Import from matetial UI
import TableHead from "@mui/material/TableHead"; // Import from matetial UI
import TableRow from "@mui/material/TableRow"; // Import from matetial UI
import Paper from "@mui/material/Paper"; // Import from matetial UI

// Defines a function called SalesTable which has the following props:
function SalesTable({ salesRecord, setSalesRecord, deleteInput, editInput }) {
  // Calculates total values for different categories from the sales records by using the reduce method.
  const totals = salesRecord.reduce(
    (acc, sale) => {
      acc.income += sale.income;
      acc.men += sale.men;
      acc.women += sale.women;
      acc.kids += sale.kids;
      acc.clothing += sale.clothing;
      acc.sport += sale.sport;
      acc.home += sale.home;

      return acc;
    },
    {
      income: 0,
      men: 0,
      women: 0,
      kids: 0,
      clothing: 0,
      sport: 0,
      home: 0,
    }
  );

  // Initialize state to track which cell is currently editable.
  const [editableCell, setEditableCell] = useState("");

  // This function updates a specific field of the sale record.
  // When the user finishes editing a cell and clicks outside or presses enter, this function is called to save the changes and exit edit mode.
  // The three params that this function takes are:
  // id = unique identifier of the record that it is beign edited
  // field = specific field being edited (ex: income, weather,..)
  // value = the new value you type
  const handleEdit = (id, field, value) => {
    editInput(id, field, value);
    setEditableCell("");
  };

  // The rendering magic starts.
  return (
    <div>
      <h2>Sales Data Table</h2>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Day 🗓️</TableCell>
              <TableCell>Income 💶</TableCell>
              <TableCell>Men 👨🏼</TableCell>
              <TableCell>Women 🙋🏼‍♀️</TableCell>
              <TableCell>Kids 👶🏻</TableCell>
              <TableCell>Clothing 👗</TableCell>
              <TableCell>Sport ⚽️</TableCell>
              <TableCell>Home 🏡</TableCell>
              <TableCell>Total Items 🟰</TableCell>
              <TableCell>Weather 🌤️</TableCell>
              <TableCell>Delete ❌</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* Checks if the salesrRecord exists and it is not empty */}
            {salesRecord &&
              salesRecord.length > 0 &&
              salesRecord.map((sale) => (
                <TableRow key={sale.id}>
                  <TableCell>
                    {format(new Date(sale.day), "dd/MM/yyyy")}
                  </TableCell>
                  <TableCell
                    // Makes the cell editable when clicked.
                    onClick={() => setEditableCell(`${sale.id}-income`)}
                  >
                    {/* Conditional: Checks if this cell is currently editable. */}
                    {editableCell === `${sale.id}-income` ? (
                      <input
                        type="number"
                        value={sale.income} // Sets the current value of the input to sale.income.
                        // Updates the income value in salesRecord when the input changes
                        onChange={(e) => {
                          const newValue = Number(e.target.value);
                          setSalesRecord((prev) =>
                            prev.map((item) =>
                              item.id === sale.id
                                ? { ...item, income: newValue }
                                : item
                            )
                          );
                        }}
                        // Calls handleEdit to save changes and exit edit mode when the input loses focus.
                        onBlur={() =>
                          handleEdit(sale.id, "income", sale.income)
                        }
                        autoFocus
                      />
                    ) : (
                      `€ ${sale.income}`
                    )}
                  </TableCell>
                  <TableCell onClick={() => setEditableCell(`${sale.id}-men`)}>
                    {editableCell === `${sale.id}-men` ? (
                      <input
                        type="number"
                        value={sale.men}
                        onChange={(e) => {
                          const newValue = Number(e.target.value);
                          setSalesRecord((prev) =>
                            prev.map((item) =>
                              item.id === sale.id
                                ? { ...item, men: newValue }
                                : item
                            )
                          );
                        }}
                        onBlur={() => handleEdit(sale.id, "men", sale.men)}
                        autoFocus
                      />
                    ) : (
                      `${sale.men}`
                    )}
                  </TableCell>
                  <TableCell
                    onClick={() => setEditableCell(`${sale.id}-women`)}
                  >
                    {editableCell === `${sale.id}-women` ? (
                      <input
                        type="number"
                        value={sale.women}
                        onChange={(e) => {
                          const newValue = Number(e.target.value);
                          setSalesRecord((prev) =>
                            prev.map((item) =>
                              item.id === sale.id
                                ? { ...item, women: newValue }
                                : item
                            )
                          );
                        }}
                        onBlur={() => handleEdit(sale.id, "women", sale.women)}
                        autoFocus
                      />
                    ) : (
                      `${sale.women}`
                    )}
                  </TableCell>
                  <TableCell onClick={() => setEditableCell(`${sale.id}-kids`)}>
                    {editableCell === `${sale.id}-kids` ? (
                      <input
                        type="number"
                        value={sale.kids}
                        onChange={(e) => {
                          const newValue = Number(e.target.value);
                          setSalesRecord((prev) =>
                            prev.map((item) =>
                              item.id === sale.id
                                ? { ...item, kids: newValue }
                                : item
                            )
                          );
                        }}
                        onBlur={() => handleEdit(sale.id, "kids", sale.kids)}
                        autoFocus
                      />
                    ) : (
                      `${sale.kids}`
                    )}
                  </TableCell>
                  <TableCell
                    onClick={() => setEditableCell(`${sale.id}-clothing`)}
                  >
                    {editableCell === `${sale.id}-clothing` ? (
                      <input
                        type="number"
                        value={sale.clothing}
                        onChange={(e) => {
                          const newValue = Number(e.target.value);
                          setSalesRecord((prev) =>
                            prev.map((item) =>
                              item.id === sale.id
                                ? { ...item, clothing: newValue }
                                : item
                            )
                          );
                        }}
                        onBlur={() =>
                          handleEdit(sale.id, "clothing", sale.clothing)
                        }
                        autoFocus
                      />
                    ) : (
                      `${sale.clothing}`
                    )}
                  </TableCell>
                  <TableCell
                    onClick={() => setEditableCell(`${sale.id}-sport`)}
                  >
                    {editableCell === `${sale.id}-sport` ? (
                      <input
                        type="number"
                        value={sale.sport}
                        onChange={(e) => {
                          const newValue = Number(e.target.value);
                          setSalesRecord((prev) =>
                            prev.map((item) =>
                              item.id === sale.id
                                ? { ...item, sport: newValue }
                                : item
                            )
                          );
                        }}
                        onBlur={() => handleEdit(sale.id, "sport", sale.sport)}
                        autoFocus
                      />
                    ) : (
                      `${sale.sport}`
                    )}
                  </TableCell>
                  <TableCell onClick={() => setEditableCell(`${sale.id}-home`)}>
                    {editableCell === `${sale.id}-home` ? (
                      <input
                        type="number"
                        value={sale.home}
                        onChange={(e) => {
                          const newValue = Number(e.target.value);
                          setSalesRecord((prev) =>
                            prev.map((item) =>
                              item.id === sale.id
                                ? { ...item, home: newValue }
                                : item
                            )
                          );
                        }}
                        onBlur={() => handleEdit(sale.id, "home", sale.home)}
                        autoFocus
                      />
                    ) : (
                      `${sale.home}`
                    )}
                  </TableCell>
                  <TableCell>
                    {/* Displays the total by summing */}
                    {sale.men +
                      sale.women +
                      sale.kids +
                      sale.clothing +
                      sale.sport +
                      sale.home}
                  </TableCell>
                  <TableCell
                    onClick={() => setEditableCell(`${sale.id}-weather`)}
                  >
                    {editableCell === `${sale.id}-weather` ? (
                      <input
                        type="text"
                        value={sale.weather}
                        onChange={(e) => {
                          const newValue = e.target.value;
                          setSalesRecord((prev) =>
                            prev.map((item) =>
                              item.id === sale.id
                                ? { ...item, weather: newValue }
                                : item
                            )
                          );
                        }}
                        onBlur={() =>
                          handleEdit(sale.id, "weather", sale.weather)
                        }
                        autoFocus
                      />
                    ) : (
                      `${sale.weather}`
                    )}
                  </TableCell>
                  <TableCell>
                    {/* When clicking on the button, calls deleteInput with the sale's id to remove the record. */}
                    <button onClick={() => deleteInput(sale.id)}>❌</button>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <br />

      {/* There is a second Table that renders the statistics */}
      {/* It takes the totals to return the data added up */}
      <TableContainer component={Paper}>
        <Table className="stats">
          <TableHead>
            <TableRow>
              <TableCell>
                <h3>Statistics</h3>
              </TableCell>
              <TableCell>Income 💶</TableCell>
              <TableCell>Men 👨🏼</TableCell>
              <TableCell>Women 🙋🏼‍♀️</TableCell>
              <TableCell>Kids 👶🏻</TableCell>
              <TableCell>Clothing 👗</TableCell>
              <TableCell>Sport ⚽️</TableCell>
              <TableCell>Home 🏡</TableCell>
              <TableCell>Total Items 🟰</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>€ {totals.income}</TableCell>
              <TableCell>{totals.men}</TableCell>
              <TableCell>{totals.women}</TableCell>
              <TableCell>{totals.kids}</TableCell>
              <TableCell>{totals.clothing}</TableCell>
              <TableCell>{totals.sport}</TableCell>
              <TableCell>{totals.home}</TableCell>
              <TableCell>
                {totals.men +
                  totals.women +
                  totals.kids +
                  totals.clothing +
                  totals.sport +
                  totals.home}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default SalesTable;
