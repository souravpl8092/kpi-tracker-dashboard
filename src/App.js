import React, { useState, useEffect } from "react";
import Select from "react-select";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";
import Charts from "./components/Charts";
import DataTable from "./components/DataTable";
import { GoDownload } from "react-icons/go";
import {
  mockData,
  applications,
  lines,
  reasons,
  dateRanges,
} from "./utils/mockData"; // ✅ Import from util

const App = () => {
  const [filters, setFilters] = useState({
    application: null,
    line: null,
    reason: null,
  });

  const [filteredData, setFilteredData] = useState(mockData);
  const [dateRange, setDateRange] = useState(null);

  useEffect(() => {
    localStorage.setItem("dashboardFilters", JSON.stringify(filters));
  }, [filters]);

  useEffect(() => {
    let startDate = new Date();
    if (dateRange) {
      startDate.setDate(startDate.getDate() - dateRange.value);
    }

    const newFilteredData = mockData.filter(
      (row) =>
        (!filters.application ||
          row.application === filters.application.value) &&
        (!filters.line || row.line === filters.line.value) &&
        (!filters.reason || row.reason === filters.reason.value) &&
        (!dateRange || new Date(row.date) >= startDate)
    );
    setFilteredData(newFilteredData);
  }, [filters, dateRange]);

  // Prepare Bar Chart Data
  const barChartData = filteredData.reduce((acc, item) => {
    const existing = acc.find((d) => d.name === item.product);
    if (existing) {
      existing.passed += Math.floor(item.quantity * 0.8);
      existing.rejected += Math.floor(item.quantity * 0.2);
    } else {
      acc.push({
        name: item.product,
        passed: Math.floor(item.quantity * 0.8),
        rejected: Math.floor(item.quantity * 0.2),
      });
    }
    return acc;
  }, []);

  // Prepare Pie Chart Data
  const rejectionReasons = filteredData.reduce((acc, item) => {
    const existing = acc.find((d) => d.name === item.reason);
    if (existing) {
      existing.value += item.quantity;
    } else {
      acc.push({ name: item.reason, value: item.quantity });
    }
    return acc;
  }, []);

  return (
    <div className="container">
      <Sidebar />
      <div className="main-content">
        <Navbar />

        <div className="filters">
          <Select
            options={applications}
            placeholder="Application"
            onChange={(selected) =>
              setFilters({ ...filters, application: selected })
            }
          />
          <Select
            options={lines}
            placeholder="Line Number"
            onChange={(selected) => setFilters({ ...filters, line: selected })}
          />
          <Select
            options={reasons}
            placeholder="Rejection Reason"
            onChange={(selected) =>
              setFilters({ ...filters, reason: selected })
            }
          />
          <Select
            options={dateRanges}
            placeholder="Select Date Range"
            onChange={(selected) => setDateRange(selected)}
          />

          <button className="download-btn">
            <GoDownload className="icon" /> Download Data
          </button>
        </div>

        {/* ✅ Pass `cardData` to Cards */}
        <Cards filteredData={filteredData} />

        {/* ✅ Pass `filteredData` to Charts and DataTable */}
        <Charts
          barChartData={barChartData}
          rejectionReasons={rejectionReasons}
        />
        <DataTable filteredData={filteredData} />
      </div>
    </div>
  );
};

export default App;
