import React, { useState, useEffect } from 'react';
import TransactionForm from './TransactionForm';
import TransactionTable from './TransactionTable';
import TransactionList from './TransactionList';

function App() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/transactions")
      .then((r) => r.json())
      .then(data => setTransactions(data));
  }, []);

  function addTransaction(newTransaction) {
    const updatedTransactions = [...transactions, newTransaction];
    setTransactions(updatedTransactions);
  }

  function deleteTransaction(id) {
    const updatedTransactions = transactions.filter(transaction => transaction.id !== id);
    setTransactions(updatedTransactions);
  }

  return (
    <div style={{ padding: "5px", border: "1px solid orange" }}>
      <h1>Bank of Flatiron</h1>
      <TransactionForm onAddTransaction={addTransaction} />
      <TransactionList transactions={transactions} onDeleteTransaction={deleteTransaction} />
    </div>
  );
}

export default App;
