import React from 'react';

function FormText({
  id, 
  label, 
  placeholder, 
  value, 
  onChange, 
  rows = 6,
  required = false
}) {
  return (
    <div className="contact__form-group">
      <label htmlFor={id}>{label}</label>
      <textarea
        id={id}
        rows={rows}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
      ></textarea>
    </div>
  );
}

export default FormText;