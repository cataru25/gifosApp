import React from 'react';
import './Button.css';

function Button({
    className = "",
    onClick,
    children
}) {
    return (
        <button 
            type="button" 
            className={`btn ${className ? `${className}`: ''}`}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export default Button;
