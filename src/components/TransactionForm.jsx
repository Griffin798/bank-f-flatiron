import React, { useState } from 'react';

const TransactionForm = ({ onSubmit }) => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [category, setCategory] = useState(''); // Step 1: Define category state

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ description, amount, date, category }); // Step 3: Include category in submitted data
    setDescription('');
    setAmount('');
    setDate('');
    setCategory('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      {/* Step 2: Add dropdown for selecting category */}
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="">Select Category</option>
        <option value="Food">Food</option>
        <option value="Shopping">Shopping</option>
        <option value="Transportation">Transportation</option>
        {/* Add more options as needed */}      </select>
      <button type="submit">Add Transaction</button>
    </form>
  );
};

export default TransactionForm;
