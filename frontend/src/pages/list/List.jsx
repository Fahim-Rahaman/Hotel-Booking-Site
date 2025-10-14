import React from 'react'
import './List.css'
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'

const List = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [checkInDate, setCheckInDate] = useState(location.state.checkInDate);
  const [checkOutDate, setCheckOutDate] = useState(location.state.checkOutDate);
  const [options, setOptions] = useState(location.state.options);

  const [openCheckIn, setOpenCheckIn] = useState(false);
  const [openCheckOut, setOpenCheckOut] = useState(false);
  console.log(location);
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="listTitle">Search</h1>
            <div className="lsItem">
              <label>Destination</label>
              <input placeholder={destination} type="text" />
            </div>
            <div className="lsItem">
              <label>Check-in date</label>
              <span onClick={() => setOpenCheckIn((prev) => !prev)} style={{ cursor: "pointer" }}>
                {checkInDate
                  ? format(new Date(checkInDate), "MM/dd/yyyy")
                  : "Select check-in date"}
              </span>

              {openCheckIn && (
                <DatePicker
                  selected={checkInDate}
                  onChange={(date) => {
                    setCheckInDate(date);
                    setOpenCheckIn(false); // close after selection
                  }}
                  selectsStart
                  startDate={checkInDate}
                  endDate={checkOutDate}
                  placeholderText="Select check-in date"
                  inline
                />
              )}
            </div>
            <div className="lsItem">
              <label>Check-out date</label>
              <span onClick={() => setOpenCheckOut((prev) => !prev)} style={{ cursor: "pointer" }}>
                {checkOutDate
                  ? format(new Date(checkOutDate), "MM/dd/yyyy")
                  : "Select check-out date"}
              </span>

              {openCheckOut && (
                <DatePicker
                  selected={checkOutDate}
                  onChange={(date) => {
                    setCheckOutDate(date);
                    setOpenCheckOut(false); // close after selection
                  }}
                  selectsEnd
                  startDate={checkInDate}
                  endDate={checkOutDate}
                  minDate={checkInDate}
                  placeholderText="Select check-out date"
                  inline
                />
              )}
            </div>
          </div>
          <div className="listResult"></div>
        </div>
      </div>
    </div>
  )
}

export default List
