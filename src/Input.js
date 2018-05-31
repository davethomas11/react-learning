import React from 'react';

export function Input(props) {
    const { name, displayName, value, onChange } = props;

    return (
        <div className="input">
            <label htmlFor={name}>{displayName}</label>
            <input 
                name={name}
                value={value} 
                onChange={onChange} />
        </div>
    )
}