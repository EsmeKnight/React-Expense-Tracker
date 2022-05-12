import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

function NewExpense(props) {
  const [addNew, setAddNew] = useState(false);

  function saveExpenseDataHandler(enteredExpenseData) {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    console.log(expenseData);
    props.onNewExpense(expenseData);
  }

  function startAddingHandler() {
    setAddNew(true);
  }
  function stopAddingHandler() {
    setAddNew(false);
  }

  return (
    // ternary operator to conditionally render modal-like input box
    <div className="new-expense">
      {!addNew ? (
        <button onClick={startAddingHandler}>Add Expense</button>
      ) : (
        <ExpenseForm
          onCancel={stopAddingHandler}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      )}
    </div>
  );
}

export default NewExpense;
