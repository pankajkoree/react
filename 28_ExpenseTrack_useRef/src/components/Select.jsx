import PropTypes from "prop-types";

export default function Select({ label, id, name, value, onChange, error }) {
  return (
    <div className="input-container">
      <label htmlFor={id}>{label}</label>
      <select id={id} name={name} value={value} onChange={onChange}>
        <option value="" hidden>
          Select Category
        </option>
        <option value="Grocery">Grocery</option>
        <option value="Clothes">Clothes</option>
        <option value="Bills">Bills</option>
        <option value="Education">Education</option>
        <option value="Medicine">Medicine</option>
      </select>
      <p className="error">{error}</p>
    </div>
  );
}

Select.propTypes = {
  id: PropTypes.node,
  label: PropTypes.node,
  name: PropTypes.node,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.node,
};
