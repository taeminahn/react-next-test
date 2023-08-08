import React from 'react';
import PropTypes from 'prop-types';

const InputBoxComponent = (props) => {

  return (
    <div>
      <input
        type={props.type}
        name={props.name}
        value={props.value}
        placeholder={props.placeholder}
        {...props.reactHookFormRegister}
        onChange={props.setValue ? (e) => props.setValue(e.target.value) : null}
      />
      {props.error
        ? (<div style={{color: 'red'}}>{props.error}</div>)
        : null
      }
    </div>
  );
};

InputBoxComponent.propTypes = {
  props: PropTypes.shape({
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    setValue: PropTypes.func.isRequired,
    error: PropTypes.string.isRequired,
    reactHookFormRegister: PropTypes.objectOf(PropTypes.any).isRequired,
  }),
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
  error: PropTypes.string.isRequired,
  reactHookFormRegister: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default InputBoxComponent;