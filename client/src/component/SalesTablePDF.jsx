import React from "react";
import { Page, Text, Document, StyleSheet, View } from "@react-pdf/renderer";
import { format } from "date-fns"; // formatting the date into european date <3

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  text: {
    margin: 12,
    fontSize: 14,
    textAlign: "justify",
    fontFamily: "Times-Roman",
  },
  header: {
    marginBottom: 20,
    fontSize: 12,
    textAlign: "center",
    color: "grey",
  },
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
  },
});

const SalesTablePDF = ({ salesRecord = [] }) => {
  console.log("salesRecord:", salesRecord);

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
    <Document>
      <Page size="A4" style={styles.body}>
        <Text style={styles.header} fixed>
          Sales Data Table
        </Text>
        {salesRecord.map((sale) => (
          <Text key={sale.id} style={styles.text}>
            Date: {format(new Date(sale.day), "dd/MM/yyyy")}, Income:{" "}
            {sale.income}, Men: {sale.men}, Women: {sale.women}, Kids:{" "}
            {sale.kids}, Clothing: {sale.clothing}, Sport: {sale.sport}, Home:{" "}
            {sale.home}
          </Text>
        ))}
        <Text
          style={styles.pageNumber}
          render={({ pageNumber, totalPages }) =>
            `${pageNumber} / ${totalPages}`
          }
          fixed
        />
        <Text
          style={styles.pageNumber}
          render={({ pageNumber, totalPages }) =>
            `${pageNumber} / ${totalPages}`
          }
          fixed
        />
        <Text style={styles.header}>Statistics</Text>
        <Text style={styles.text}>
          Total Income for the given date range: €{totals.income}, Total Men:{" "}
          {totals.men}, Total Women: {totals.women}, Total Kids: {totals.kids},
          Total Clothing: {totals.clothing}, Total Sport: {totals.sport}, Total
          Home: {totals.home}
        </Text>
      </Page>
    </Document>
  );
};

export default SalesTablePDF;
