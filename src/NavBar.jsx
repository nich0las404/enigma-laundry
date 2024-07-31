import React from "react";
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function NavBar({ isHovered }){
    return (
        <nav className='nav-bar'>
        <div className='logo-container'>
          <p>Simply <span>Fresh</span> Laundry</p>
        </div>
        <div className='nav-home-container'>
          <h3>Home</h3>
          <div disabled className={`transaction-nav ${isHovered? 'hover': ''}`}>
            <FontAwesomeIcon icon={faCartShopping} />
            Transaction
          </div>
        </div>
      </nav>
    )
}
export default NavBar;