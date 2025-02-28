import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart, Filler } from "chart.js";
import "../Pages/LineChart.css"; // ✅ Import CSS

Chart.register(Filler);

import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

const LineChart = () => {
  // ✅ Load visitor data from localStorage or set default values
  const [visitorData, setVisitorData] = useState(() => {
    const storedData = JSON.parse(localStorage.getItem("visitorData"));
    return storedData || [0, 0, 0, 0, 0, 0, 0]; // Default if no data
  });

  useEffect(() => {
    // ✅ Increment visitor count for today's day index
    const today = new Date().getDay(); // Get day index (0 = Sunday, 6 = Saturday)
    
    setVisitorData((prevData) => {
      const updatedData = [...prevData];
      updatedData[today] += 1; // Increment today's visitor count

      // ✅ Save updated visitor data in localStorage
      localStorage.setItem("visitorData", JSON.stringify(updatedData));

      return updatedData;
    });

    // ✅ Auto-refresh visitor data every 5 seconds
    const interval = setInterval(() => {
      const storedData = JSON.parse(localStorage.getItem("visitorData")) || [0, 0, 0, 0, 0, 0, 0];
      setVisitorData(storedData);
    }, 5000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  const data = {
    labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], // X-axis days
    datasets: [
      {
        label: "Visitors",
        data: visitorData, // ✅ Live visitor data from localStorage
        borderColor: "#222",
        borderWidth: 2,
        pointBackgroundColor: "#222",
        pointRadius: 0,
        tension: 0.4,
        fill: {
          target: "origin",
          above: "rgba(0, 128, 0, 0.05)",
        },
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: { display: false },
        ticks: { color: "#666" },
      },
      y: {
        grid: { display: false },
        ticks: {
          stepSize: 1,
          min: 0,
          color: "#666",
        },
      },
    },
    plugins: {
      legend: { display: false },
      tooltip: { enabled: true },
    },
  };

  return (
    <div className="line-chart-container">
      <h3 className="line-chart-title">Visitors Over Time</h3>
      <div className="line-chart-wrapper">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default LineChart;
