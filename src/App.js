import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './NavBar';
import Adrian from './Adrian';
import Dialog from './Dialog';
import MainPage from './MainPage';
import Adriana from './Adriana';
import Diana from './Diana';
import Citra from './Citra';

function App() {
  const [openDialog, setDialogOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState('');
  const [selectedCustomer, setSelectedCustomer] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [totalPayment, setTotalPayment] = useState(0);
  const [transactionNumber, setTransactionNumber] = useState(2401)
  let transactionHistory = 0;
  const packagePrices = {
    Standard: 18000,
    Business: 20000,
    Economic: 23000,
    Exclusive: 25000,
    'End of the Month Discount': 15000,
  };
  const customerName = [
    'Citra',
    'Adrian',
    'Diana',
    'Adriana'
  ];
  const TransactionCode = () => {
    return `TTRO228${transactionNumber}`;
  };
  const handleOpenDialog = () => {
    setDialogOpen(true);
  };
  const handleCloseDialog = () => {
    setDialogOpen(false);
  };
  const handlePackageChange = (event) => {
    const selectedPackage = event.target.value;
    setSelectedPackage(selectedPackage);
    calculateTotalPayment(selectedPackage, quantity);
  };
  const handleQuantityChange = (event) => {
    const quantity = Number(event.target.value);
    if(quantity < 0){
      setQuantity(0);
    } else {
      setQuantity(quantity);
      calculateTotalPayment(selectedPackage, quantity);
    }
  };
  const calculateTotalPayment = (selectedPackage, qty) => {
    const pricePerKg = packagePrices[selectedPackage] || 0;
    const total = pricePerKg * qty;
    setTotalPayment(total);
  };
  const handleSelectedCustomer = (event) => {
    setSelectedCustomer(event.target.value);
  };
  const handleAddTransaction = () => {
    setTransactionNumber(prev => prev + 1)
  }
  return (
    <Router>
      <div className='body' id="body">
        <NavBar />
        <Routes>
          <Route path="/" element={<MainPage 
            customerName={customerName} 
            transactionHistory={transactionHistory} 
            handleOpenDialog={handleOpenDialog} />} />
          <Route path="/adrian" element={<Adrian />} />
          <Route path="/adriana" element={<Adriana />} />
          <Route path="/diana" element={<Diana />} />
          <Route path="/citra" element={<Citra />} />
          {/* Add routes for other customer components */}
        </Routes>
        <Dialog
          openDialog={openDialog}
          handleCloseDialog={handleCloseDialog}
          TransactionCode={TransactionCode}
          selectedCustomer={selectedCustomer}
          handleSelectedCustomer={handleSelectedCustomer}
          customerName={customerName}
          selectedPackage={selectedPackage}
          handlePackageChange={handlePackageChange}
          quantity={quantity}
          handleQuantityChange={handleQuantityChange}
          totalPayment={totalPayment}
          handleAddTransaction={handleAddTransaction}
        />
      </div>
    </Router>
  );
}

export default App;
