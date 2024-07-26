import React from "react";
import CitraHistory from "./History/CitraHistory";
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileImport } from "@fortawesome/free-solid-svg-icons";
function Citra({}){
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
                    <p className="description">Transaction Code</p>
                    <p className="description">Laundry Package</p>
                    <p className="description">Quantity (QTY)</p>
                    <p className="description">Total Payment</p>
                    </div>
                    <CitraHistory
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