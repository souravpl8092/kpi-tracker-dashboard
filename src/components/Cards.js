import React from "react";
import { GrDocumentText } from "react-icons/gr";
import { TiTick } from "react-icons/ti";
import "../App.css";

const Cards = ({ filteredData }) => {
  return (
    <div className="cards">
      <div className="card">
        <div className="icon-container">
          <GrDocumentText style={{ fontSize: "18px" }} />
        </div>
        <h5>Units Processed</h5>
        <p>{filteredData.length * 10}</p>
      </div>
      <div className="card">
        <div className="icon-container">
          <TiTick style={{ fontSize: "18px" }} />
        </div>
        <h5>Units Passed</h5>
        <p>{filteredData.length * 8}</p>
      </div>
      <div className="card">
        <div className="icon-container">
          <GrDocumentText style={{ fontSize: "18px" }} />
        </div>
        <h5>Units Rejected</h5>
        <p>{filteredData.length * 2}</p>
      </div>
      <div className="card">
        <div className="icon-container">
          <GrDocumentText style={{ fontSize: "18px" }} />
        </div>
        <h5>Throughput (Units/Minute)</h5>
        <p>{(filteredData.length * 10) / 5} </p>
      </div>
    </div>
  );
};

export default Cards;
