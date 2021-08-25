import React from 'react'

function Button({
    className = "",
    onClick,
    children
}) {
    return (
        <button 
            type="button" 
            className={`btn ${className ? `btn-${className}`: ''}`}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export default Button;
