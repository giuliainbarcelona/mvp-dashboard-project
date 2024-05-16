import * as React from "react";
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
              <TableCell>Save ✅</TableCell>
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
                  <TableCell contentEditable>€ {sale.income}</TableCell>
                  <TableCell contentEditable>{sale.men}</TableCell>
                  <TableCell contentEditable>{sale.women}</TableCell>
                  <TableCell contentEditable>{sale.kids}</TableCell>
                  <TableCell contentEditable>{sale.clothing}</TableCell>
                  <TableCell contentEditable>{sale.sport}</TableCell>
                  <TableCell contentEditable>{sale.home}</TableCell>
                  <TableCell>
                    {sale.men +
                      sale.women +
                      sale.kids +
                      sale.clothing +
                      sale.sport +
                      sale.home}
                  </TableCell>
                  <TableCell contentEditable>{sale.weather}</TableCell>
                  <TableCell>
                    <button onClick={() => deleteInput(sale.id)}>❌</button>
                  </TableCell>
                  <TableCell>
                    <button onClick={() => editInput(sale.id)}>✅</button>
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
