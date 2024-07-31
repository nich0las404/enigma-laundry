import React from "react";

const packageColors = {
    Standard: '#7bbaf0',
    Business: 'blue',
    Economic: '#87cefa',
    Exclusive: '#ffbf00',
    'End of the Month Discount': 'lightgreen',
}
function AdrianaHistory({transactions}){
    return(
        <>
        <div className="customer-container reworked-customer-container">
            {
                transactions.map((transaction, index)=> (
                    <div key={index} className="customer-test">
                        <div className="description-trans">
                        <p className={`customer-code ${index % 2 === 0? 'orange': 'green'}`}>{transaction.transactionCode}</p>
                        </div>
                        <p className="description-trans">
                        <span
                            className="package-circle"
                            style={{ backgroundColor: packageColors[transaction.laundryPackage] }}
                            ></span>
                            {transaction.laundryPackage}
                            </p>
                        <p className="description-trans">{transaction.quantity}KG</p>
                        <p className="description-trans payment-style">{transaction.totalPayment.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</p>
                    </div>
                ))
            }
        </div>
        </>
    )
}
export default AdrianaHistory; 