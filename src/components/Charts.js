import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
} from "recharts";

const Charts = ({ barChartData, rejectionReasons }) => {
  return (
    <div className="charts">
      <div className="chart-container">
        <h4>Split of Units Processed Today</h4>
        <ResponsiveContainer width="100%" height={280}>
          <BarChart data={barChartData} barSize={40}>
            <XAxis dataKey="name" tick={{ fontSize: 12, fill: "#555" }} />
            <YAxis tick={{ fontSize: 12, fill: "#555" }} />
            <Tooltip />
            <Legend align="right" verticalAlign="top" iconSize={10} />
            <Bar dataKey="passed" fill="#1E40AF" />
            <Bar dataKey="rejected" fill="#34D399" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="chart-container">
        <h4>Reasons For Rejection</h4>
        <ResponsiveContainer width="100%" height={280}>
          <PieChart>
            <Legend align="right" verticalAlign="top" iconSize={10} />
            <Pie
              data={rejectionReasons}
              dataKey="value"
              cx="50%"
              cy="50%"
              outerRadius={80}
              label={({ percent }) => `${(percent * 100).toFixed(1)}%`}
            >
              {rejectionReasons.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={["#1E40AF", "#34D399", "#FB923C", "#FACC15"][index % 4]}
                />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Charts;
