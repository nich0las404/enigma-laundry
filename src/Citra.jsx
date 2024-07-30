import React from "react";
import CitraHistory from "./History/CitraHistory";
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileImport } from "@fortawesome/free-solid-svg-icons";
import { useTransactions } from "./transactionContext";
function Citra(){
    const { transactions } =useTransactions()
    const navigate = useNavigate();

    const navigateToHome = () => {
      navigate(`/`);
    };

return(
    <>
        <div className="main-transaction-page">
            <div className="transaction-container">
                <div className='header-container'>
                <p>Citra's Transaction History</p>
                <div style={{display: "none"}}></div>
                </div>
                <div className="main-customer-container">
                    <div className="description-container">
                    <p className="description-citra">Transaction Code</p>
                    <p className="description-citra">Laundry Package</p>
                    <p className="description-citra">Quantity (QTY)</p>
                    <p className="description-citra">Total Payment</p>
                    </div>
                    <CitraHistory
                    transactions = {transactions.Citra}
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

export default Citra;