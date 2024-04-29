import PropTypes from "prop-types";

export default function Select({
  label,
  id,
  name,
  value,
  onChange,
  error,
  options,
  defaultOption,
}) {
  return (
    <div className="input-container">
      <label htmlFor={id}>{label}</label>
      <select id={id} name={name} value={value} onChange={onChange}>
        {defaultOption && (
          <option value="" hidden>
            {defaultOption}
          </option>
        )}
        {options.map((option, i) => (
          <option key={i} value={option}>
            {option}
          </option>
        ))}
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
  options: PropTypes.array,
  defaultOption: PropTypes.string,
};
