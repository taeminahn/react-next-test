import React from 'react';
import PropTypes from 'prop-types';

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

InputBoxComponent.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  setValue: PropTypes.string.isRequired,
  error: PropTypes.string.isRequired,
  reactHookFormRegister: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default InputBoxComponent;