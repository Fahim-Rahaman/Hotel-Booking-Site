import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed,faTaxi,faPlane,faCar } from '@fortawesome/free-solid-svg-icons'
import './header.css'

const Header = () => {
  return (
    <div className="header">
      <div className="headerContainer">
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
      </div>
    </div>
  );
}

export default Header 