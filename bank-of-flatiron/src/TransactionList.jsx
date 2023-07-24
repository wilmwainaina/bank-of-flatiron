import React from "react";
import TransactionTable from "./TransactionTable";
import searchbar from "./ searchbar";

function TransactionList({ transactions, onDeleteTransaction }) {
  return (
    <div>
      <h2>My Transactions</h2>
      <searchbar/>
      <ul>
        {transactions.map((transaction) => (
          <TransactionTable key={transaction.id} transaction={transaction} onDeleteTransaction={onDeleteTransaction} />
        ))}
      </ul>
    </div>
  );
}

export default TransactionList;
