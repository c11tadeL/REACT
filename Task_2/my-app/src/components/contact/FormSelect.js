import React from 'react';

function FormSelect({
  id, 
  label, 
  value, 
  onChange, 
  options,
  required = false
}) {
  return (
    <div className="contact__form-group">
      <label htmlFor={id}>{label}</label>
      <select
        id={id}
        value={value}
        onChange={onChange}
        required={required}
      >
        <option value="" disabled>Select Subject</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default FormSelect;