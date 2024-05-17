import React from "react";
import {
  Page,
  Text,
  Image,
  View,
  Document,
  StyleSheet,
} from "@react-pdf/renderer";

// Create styles
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
  return (
    <Document>
      <Page size="A4" style={styles.body}>
        <Text style={styles.header} fixed>
          Sales Data Table
        </Text>
        {salesRecord.map((sale) => (
          <Text key={sale.id} style={styles.text}>
            Date: {sale.day}, Income: {sale.income}, Men: {sale.men}, Women:{" "}
            {sale.women}, Kids: {sale.kids}, Clothing: {sale.clothing}, Sport:{" "}
            {sale.sport}, Home: {sale.home}
          </Text>
        ))}
        <Text
          style={styles.pageNumber}
          render={({ pageNumber, totalPages }) =>
            `${pageNumber} / ${totalPages}`
          }
          fixed
        />
      </Page>
    </Document>
  );
};

export default SalesTablePDF;
