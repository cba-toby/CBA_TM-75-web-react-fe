import React, { useState } from "react";

const TextInput = ({ label, value, onChange, placeholder }) => {
  const [user, setUser] = useState(value);

  const handleChange = (ev) => {
    setUser({ ...user, name: ev.target.value });
    onChange(ev.target.value);
  };

  return (
    <div className="row mb-3">
      <label htmlFor="inputText" className="col-sm-2 col-form-label">
        {label}
      </label>
      <div className="col-sm-10">
        <input
          value={user.name}
          onChange={handleChange}
          placeholder={placeholder}
          className="form-control"
        />
      </div>
    </div>
  );
};

export default TextInput;
