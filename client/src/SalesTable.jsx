import * as React from "react";
import { format } from "date-fns"; // Import the format function
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function SalesTable({ salesRecord }) {
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
              <TableCell>Weather 🌤️</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {salesRecord.map((sale) => (
              <TableRow key={sale.id}>
                <TableCell>
                  {format(new Date(sale.day), "dd/MM/yyyy")}
                </TableCell>
                <TableCell>€ {sale.income}</TableCell>
                <TableCell>{sale.men}</TableCell>
                <TableCell>{sale.women}</TableCell>
                <TableCell>{sale.kids}</TableCell>
                <TableCell>{sale.clothing}</TableCell>
                <TableCell>{sale.sport}</TableCell>
                <TableCell>{sale.home}</TableCell>
                <TableCell>{sale.weather}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default SalesTable;
