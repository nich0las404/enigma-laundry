import React from "react";
import AdrianaHistory from "./History/AdrianaHistory";
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileImport } from "@fortawesome/free-solid-svg-icons";
import { useTransactions } from "./transactionContext";


function Adriana(){
    const { transactions } = useTransactions()
    const navigate = useNavigate();
    
    function navigateToHome(){
        navigate('/')
    }
return(
    <>
    <div className="main-transaction-page">
        <div className="transaction-container">
            <div className='header-container'>
            <p>Adriana's Transaction History</p>
            <div style={{display: "none"}}></div>
            </div>
            <div className="main-customer-container">
                <div className="description-container">
                <p className="description-spaces">Transaction Code</p>
                <p className="description-spaces">Laundry Package</p>
                <p className="description-spaces">Quantity (QTY)</p>
                <p className="description-spaces">Total Payment</p>
                </div>
                <AdrianaHistory
                transactions = {transactions.Adriana}
                />
            </div>
            <div className="return-home-btn-container">
                    <button className="return-home-btn"onClick={() => navigateToHome()}><FontAwesomeIcon icon={faFileImport} /> Return</button>
            </div>
        </div>
    </div>
</>
)
}

export default Adriana;