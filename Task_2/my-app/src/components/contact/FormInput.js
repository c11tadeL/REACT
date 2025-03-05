import React from 'react';

function FormInput({
  type = 'text', 
  id, 
  label, 
  placeholder, 
  value, 
  onChange, 
  required = false
}) {
  return (
    <div className="contact__form-group">
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
      />
    </div>
  );
}

export default FormInput;