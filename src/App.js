import './App.css';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faMoneyCheckDollar, faEye , faXmark} from '@fortawesome/free-solid-svg-icons';

function App(){
  const [openDialog, setDialogOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState('');
  const [selectedCostumer, setSelectedCostumer] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [totalPayment, setTotalPayment] = useState(0);
  let transactionHistory = 0;
  const pacakagePrices = {
    Standard: 18000,
    Business: 20000,
    Economic: 23000,
    Exclusive: 25000,
    'End of the Month Discount': 15000,
  }
  const customerName = [
    'Citra',
    'Adrian',
    'Diana',
    'Adriana'
  ]
  const TransactionCode = () => {
    return `TRO2282401`
  };
  const handleOpenDialog = () => {
    setDialogOpen(true)
  }
  const handleCloseDialog = () => {
    setDialogOpen(false)
  }
  const handlePackageChange = (event) => {
    const selectedPackage = event.target.value
    setSelectedPackage(selectedPackage);
    calculateTotalPayment(selectedPackage, quantity)
  }
  const handleQuantityChange = (event) => {
    const quantity = Number(event.target.value);
    setQuantity(quantity);
    calculateTotalPayment(selectedPackage, quantity);
  }
  const calculateTotalPayment = (selectedPackage, qty) => {
    const pricePerKg = pacakagePrices[selectedPackage] || 0;
    const total = pricePerKg * qty;
    setTotalPayment(total)
  }
  const handleSelectedCostumer = (event) => {
    setSelectedCostumer(event.target.value)
  }
  return (
    <div className='body' id="body">
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

      <main className='main-transaction-page'>
        <div className="profile-container">
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
            <div className='customers-container'>
              <div className='customer'>
                <p className='customer-code green'>LDRSFO2241</p>
                <div className='customer-name-container'>
                  <p className='customer-name'>{customerName[0]}</p>
                  <p className='total-transaction'>{transactionHistory} Transaction</p>
                </div>
                <button className='view-transaction-btn'><FontAwesomeIcon icon={faEye} /> View Transaction</button>
              </div>
              <div className='customer'>
                <p className='customer-code orange'>LDRSFO2242</p>
                <div className='customer-name-container'>
                  <p className='customer-name'>{customerName[1]}</p>
                  <p className='total-transaction'>{transactionHistory} Transaction</p>
                </div>
                <button className='view-transaction-btn'><FontAwesomeIcon icon={faEye} /> View Transaction</button>
              </div>
              <div className='customer'>
                <p className='customer-code green'>LDRSFO2243</p>
                <div className='customer-name-container'>
                  <p className='customer-name'>{customerName[2]}</p>
                  <p className='total-transaction'>{transactionHistory} Transaction</p>
                </div>
                <button className='view-transaction-btn'><FontAwesomeIcon icon={faEye} /> View Transaction</button>
              </div>
              <div className='customer'>
                <p className='customer-code orange'>LDRSFO2244</p>
                <div className='customer-name-container'>
                  <p className='customer-name'>{customerName[3]}</p>
                  <p className='total-transaction'>{transactionHistory} Transaction</p>
                </div>
                <button className='view-transaction-btn'><FontAwesomeIcon icon={faEye} /> View Transaction</button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {openDialog && (
        <>
          <div className="overlay" onClick={handleCloseDialog}></div>
          <dialog open className="myDialog">
            <div className='dialog-header'>
              <p>New Transaction</p>
              <button className='close-dialog-btn' onClick={handleCloseDialog}>
                <FontAwesomeIcon icon={faXmark} />
              </button>
            </div>
            <form>
              <div className='dialog-desc transaction-code-sec'>
                <p>Transaction Code</p>
                <input className='input-form' disabled value={TransactionCode()} />
              </div>
              <div className='dialog-desc costumer-name-sec'>
                <p>Costumer Name</p>
                <select className='input-form' value={selectedCostumer} onChange={handleSelectedCostumer}>
                <option className="laundry-package-option" disabled value=''>Select a Costumer</option>
                  <option value={customerName[0]}>{customerName[0]}</option>
                  <option value={customerName[1]}>{customerName[1]}</option>
                  <option value={customerName[2]}>{customerName[2]}</option>
                  <option value={customerName[3]}>{customerName[3]}</option>
                </select>
              </div>
              <div className='dialog-desc laundry-package-sec'>
                <p>Choose Laundry Package</p>
                <select className='input-form' value={selectedPackage} onChange={handlePackageChange}>
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
                <input className='input-form' type='Number' value={quantity} onChange={handleQuantityChange}/>
              </div>
              <div className='dialog-desc total-payment-sec'>
                <p>Total Payment</p>
                <input className='input-form' disabled value={totalPayment.toLocaleString('id-ID', {style: 'currency', currency: 'IDR'})} />
              </div>
              <div className='submit-form-btn-container'>
                <button className='submit-form-btn'>Submit</button>
              </div>
            </form>
          </dialog>
        </>
      )}
    </div>
  ); 
}

export default App;