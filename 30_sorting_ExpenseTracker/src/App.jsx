import { useState } from "react";
import "./App.css";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseTable from "./components/ExpenseTable";
import expenseData from "./components/expenseData.js";
import { useLocalStorage } from "./hooks/useLocalStorage.js";

function App() {
  const [expense, setExpense] = useState({
    title: "",
    category: "",
    amount: "",
  });
  const [expenses, setExpenses] = useState(expenseData);
  const [editingRowId, setEditingRowId] = useState("");
  const [localData, setLocalData] = useLocalStorage("myNum", [1, 2, 3]);
  console.log(localData);

  return (
    <main>
      <h1
        onClick={() => {
          setLocalData([4, 5, 6]);
        }}
      >
        Track Your Expense
      </h1>
      <h2>{localData.join(", ")}</h2>
      <div className="expense-tracker">
        <ExpenseForm
          setExpenses={setExpenses}
          expense={expense}
          setExpense={setExpense}
          editingRowId={editingRowId}
          setEditingRowId={setEditingRowId}
        />
        <ExpenseTable
          expenses={expenses}
          setExpense={setExpense}
          setExpenses={setExpenses}
          setEditingRowId={setEditingRowId}
        />
      </div>
    </main>
  );
}

export default App;
