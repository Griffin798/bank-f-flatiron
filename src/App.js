import React, { useState } from 'react';
import TransactionTable from './components/TransactionTable';
import TransactionForm from './components/TransactionForm';
import TransactionFilter from './components/TransactionFilter';
import './App.css';

const App = () => {
  const [transactions, setTransactions] = useState([]);
  const [filteredTransactions, setFilteredTransactions] = useState([]);

  const handleAddTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
    setFilteredTransactions([...transactions, newTransaction]);
  };

  const handleFilterTransactions = (searchTerm) => {
    const filtered = transactions.filter(transaction =>
      transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredTransactions(filtered);
  };

  return (
    <div className="App">
      <h1>Bank of Flatiron</h1>
      <div className="transaction-form">
        <TransactionForm onSubmit={handleAddTransaction} />
      </div>
      <div className="transaction-filter">
        <TransactionFilter onChange={handleFilterTransactions} />
      </div>
      <div className="transaction-table">
        <TransactionTable transactions={filteredTransactions} />
      </div>
    </div>
  );
};

export default App;
