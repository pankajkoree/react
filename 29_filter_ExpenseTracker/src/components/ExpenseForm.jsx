import { useState } from "react";
import Input from "./Input";
import PropTypes from "prop-types";
import Select from "./Select";

export default function ExpenseForm({ setExpenses, setExpense, expense }) {
  const [errors, setErrors] = useState({});

  const validationConfig = {
    title: [
      { required: true, message: "please enter title" },
      { minLength: 5, message: "Title should be five characters long" },
    ],
    category: [
      { required: true, message: "please select category" },
      { minLength: 5, message: "Title should be five characters long" },
    ],
    amount: [
      { required: true, message: "please enter amount" },
      { minLength: 5, message: "Title should be five characters long" },
      { isNaN: true, message: "Amount should be number" },
    ],
  };

  const validate = (formData) => {
    const errorsData = {};
    Object.entries(formData).forEach(([key, value]) => {
      validationConfig[key].some((rule) => {
        if (rule.required && !value) {
          errorsData[key] = rule.message;
          return true;
        }
        if (rule.minLength && value.length < 5) {
          errorsData[key] = rule.message;
          return true;
        }
      });
    });

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
  expense: PropTypes.object,
  setExpense: PropTypes.func,
};
