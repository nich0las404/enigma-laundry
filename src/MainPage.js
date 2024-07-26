import React from 'react';
import CustomerList from './CustomerList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyCheckDollar } from '@fortawesome/free-solid-svg-icons';

const MainPage = ({ customerName, transactionHistory, handleOpenDialog }) => {
  return (
    <main className='main-transaction-page'>
      <div className='profile-container'>
        <img className='profile' src='https://cdn-icons-png.flaticon.com/512/3135/3135715.png' alt='Profile' />
      </div>

      <div className='transaction-container'>
        <div className='header-container'>
          <p>Transaction List</p>
          <button className='add-transaction-btn' onClick={handleOpenDialog}>
            <FontAwesomeIcon className='icon' icon={faMoneyCheckDollar} />
            Add Transaction
          </button>
        </div>
        <div className='main-customer-container'>
          <div className='description-container'>
            <p className="description">Customer Code</p>
            <p className="description">Customer Name</p>
            <p className="description">Transaction History</p>
          </div>
          <CustomerList 
          customerName={customerName} 
          transactionHistory={transactionHistory} />
        </div>
      </div>
    </main>
  );
};

export default MainPage;
