import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faTaxi, faPlane, faCar, faCalendarDays, faPerson } from '@fortawesome/free-solid-svg-icons'
import './header.css'
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';

const Header = ({type}) => {
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);

  const handleSearch = async () => {
    if (checkInDate && checkOutDate) {
      try {
        const response = await axios.post('http://localhost:4000/api/search', {
          checkIn: checkInDate.toISOString(),
          checkOut: checkOutDate.toISOString(),
        });
        console.log('Backend response:', response.data);
        alert(`Searching for stays from ${checkInDate.toLocaleDateString()} to ${checkOutDate.toLocaleDateString()}`);
      } catch (error) {
        console.error('Error sending data to backend:', error);
        alert('There was an error with your search.');
      }
    } else {
      alert('Please select both a check-in and check-out date.');
    }
  };
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const handleOperation = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  return (
    <div className="header">
      <div className= {type === "list" ? "headerContainer listMode" : "headerContainer"}>
        <div className="headerList">
          <div className="headerListItem active">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flight</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faCar} />
            <span>Car Rental</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airprot Taxi</span>
          </div>
        </div>
        { type !== "list" && 
        <>  
        <h1 className="headerTitle">A lifetime of discounts? It's Genius.</h1>
        <p className="headerDesc">
          Get rewarded for your travels - unlock instant savings of 10% or more
          with a free account
        </p>
        <button className="headerBtn">Sign In / Register</button>
        <div className="headerSearch">
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faBed} className="headerSearchIcon" />
            <input
              type="text"
              placeholder="Where are you going?"
              className="headerSearchInput"
            />
          </div>
          <div className="headerSearchItem">
            <FontAwesomeIcon
              icon={faCalendarDays}
              className="headerSearchIcon"
            />
            {/*<span className="headerSearchText">Check-in Date</span>}*/}
            <DatePicker
              className="headerDatePicker"
              selected={checkInDate}
              onChange={(date) => setCheckInDate(date)}
              selectsStart
              startDate={checkInDate}
              endDate={checkOutDate}
              placeholderText="Check-in Date"
            />
          </div>
          <div className="headerSearchItem">
            <FontAwesomeIcon
              icon={faCalendarDays}
              className="headerSearchIcon"
            />
            {/*<span className="headerSearchText">Check-out Date</span>}*/}
            <DatePicker
              className="headerDatePicker"
              selected={checkOutDate}
              onChange={(date) => setCheckOutDate(date)}
              selectsEnd
              startDate={checkInDate}
              endDate={checkOutDate}
              minDate={checkInDate}
              placeholderText="Check-out Date"
            />
          </div>
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faPerson} className="headerSearchIcon" />
            <span onClick={()=>setOpenOptions(!openOptions)} className="headerSearchText">{`${options.adult} Adult . ${options.children} Children . ${options.room} Room`}</span>
            {openOptions && <div className="options">
              <div className="optionItem">
                <span className="optionText">Adult</span>
                <div className="optionCounter">
                  <button disabled={options.adult <= 1} className='optionCounterBtn' onClick={()=>handleOperation("adult" , "d")} >-</button>
                  <span className="optionNumber">{options.adult}</span>
                  <button className='optionCounterBtn' onClick={()=>handleOperation("adult" , "i")} >+</button>
                </div>
              </div>
              <div className="optionItem">
                <span className="optionText">Children</span>
                <div className="optionCounter">
                  <button disabled={options.children <= 0} className='optionCounterBtn' onClick={()=>handleOperation("children" , "d")} >-</button>
                  <span className="optionNumber">{options.children}</span>
                  <button className='optionCounterBtn'onClick={()=>handleOperation("children" , "i")} >+</button>
                </div>
              </div>
              <div className="optionItem">
                <span className="optionText">Rooms</span>
                <div className="optionCounter">
                  <button disabled={options.room <= 1} className='optionCounterBtn' onClick={()=>handleOperation("room" , "d")} >-</button>
                  <span className="optionNumber">{options.room}</span>
                  <button className='optionCounterBtn'onClick={()=>handleOperation("room" , "i")} >+</button>
                </div>
              </div>
            </div>}
          </div>
          <div className="headerSearchItem">
            <button className="headerBtn">Search</button>
          </div>
        </div>
        </>}
      </div>
    </div>
  );
}

export default Header 