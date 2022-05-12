import React, { useState } from "react";

function ExpenseForm(props) {
  // const [title, setTitle] = useState("");
  // const [amount, setAmount] = useState("");
  // const [date, setDate] = useState("");

  const [userInput, setUserInput] = useState({
    title: "",
    amount: "",
    date: "",
  });

  function handleTitleChange(event) {
    setUserInput((prevUserInput) => {
      return { ...prevUserInput, title: event.target.value };
    });
  }

  function handleAmountChange(event) {
    setUserInput((prevUserInput) => {
      return { ...prevUserInput, amount: event.target.value };
    });
  }

  function handleDateChange(event) {
    setUserInput((prevUserInput) => {
      return { ...prevUserInput, date: event.target.value };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    const expenseData = {
      title: userInput.title,
      amount: +userInput.amount,
      date: new Date(userInput.date),
    };

    props.onSaveExpenseData(expenseData);
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        title: "",
        amount: "",
        date: "",
      };
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            onChange={handleTitleChange}
            value={userInput.title}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={handleAmountChange}
            value={userInput.amount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={handleDateChange}
            value={userInput.date}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={props.onCancel} type="submit">
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
