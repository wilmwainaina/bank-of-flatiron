import React, { useState } from 'react';

function TransactionForm({ onAddTransaction }) {
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");

  function handleSubmit(e) {
      e.preventDefault()
      const transactionObj = { 
          transaction: { 
              date: date,
              description: description,
              category: category,
              amount: amount,
          }
      }
      // persist transaction on server
      fetch("http://localhost:3000/transactions", {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify(transactionObj)
      })
          .then(r => r.json())
          .then(data => onAddTransaction(data.transaction))
      // then use onAddTransaction to add transaction to state
  }

  return (
      <form onSubmit={handleSubmit}>
          <h2>Add Transaction</h2>
          <label htmlFor="date">date:</label>
          <input
              type="text"
              id="date"
              placeholder="Year--Month--Day"
              value={date}
              onChange={(e) => setDate(e.target.value)}
          />
          <br/>
          <br/>
          <label htmlFor="description">Description:</label>
          <input
              type="text"
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
          />
          <br/>
          <br/>
          <label htmlFor="category">category:</label>
          <input
              type="text"
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
          />
          <br/>
          <br/>
          <label htmlFor="amount">amount:</label>
          <input
              type="text"
              id="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
          />
          <br/>
          <br/>
          <button type="submit">Add transaction</button>
      </form>
  )
}

export default TransactionForm;
