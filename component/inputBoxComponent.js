import React from 'react';

const InputBoxComponent = ({
   type = "text",
   name,
   placeholder,
   value,
   setValue,
   error = false,
   reactHookFormRegister,
                           }) => {
  return (
    <div>
      <input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        {...reactHookFormRegister}
        onChange={setValue ? (e) => setValue(e.target.value) : null}
      />
      {error
        ? (<div style={{color: 'red'}}>{error}</div>)
        : null
      }
    </div>
  );
};

export default InputBoxComponent;