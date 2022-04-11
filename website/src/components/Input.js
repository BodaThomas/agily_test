import React from 'react';

const Input = ({
    name,
    onChange,
    placeholder,
    value,
    icon,
    onIconClick
}) => {
    return (
        <div className="input-container">
            <input
                id={name}
                name={name}
                className="input"
                type="text"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
            {icon && <img className="input-icon" src={icon} onClick={onIconClick} alt="The icon of the input" />}
        </div>
    );
}

export default Input;
