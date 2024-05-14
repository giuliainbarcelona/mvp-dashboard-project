import React from "react";
import { format } from "date-fns";

function SalesTable({ salesRecord }) {
  return (
    <div>
      <h2>Sales Data Table</h2>
      <table className="grid-container">
        <thead>
          <tr>
            <th>Day</th>
            <th>Income</th>
            <th>Men</th>
            <th>Women</th>
            <th>Kids</th>
            <th>Clothing</th>
            <th>Sport</th>
            <th>Home</th>
            <th>Weather</th>
          </tr>
        </thead>
        <tbody>
          {salesRecord.map((sale) => (
            <tr key={sale.id}>
              <td className="grid-item">
                {format(new Date(sale.day), "dd/MM/yyyy")}
              </td>
              <td className="grid-item">{sale.income}</td>
              <td className="grid-item">{sale.men}</td>
              <td className="grid-item">{sale.women}</td>
              <td className="grid-item">{sale.kids}</td>
              <td className="grid-item">{sale.clothing}</td>
              <td className="grid-item">{sale.sport}</td>
              <td className="grid-item">{sale.home}</td>
              <td className="grid-item">{sale.weather}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SalesTable;
