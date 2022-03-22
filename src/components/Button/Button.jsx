import React from 'react';
import './button.scss'

const Button = (props) => {
    return (
        <button className="pri-btn">
            {props.children}
        </button>
    );
}

export default Button;
