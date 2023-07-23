import React, { useState } from 'react';
import TransactionTable from './components/TransactionTable';
import TransactionForm from './components/TransactionForm';

const App = () => {
  const initialTransactions = [
    // Copy the transactions from the JSON file here
    // ...
  ];

  const [transactions, setTransactions] = useState(initialTransactions);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortType, setSortType] = useState('');

  const addTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  };

  const handleDelete = (id) => {
    const updatedTransactions = transactions.filter(
      (transaction) => transaction.id !== id
    );
    setTransactions(updatedTransactions);
  };

  const filteredTransactions = transactions.filter((transaction) =>
    transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSort = (type) => {
    setSortType(type);
  };

  const sortedTransactions = [...filteredTransactions].sort((a, b) => {
    if (sortType === 'category') {
      return a.category.localeCompare(b.category);
    } else if (sortType === 'description') {
      return a.description.localeCompare(b.description);
    }
    return 0;
  });

  return (
    <div>
      <h1>Bank of Flatiron</h1>
      <TransactionForm onAdd={addTransaction} />
      <input
        type="text"
        placeholder="Search transactions..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={() => handleSort('category')}>Sort by Category</button>
      <button onClick={() => handleSort('description')}>
        Sort by Description
      </button>
      <TransactionTable transactions={sortedTransactions} onDelete={handleDelete} />
    </div>
  );
};

export default App;
