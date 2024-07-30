import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { useTransactions } from './transactionContext';

const CustomerList = () => {
  const navigate = useNavigate();
  const { transactions } = useTransactions();
  const navigateToCustomer = (customer) => {
    navigate(`/${customer}`);
  };

  return (
    <div className='customers-container'>
      <div className='customer'>
        <p className='customer-code green'>LDRSFO2241</p>
        <div className='customer-name-container'>
            <p className='customer-name'>Citra</p>
            <p className='total-transaction'>{transactions.Citra.length} Transaction</p>
        </div>
        <button className='view-transaction-btn' onClick={() => navigateToCustomer('citra')}>
            <FontAwesomeIcon icon={faEye} /> View Transaction
          </button>
      </div>
      <div className='customer'>
        <p className='customer-code orange'>LDRSFO2242</p>
        <div className='customer-name-container'>
            <p className='customer-name'>Adrian</p>
            <p className='total-transaction'>{transactions.Adrian.length} Transaction</p>
        </div>
        <button className='view-transaction-btn' onClick={() => navigateToCustomer('adrian')}>
            <FontAwesomeIcon icon={faEye} /> View Transaction
          </button>
      </div>
      <div className='customer'>
        <p className='customer-code green'>LDRSFO2243</p>
        <div className='customer-name-container'>
            <p className='customer-name'>Diana</p>
            <p className='total-transaction'>{transactions.Diana.length} Transaction</p>
        </div>
        <button className='view-transaction-btn' onClick={() => navigateToCustomer('diana')}>
            <FontAwesomeIcon icon={faEye} /> View Transaction
          </button>
      </div>
      <div className='customer'>
        <p className='customer-code orange'>LDRSFO2244</p>
        <div className='customer-name-container'>
            <p className='customer-name'>Adriana</p>
            <p className='total-transaction'>{transactions.Adriana.length} Transaction</p>
        </div>
        <button className='view-transaction-btn' onClick={() => navigateToCustomer('adriana')}>
            <FontAwesomeIcon icon={faEye} /> View Transaction
          </button>
      </div>
    </div>
  );
};

export default CustomerList;