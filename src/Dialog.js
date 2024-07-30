import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { useTransactions } from './transactionContext';

const Dialog = ({
  openDialog,
  handleCloseDialog,
  TransactionCode,
  selectedCustomer,
  handleSelectedCustomer,
  customerName,
  selectedPackage,
  handlePackageChange,
  quantity,
  handleQuantityChange,
  totalPayment,
  handleAddTransaction
}) => {
  const { addTransaction } = useTransactions();

  const handleSubmit = (e) => {
    e.preventDefault();
    if(selectedCustomer && selectedPackage && quantity > 0 && totalPayment > 0){
      const newTransaction = {
        transactionCode: TransactionCode(),
        laundryPackage: selectedPackage,
        quantity,
        totalPayment
      };
      addTransaction(selectedCustomer, newTransaction);
      handleAddTransaction();
      handleCloseDialog();
      
    } else {
      alert('Please fill all the required fields')
    }
  }
  return (
    openDialog && (
      <>
        <div className="overlay" onClick={handleCloseDialog}></div>
        <dialog open className="myDialog">
          <div className='dialog-header'>
            <p>New Transaction</p>
            <button className='close-dialog-btn' onClick={handleCloseDialog}>
              <FontAwesomeIcon icon={faXmark} />
            </button>
          </div>
          <form onSubmit={handleSubmit}>
            <div className='dialog-desc transaction-code-sec'>
              <p>Transaction Code</p>
              <input className='input-form' disabled value={TransactionCode()} />
            </div>
            <div className='dialog-desc customer-name-sec'>
              <p>Customer Name</p>
              <select required className='input-form' value={selectedCustomer} onChange={handleSelectedCustomer}>
                <option className="laundry-package-option" disabled value=''>Select a Customer</option>
                {customerName.map((name, index) => (
                  <option key={index} value={name}>{name}</option>
                ))}
              </select>
            </div>
            <div className='dialog-desc laundry-package-sec'>
              <p>Choose Laundry Package</p>
              <select required className='input-form' value={selectedPackage} onChange={handlePackageChange}>
                <option className="laundry-package-option" disabled value=''>Select a package</option>
                <option value='End of the Month Discount'>End of the Month Discount</option>
                <option value='Economic'>Economic</option>
                <option value='Business'>Business</option>
                <option value='Exclusive'>Exclusive</option>
                <option value='Standard'>Standard</option>
              </select>
            </div>
            <div className='dialog-desc quantity-sec'>
              <p>Quantity (KG)</p>
              <input required className='input-form' type='Number' value={quantity} onChange={handleQuantityChange} />
            </div>
            <div className='dialog-desc total-payment-sec'>
              <p>Total Payment</p>
              <input className='input-form' disabled value={totalPayment.toLocaleString('id-ID', {style: 'currency', currency: 'IDR'})} />
            </div>
            <div className='submit-form-btn-container'>
              <button type='submit' className='submit-form-btn'>Submit</button>
            </div>
          </form>
        </dialog>
      </>
    )
  );
};

export default Dialog;