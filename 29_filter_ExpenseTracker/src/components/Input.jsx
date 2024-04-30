import PropTypes from "prop-types";

export default function Input({ label, id, name, value, onChange, error }) {
  return (
    <div className="input-container">
      <label htmlFor={id}>{label}</label>
      <input id={id} name={name} value={value} onChange={onChange} />
      <p className="error">{error}</p>
    </div>
  );
}

Input.propTypes = {
  label: PropTypes.node,
  id: PropTypes.node,
  name: PropTypes.node,
  value: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.node,
};
