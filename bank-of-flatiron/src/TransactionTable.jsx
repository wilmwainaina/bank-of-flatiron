import React from 'react';

function TransactionTable({ transaction, onDeleteTransaction }) {
  const { id, date, description, category, amount } = transaction;

  function handleDelete() {
    fetch(`http://localhost:3000/transactions/${id}`,{
      method: "DELETE"
    });
    onDeleteTransaction(id);
  }

  return (
    <table>
      <tbody>
        <tr>
          <td><strong>{date} : </strong></td>
          <td>{description} : </td>
          <td>{category} : </td>
          <td><strong>{amount}</strong></td>
          <td>
            <button onClick={handleDelete}>Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default TransactionTable;
