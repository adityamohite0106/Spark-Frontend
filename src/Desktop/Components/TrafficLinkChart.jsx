import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
} from "chart.js";
import "../Pages/TrafficeLink.css"; // ✅ Import CSS

ChartJS.register(BarElement, Tooltip, Legend, CategoryScale, LinearScale);

const TrafficLinkChart = () => {
  const data = {
    labels: ["Link 1", "Link 2", "Link 3", "Link 4", "Link 5", "Link 6"],
    datasets: [
      {
        label: "Traffic by Links",
        data: [2, 1, 0, 0, 0, 0],
        backgroundColor: ["#91f5c2", "#A4E5AF", "#004d25", "#4FF379", "#A0C8A2", "#1D9240"],
        hoverBackgroundColor: ["#91f5c2", "#A4E5AF", "#003d1a", "#3ED66A", "#90B49B", "#1B7D36"],
        borderRadius: 10,
        borderWidth: 2,
        borderColor: "#fff",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: true },
    },
    scales: {
      x: {
        grid: { display: false, drawBorder: false },
        ticks: { color: "#333" },
      },
      y: {
        grid: { display: false, drawBorder: false },
        ticks: {
          stepSize: 1000,
          min: 0,
          max: 3500,
          color: "#333",
          callback: (value) => value / 1000 + "K",
        },
      },
    },
  };

  return (
    <div className="traffic-chart-card">
      <h3 className="traffic-chart-title">Traffic by Links</h3>
      <div className="traffic-chart-container">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default TrafficLinkChart;
