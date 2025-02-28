import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const TrafficChart = () => {
  const data = {
    labels: ["Linux", "Mac", "iOS", "Windows", "Android", "Other"],
    datasets: [
      {
        data: [0, 1, 0, 10, 3, 0], // Traffic values
        backgroundColor: ["#98F9C3", "#A8E6CF", "#155E3C", "#5EF49C", "#99C7A4", "#1FA866"],
        borderRadius: 10, // Rounded bars
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false }, // No legend required
      tooltip: { enabled: true }, // Show tooltips
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: { color: "#333", font: { size: 14 } }, // Darker text for better readability
      },
      y: {
        grid: { display: false },
        ticks: {
          stepSize: 1000,
          min: 0,
          max: 3500,
          color: "#333",
          font: { size: 14 },
          callback: (value) => value / 1000 + "K", // 1000 → 1K format
        },
      },
    },
  };

  return (
    <div style={styles.container} className="traffic-chart-mobile">
      <h3 style={styles.title}>Traffic by Device</h3>
      <Bar data={data} options={options} />
    </div>
  );
};

// Styling
const styles = {
  container: {
    width: "500px",
    height: "350px",
    padding: "20px",
    borderRadius: "15px",
    background: "#f5f5f5",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
  },
  title: {
    marginBottom: "15px",
    fontSize: "18px",
    fontWeight: "bold",
    color: "#111",
  },
};

export default TrafficChart;
