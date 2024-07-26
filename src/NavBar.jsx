import React from "react";
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function NavBar(){
    return (
        <nav className='nav-bar'>
        <div className='logo-container'>
          <p>Simply <span>Fresh</span> Laundry</p>
        </div>
        <div className='nav-home-container'>
          <h3>Home</h3>
          <div className='transaction-nav'>
            <FontAwesomeIcon icon={faCartShopping} />
            Transaction
          </div>
        </div>
      </nav>
    )
}
export default NavBar;