import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../Pages/Counter.css"; 
import { FaCalendarAlt } from "react-icons/fa";

const Counter = ({ clicksOnLinks, clicksOnShop }) => {
  // State for date range selection
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  // State to toggle DatePicker visibility
  const [showDatePicker, setShowDatePicker] = useState(false);

  return (
    <div className="counter-container">
      <h2 className="overview-title">Overview</h2>
      
      {/* Date Picker Section */}
      <div className="date-picker">
        <FaCalendarAlt
          className="calendar-icon"
          onClick={() => setShowDatePicker(!showDatePicker)}
          style={{ cursor: "pointer" }}
      
        />
        
        {/* Show DatePicker only when state is true */}
        {showDatePicker && (
          <DatePicker
            selected={startDate}
            onChange={(dates) => {
              const [start, end] = dates;
              setStartDate(start);
              setEndDate(end);
            }}
            startDate={startDate}
            endDate={endDate}
            selectsRange
          />
        )}      <b>Date</b>
      </div>

      <div className="stats-container">
        <div className="stat-card green-card">
          <p className="stat-title">Clicks on Links</p>
          <h2 className="stat-number">{clicksOnLinks}</h2>
        </div>
        <div className="stat-card light-green-card">
          <p className="stat-title">Click on Shop</p>
          <h2 className="stat-number">{clicksOnShop}</h2>
        </div>
        <div className="stat-card light-green-card">
          <p className="stat-title">CTA</p>
          <h2 className="stat-number">{clicksOnLinks + clicksOnShop /2 }</h2>
        </div>
      </div>
    </div>
  );
};

export default Counter;
