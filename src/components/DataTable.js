import React from "react";
import "../App.css";

const filteredDataTable = ({ filteredData }) => (
  <div className="table-container">
    <table className="styled-table">
      <thead>
        <tr>
          <th>Application</th>
          <th>Line Number</th>
          <th>Product</th>
          <th>Reason For Rejection</th>
          <th>Quantity</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {filteredData.length > 0 ? (
          filteredData.map((row, index) => (
            <tr key={index}>
              <td>{row.application}</td>
              <td>{row.line}</td>
              <td>{row.product}</td>
              <td>{row.reason}</td>
              <td>{row.quantity}</td>
              <td>{row.date}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="6">No filteredData Found</td>
          </tr>
        )}
      </tbody>
    </table>
  </div>
);

export default filteredDataTable;
