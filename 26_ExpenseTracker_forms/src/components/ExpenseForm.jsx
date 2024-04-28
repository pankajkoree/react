import React from "react";

export default function ExpenseForm() {
  return (
    <div>
      <form className="expense-form">
        <div className="input-container">
          <label htmlFor="title">Title</label>
          <input id="title" />
        </div>
        <div className="input-container">
          <label htmlFor="category">Category</label>
          <input id="category" />
        </div>
        <div className="input-container">
          <label htmlFor="amount">Amount</label>
          <input id="amount" />
        </div>
        <button className="add-btn">Add</button>
      </form>
    </div>
  );
}
