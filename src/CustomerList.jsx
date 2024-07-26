import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const CustomerList = ({ customerName, transactionHistory }) => {
  const navigate = useNavigate();

  const navigateToCustomer = (customer) => {
    navigate(`/${customer.toLowerCase()}`);
  };

  return (
    <div className='customers-container'>
      {customerName.map((name, index) => (
        <div key={index} className='customer'>
          <p className={`customer-code ${index % 2 === 0 ? 'green' : 'orange'}`}>LDRSFO224{index + 1}</p>
          <div className='customer-name-container'>
            <p className='customer-name'>{name}</p>
            <p className='total-transaction'>{transactionHistory} Transaction</p>
          </div>
          <button className='view-transaction-btn' onClick={() => navigateToCustomer(name)}>
            <FontAwesomeIcon icon={faEye} /> View Transaction
          </button>
        </div>
      ))}
    </div>
  );
};

export default CustomerList;