import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import "../Pages/DonutPieChart.css"; // ✅ Import CSS

ChartJS.register(ArcElement, Tooltip, Legend);

const DonutPieChart = ({ iconCounts }) => {
  const labels = ["YouTube", "Facebook", "Instagram", "X"];
  const dataValues = labels.map((label) => iconCounts[label] || 0); // ✅ Fetch counts

  const data = {
    labels,
    datasets: [
      {
        data: dataValues,
        backgroundColor: ["#004d25", "#67ff01", "#c4fa9c", "#008080"],
        hoverBackgroundColor: ["#003d1a", "#57df00", "#b4e890", "#007070"],
        borderWidth: 3,
        borderColor: "#ffffff",
      },
    ],
  };

  const options = {
    cutout: "65%",
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: true },
    },
  };

  return (
    <div className="donut-chart-container">
      <h3 className="donut-chart-title">Sites</h3>

      <div className="donut-chart-wrapper">
        <div className="donut-chart">
          <Doughnut data={data} options={options} />
        </div>

        <div className="donut-labels">
          {labels.map((label, index) => (
            <div key={index} className="donut-label-item">
              <span
                className="donut-color-box"
                style={{ backgroundColor: data.datasets[0].backgroundColor[index] }}
              ></span>
              <span style={{ flex: 1, marginLeft: "8px", fontSize: "12px" }}>{label}</span>
              <span style={{ fontWeight: "bold", fontSize: "12px", color: "#333" }}>
                {data.datasets[0].data[index]}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DonutPieChart;
