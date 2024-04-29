import { useState } from "react";
import Input from "./Input";
import PropTypes from "prop-types";
import Select from "./Select";

export default function ExpenseForm({ setExpenses }) {
  const [expense, setExpense] = useState({
    title: "",
    category: "",
    amount: "",
  });

  const [errors, setErrors] = useState({});

  const validate = (FormData) => {
    const errorsData = {};
    if (!FormData.title) {
      errorsData.title = "Title is required";
    }
    if (!FormData.category) {
      errorsData.category = "Category is required";
    }
    if (!FormData.amount) {
      errorsData.amount = "Amount is required";
    }

    setErrors(errorsData);
    return errorsData;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validateResult = validate(expense);
    if (Object.keys(validateResult).length) return;

    setExpenses((prevState) => [
      ...prevState,
      { ...expense, id: crypto.randomUUID() },
    ]);
    setExpense({
      title: "",
      category: "",
      amount: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExpense((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    setErrors({});
  };
  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <Input
        label="Title"
        id="title"
        name="title"
        value={expense.title}
        onChange={handleChange}
        error={errors.title}
      />

      <Select
        label="Category"
        id="category"
        name="category"
        value={expense.category}
        onChange={handleChange}
        options={["Grocery", "Clothes", "Bills", "Education", "Medicine"]}
        defaultOption="Select category"
        error={errors.category}
      />

      <Input
        label="Amount"
        id="amount"
        name="amount"
        value={expense.amount}
        onChange={handleChange}
        error={errors.amount}
      />
      <button className="add-btn">Add</button>
    </form>
  );
}

ExpenseForm.propTypes = {
  setExpenses: PropTypes.func.isRequired,
};
