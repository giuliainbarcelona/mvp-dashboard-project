import React, { useState } from "react";
import { format } from "date-fns"; // Import the format function
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function SalesTable({ salesRecord, setSalesRecord, deleteInput, editInput }) {
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

  const [editableCell, setEditableCell] = useState(null);

  const handleEdit = (id, field, value) => {
    editInput(id, field, value);
    setEditableCell(null);
  };

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
            {salesRecord &&
              salesRecord.length > 0 &&
              salesRecord.map((sale) => (
                <TableRow key={sale.id}>
                  <TableCell>
                    {format(new Date(sale.day), "dd/MM/yyyy")}
                  </TableCell>
                  <TableCell
                    onClick={() => setEditableCell(`${sale.id}-income`)}
                  >
                    {editableCell === `${sale.id}-income` ? (
                      <input
                        type="number"
                        value={sale.income}
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
                    {sale.men +
                      sale.women +
                      sale.kids +
                      sale.clothing +
                      sale.sport +
                      sale.home}
                  </TableCell>
                  <TableCell>
                    <td>{sale.weather}</td>
                  </TableCell>
                  <TableCell>
                    <button onClick={() => deleteInput(sale.id)}>❌</button>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <br />

      <TableContainer component={Paper}>
        <Table className="stats">
          <TableHead>
            <TableRow>
              <TableCell>
                <h3>Statistiche</h3>
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
