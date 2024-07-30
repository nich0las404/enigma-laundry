import React, { createContext, useState, useContext } from "react";

const transactionContext = createContext()

export const useTransactions = () => useContext(transactionContext)

export const TransactionProvider = ({ children }) => {
    const [transactions, setTransactions] = useState({
        Citra: [],
        Adrian: [],
        Diana: [],
        Adriana: []
    });

    const addTransaction = (customer, transaction) => {
        setTransactions(prev => ({
            ...prev,
            [customer]: [...prev[customer], transaction]
        }));
    };

    return (
        <transactionContext.Provider value={{transactions, addTransaction}}>
            {children}
        </transactionContext.Provider>
    )
}

