import React from 'react';
import PropTypes from 'prop-types';

const NumberInput = ({fieldName, fieldId, fieldValue, onChange}) => {
    const handleOnChange = e => {
        e.preventDefault();
        const {name, value} = e.target;
        onChange(name, value);
        //console.log(e);
    }
    return (
        <input
            type="text"
            name={fieldName}
            id={fieldId}
            value={fieldValue}
            onChange={handleOnChange}
        />
    )
}


NumberInput.propTypes = {
    fieldName: PropTypes.string.isRequired
    , fieldId: PropTypes.string
    , fieldValue: PropTypes.string
    , onChange: PropTypes.func
};

export default NumberInput;